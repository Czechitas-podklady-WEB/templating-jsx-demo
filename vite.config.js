import { defineConfig } from 'vite'
import { viteStaticCopy } from 'vite-plugin-static-copy'
import { glob } from 'glob'
import { relative } from 'path'
import { fileURLToPath } from 'url'

export default defineConfig({
    //base: '/templating-jsx-demo/', // Nutno upravit podle názvu repozitáře
    root: "./src/pages",
    publicDir: "../../public",
    build: {
        outDir: '../../dist',
        emptyOutDir: true,
        target: 'es2022',
        rollupOptions: {
            input: glob.sync('src/pages/**/.html')
        },
    },
    esbuild: {
        jsxInject: `import {h, Fragment} from 'jsx-dom'`,
        jsxFactory: "h",
        jsxFragment: "Fragment"
    },
    plugins: [
        viteStaticCopy({ //TODO zrušit, až bude API pro fetch
            targets: [
                {
                    src: '../../data/*.json',
                    dest: 'data'
                }
            ]
        })
    ]
})