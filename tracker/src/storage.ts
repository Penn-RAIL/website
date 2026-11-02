declare global { interface Window {RAIL_CONFIG?:{supabaseUrl:string;supabaseKey:string}} }
const config=window.RAIL_CONFIG||{supabaseUrl:'',supabaseKey:''};
const key='penn-rail-session-v1';
type Session={access_token:string;refresh_token:string;expires_at:number};
function session():Session|null{try{return JSON.parse(localStorage.getItem(key)||'null')}catch{return null}}
export const configured=()=>/^https:\/\/[a-z0-9-]+\.supabase\.co$/.test(config.supabaseUrl)&&!!config.supabaseKey;
export const hasSession=()=>!!session();
function store(s:any){localStorage.setItem(key,JSON.stringify({access_token:s.access_token,refresh_token:s.refresh_token,expires_at:Date.now()+s.expires_in*1000}));}
async function auth(path:string,body:any){const r=await fetch(config.supabaseUrl+'/auth/v1/'+path,{method:'POST',headers:{apikey:config.supabaseKey,'Content-Type':'application/json'},body:JSON.stringify(body)});const d:any=await r.json();if(!r.ok)throw Error(d.msg||d.error_description||d.message||'Unable to sign in. Contact the lab administrator.');return d}
const verifierKey = 'penn-rail-pkce-v1';

function base64Url(bytes: Uint8Array) {
  return btoa(String.fromCharCode(...bytes)).replaceAll('+','-').replaceAll('/','_').replace(/=+$/, '');
}

export async function requestAccessLink(name:string,email:string) {
  const verifier = base64Url(crypto.getRandomValues(new Uint8Array(48)));
  const digest = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(verifier));
  const redirectTo = new URL('/website/tracker/', window.location.origin).href;
  await auth('otp?redirect_to=' + encodeURIComponent(redirectTo), {
    email: email.trim().toLowerCase(), create_user: true, data: {full_name: name.trim()},
    code_challenge: base64Url(new Uint8Array(digest)), code_challenge_method: 's256'
  });
  localStorage.setItem(verifierKey, verifier);
}

export function takeEmailLink() {
  const url = new URL(window.location.href);
  const code = url.searchParams.get('code');
  if (code) {
    url.searchParams.delete('code');
    history.replaceState(null, '', url.pathname + url.search);
  }
  return code;
}

export async function completeEmailLink(code:string) {
  const verifier = localStorage.getItem(verifierKey);
  if (!verifier) throw Error('Open the newest email link in the browser where you requested it.');
  const session = await auth('token?grant_type=pkce', {auth_code:code,code_verifier:verifier});
  store(session);
  localStorage.removeItem(verifierKey);
}
export function signOut(){const s=session();localStorage.removeItem(key);if(s)void fetch(config.supabaseUrl+'/auth/v1/logout',{method:'POST',headers:{apikey:config.supabaseKey,Authorization:'Bearer '+s.access_token}});}
let refreshing:Promise<void>|null=null;
async function token(){let s=session();if(!s)throw Error('Please sign in to continue.');if(Date.now()>s.expires_at-60000){if(!refreshing)refreshing=auth('token?grant_type=refresh_token',{refresh_token:s.refresh_token}).then(store).finally(()=>{refreshing=null});await refreshing;s=session();}return s!.access_token;}
async function request(path:string,init:RequestInit={}){const r=await fetch(config.supabaseUrl+'/rest/v1/'+path,{...init,headers:{apikey:config.supabaseKey,Authorization:'Bearer '+await token(),'Content-Type':'application/json',Prefer:'return=representation',...init.headers}});if(!r.ok){const d:any=await r.json().catch(()=>({}));throw Error(r.status===401?'Your session expired. Sign out and sign in again.':r.status===403?'You do not have access to this lab workspace.':d.message||'Unable to save. Please try again.');}return r.json() as Promise<any>}
export async function loadRecords(){const members=await request('rail_members?select=email');if(!members.length)throw Error('Your account has not been granted access to this lab workspace.');const rows=await request('rail_records?select=id,data,version&order=updated_at.desc');return rows.map((r:any)=>({...r.data,id:r.id,version:r.version}));}
export async function saveRecord(record:any){const {id,version,...data}=record;const rows=await request(version?'rail_records?id=eq.'+encodeURIComponent(id)+'&version=eq.'+version:'rail_records',{method:version?'PATCH':'POST',body:JSON.stringify(version?{data,version:version+1}:{id,data,version:1})});if(!rows.length)throw Error('Someone updated this record. Close this form, refresh, and try again.');return {...rows[0].data,id:rows[0].id,version:rows[0].version};}
