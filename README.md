# ESMeta Official Homepage

This repository contains the official ESMeta homepage (https://es-meta.github.io/), a static site deployed via GitHub Pages without a build step (`.nojekyll`).

- `index.html`: page layout
- `assets/style.css`, `assets/app.js`: styles and rendering
- `data/publications.js`: the publication list (add a new paper at the top)
- `playground/`: the ECMAScript Double Debugger, built from [`es-meta/esmeta`](https://github.com/es-meta/esmeta)

## Running Locally

```shell
$ python3 -m http.server 4000
```

Then open http://localhost:4000/.
