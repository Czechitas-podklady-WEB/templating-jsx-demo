import { defineConfig } from 'vite'
import { glob } from 'glob'

export default defineConfig({
    //base: '/templating-jsx-demo/', // Nutno upravit podle názvu repozitáře
    root: "./src/pages",
    publicDir: "../../public",
    build: {
        outDir: '../../dist',
        emptyOutDir: true,
        target: 'es2022',
        rollupOptions: {
            input: glob.sync('src/pages/**/*.html')
        },
    },
    esbuild: {
        jsxInject: `import {h, Fragment} from 'jsx-dom'`,
        jsxFactory: "h",
        jsxFragment: "Fragment"
    }
})