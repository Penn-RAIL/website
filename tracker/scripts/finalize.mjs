import {readFileSync,writeFileSync,cpSync,rmSync} from 'node:fs';
rmSync('assets',{recursive:true,force:true});
cpSync('build/assets','assets',{recursive:true});
writeFileSync('index.html', '---\nlayout: null\ntitle: Lab Tracker\nnav:\n  order: 7\n  tooltip: Private project and submission workspace\n---\n'+readFileSync('build/app.html','utf8'));
