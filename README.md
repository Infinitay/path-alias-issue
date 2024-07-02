I made this repo to reproduce an issue that I am having in my other project while trying to import an enum from my types file. The odd thing is that I can import types just fine from that same file, but when I attempt to reference an enum import my  code fails.

There is one thing I should note: the stacktrace I get in my actual project versus this re-creation is different (kind of).

## This re-created error's stacktrace:

```cmd
[Running] tsx "e:\Documents\Code\NodeJS\path-alias-issue\discord-data\scripts\fails.ts"
node:internal/modules/cjs/loader:1212
  const err = new Error(message);
              ^

Error: Cannot find module '~/types/People'
Require stack:
- e:\Documents\Code\NodeJS\path-alias-issue\discord-data\scripts\fails.ts
    at Module._resolveFilename (node:internal/modules/cjs/loader:1212:15)
    at resolve (C:\Users\me\AppData\Roaming\nvm\v22.3.0\node_modules\tsx\dist\register-CBZjvfJi.cjs:1:3215)
    at resolveRequest (C:\Users\me\AppData\Roaming\nvm\v22.3.0\node_modules\tsx\dist\register-CBZjvfJi.cjs:1:2724)
    at C:\Users\me\AppData\Roaming\nvm\v22.3.0\node_modules\tsx\dist\register-CBZjvfJi.cjs:1:3543
    at m._resolveFilename (file:///C:/Users/me/AppData/Roaming/nvm/v22.3.0/node_modules/tsx/dist/register-2mKsVc-c.mjs:1:832)
    at Module._load (node:internal/modules/cjs/loader:1038:27)
    at wrapModuleLoad (node:internal/modules/cjs/loader:212:19)
    at Module.require (node:internal/modules/cjs/loader:1297:12)
    at require (node:internal/modules/helpers:123:16)
    at <anonymous> (e:\Documents\Code\NodeJS\path-alias-issue\discord-data\scripts\fails.ts:1:32) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    'e:\\Documents\\Code\\NodeJS\\path-alias-issue\\discord-data\\scripts\\fails.ts'
  ]
}

Node.js v22.3.0
```

## My original error's stacktrace in my _actual_ project

```cmd
[Running] tsx "e:\Documents\Code\NextJS\discord-collectibles-archive\discord-data\scripts\previews-extractor.ts"

node:internal/modules/run_main:115
    triggerUncaughtException(
    ^
Error [ERR_MODULE_NOT_FOUND]: Cannot find package '~' imported from e:\Documents\Code\NextJS\discord-collectibles-archive\discord-data\scripts\previews-extractor.ts
    at packageResolve (node:internal/modules/esm/resolve:841:9)
    at moduleResolve (node:internal/modules/esm/resolve:914:18)
    at defaultResolve (node:internal/modules/esm/resolve:1119:11)
    at nextResolve (node:internal/modules/esm/hooks:750:28)
    at resolveBase (file:///C:/Users/me/AppData/Roaming/nvm/v22.3.0/node_modules/tsx/dist/esm/index.mjs?1719933130469:2:3233)
    at async resolveDirectory (file:///C:/Users/me/AppData/Roaming/nvm/v22.3.0/node_modules/tsx/dist/esm/index.mjs?1719933130469:2:3519)
    at async resolve (file:///C:/Users/me/AppData/Roaming/nvm/v22.3.0/node_modules/tsx/dist/esm/index.mjs?1719933130469:2:4036)
    at async nextResolve (node:internal/modules/esm/hooks:750:22)
    at async Hooks.resolve (node:internal/modules/esm/hooks:238:24)
    at async handleMessage (node:internal/modules/esm/worker:199:18) {
  code: 'ERR_MODULE_NOT_FOUND'
}

Node.js v22.3.0
```