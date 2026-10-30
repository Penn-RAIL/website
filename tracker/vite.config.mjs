import {defineConfig} from 'vite';
export default defineConfig({base:'/website/tracker/',build:{outDir:'build',emptyOutDir:true,rollupOptions:{input:'app.html'}},esbuild:{jsx:'automatic'}});
