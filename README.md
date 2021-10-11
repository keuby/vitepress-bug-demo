# Vitepress build error demo

Compilation errors occur in some special cases

## Repro Steps

```bash
yarn
yarn dev
```

Dev started up fine, but the build reported an error

```bash
yarn build
```

```plain
yarn run v1.22.11
$ vitepress build docs
vitepress v0.20.0
⠋ building client + server bundles...[vite:vue] Duplicate attribute.
file: /vitepress-bug-demo/docs/index.md:5:42
✖ building client + server bundles...
[vite:vue] Cannot read property 'line' of undefined
file: /vitepress-bug-demo/docs/index.md
build error:
 SyntaxError: Duplicate attribute.
    at createCompilerError (/vitepress-bug-demo/node_modules/@vue/compiler-core/dist/compiler-core.cjs.js:19:19)
    at emitError (/vitepress-bug-demo/node_modules/@vue/compiler-core/dist/compiler-core.cjs.js:1599:29)
    at parseAttribute (/vitepress-bug-demo/node_modules/@vue/compiler-core/dist/compiler-core.cjs.js:1340:9)
    at parseAttributes (/vitepress-bug-demo/node_modules/@vue/compiler-core/dist/compiler-core.cjs.js:1316:22)
    at parseTag (/vitepress-bug-demo/node_modules/@vue/compiler-core/dist/compiler-core.cjs.js:1186:17)
    at parseElement (/vitepress-bug-demo/node_modules/@vue/compiler-core/dist/compiler-core.cjs.js:1115:21)
    at parseChildren (/vitepress-bug-demo/node_modules/@vue/compiler-core/dist/compiler-core.cjs.js:943:28)
    at parseElement (/vitepress-bug-demo/node_modules/@vue/compiler-core/dist/compiler-core.cjs.js:1131:22)
    at parseChildren (/vitepress-bug-demo/node_modules/@vue/compiler-core/dist/compiler-core.cjs.js:943:28)
    at parseElement (/vitepress-bug-demo/node_modules/@vue/compiler-core/dist/compiler-core.cjs.js:1131:22) {
  code: 'PLUGIN_ERROR',
  loc: {
    file: '/vitepress-bug-demo/docs/index.md',
    line: 5,
    column: 42
  },
  id: '/vitepress-bug-demo/docs/index.md',
  plugin: 'vue',
  hook: 'transform',
  pluginCode: 2,
  watchFiles: [
    '/vitepress-bug-demo/node_modules/vitepress/dist/client/app/index.js',
    '/vitepress-bug-demo/docs/index.md',
    '/vitepress-bug-demo/node_modules/vitepress/dist/client/app/utils.js',
    '/vitepress-bug-demo/node_modules/vitepress/dist/client/app/router.js',
    '/vitepress-bug-demo/node_modules/vitepress/dist/client/app/data.js',
    '/vitepress-bug-demo/node_modules/vitepress/dist/client/app/composables/head.js',
    '/vitepress-bug-demo/node_modules/vitepress/dist/client/app/composables/preFetch.js',
    '/vitepress-bug-demo/node_modules/vitepress/dist/client/app/components/Content.js',
    '/vitepress-bug-demo/node_modules/vitepress/dist/client/app/components/ClientOnly.js',
    '/vitepress-bug-demo/node_modules/vitepress/dist/client/app/components/Debug.vue',
    '/vitepress-bug-demo/node_modules/vue/dist/vue.runtime.esm-bundler.js',
    '/vitepress-bug-demo/node_modules/vitepress/dist/client/theme-default/index.js'
  ]
}
```