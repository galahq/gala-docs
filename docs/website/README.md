# Website

This website is built using [Docusaurus 3](https://docusaurus.io/), a modern static website generator.

## Installation

```console
yarn install
```

## Local Development

```console
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Editing content with TinaCMS

```console
yarn dev
```

This runs the site together with a local [TinaCMS](https://tina.io/) server. The editor is at `http://localhost:3000/admin/index.html` and saves straight to the files in this folder. It needs Node 22 or 24.

On the live site the editor is at `https://docs.learngala.com/admin/index.html`. Editors log in with Tina Cloud and each save is committed to `main`.

What can be edited is defined in `tina/config.js`: guides (`docs/`), blog posts (`blog/`), and the home, team, projects and publications content in `src/content/*.json`. A few guides and the `.mdx` blog posts are left out because Tina can't save them without changing their formatting; edit those by hand. A guide created in Tina also needs adding to `sidebars.js` before it shows in the sidebar.

## Build

```console
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

The build first runs `tinacms build`, which needs the Tina Cloud project's `TINA_CLIENT_ID` and `TINA_TOKEN` (copy `.env.example` to `.env`). To build without them:

```console
yarn tinacms build --local --skip-cloud-checks && yarn docusaurus build
```

## Deployment

```console
GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
