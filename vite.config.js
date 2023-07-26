import { defineConfig } from 'vite'
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig({
    root: "./src/pages",
    publicDir: "../../public",
    build: {
        rollupOptions: {
            input: ["./index.html"], //TODO všechny soubory *.html
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