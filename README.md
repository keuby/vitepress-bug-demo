# Vitepress build error demo

Vitepress build error when using unplugin-vue-Components

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
✓ building client + server bundles...
⠋ rendering pages.../Users/knight/Workspace/vitepress-bug-demo/node_modules/ant-design-vue/es/index.js:1
import * as components from './components';
^^^^^^

SyntaxError: Cannot use import statement outside a module
    at wrapSafe (internal/modules/cjs/loader.js:988:16)
    at Module._compile (internal/modules/cjs/loader.js:1036:27)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1101:10)
    at Module.load (internal/modules/cjs/loader.js:937:32)
    at Function.Module._load (internal/modules/cjs/loader.js:778:12)
    at Module.require (internal/modules/cjs/loader.js:961:19)
    at require (internal/modules/cjs/helpers.js:92:18)
    at Module.<anonymous> (/Users/knight/Workspace/vitepress-bug-demo/node_modules/vitepress/dist/client/app/temp/index.md.js:5:10)
    at Module._compile (internal/modules/cjs/loader.js:1072:14)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1101:10)
✖ rendering pages...
```