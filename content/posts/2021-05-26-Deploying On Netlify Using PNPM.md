---
slug:
title: "Deploying On Netlify Using PNPM"
date: 2021-05-26T15:18:45.810Z
draft: false
author: equilibriumuk
tags:
  - javascript
  - gatsby
  - nodejs
  - github
  - pnpm
  - netlify
image:
---

<p class="text-center"><img src="/media/logos/netlify.svg" alt="netlify logo" width="150px" class="inline"> <img src="/media/logos/pnpm.svg" alt="pnpm logo" width="200px" class="inline"></p>

After changing this website to pnpm I noticed netlify don't seem to officially support it.

There are a few issue tickets relating to this & the general idea seems to be to disable npm install then run pnpm install to install dependencies on a prebuild script.

- [x] Disable npm with `NPM_FLAGS = "--prefix=/dev/null"`
- [x] Run `pnpm install` pre build

There seem to be a few ways to implement this

- [ ] create netlify plugin
- [ ] add prebuild script to `package.json`
- [ ] add `pnpm i` on `build`/`prebuild` with `ci` check in `package.json`
- [ ] add `pnpm i` on `build` section of `netlify.toml`

<br />

I thought the easiest & cleanest way was to add `pnpm i` to `netlify.toml`.

```toml
[build.environment]
  NODE_VERSION = "14"
  NPM_FLAGS = "--prefix=/dev/null"
[build]
  publish = "public"
  command = "npx pnpm i --store=node_modules/.pnpm-store && npx pnpm run build"
```

<p><i class="fa fa-code-fork git-fork"></i> <a href="https://github.com/equk/equk-gatsby/commit/c713c72b359fc7584d8a8ccb744d536ab68137d0#diff-ab8f79b68b7adff7a07db953bf453f3c5aa6ade98d2b1b67d8432b36392489ed" target="_blank" rel="noopener noreferrer">equk/equk-gatsby@<tt>c713c72</tt></a>
</p>

<article class="message is-warning">
  <div class="message-body">
    <i class="fa fa-exclamation-triangle" aria-hidden="true"></i> You will probably want to tell netlify to clear the cache before building if switching from npm or yarn.
  </div>
</article>

The source for the site is available on github.

<a class="github" href="https://github.com/equk/equk-gatsby" aria-label="View on GitHub" target="_blank" rel="noopener noreferrer"><i class="fa fa-github"></i> equk-gatsby</a>