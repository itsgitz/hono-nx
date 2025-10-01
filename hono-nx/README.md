# Hono NX

[![CI](https://github.com/itsgitz/hono-nx/actions/workflows/ci.yml/badge.svg?branch=master)](https://github.com/itsgitz/hono-nx/actions/workflows/ci.yml)
[![license](https://img.shields.io/npm/l/gh-push-vars)](https://opensource.org/licenses/MIT)
[![npm version](https://img.shields.io/npm/v/hono-nx.svg?logo=npm&color=cb3837)](https://www.npmjs.com/package/hono-nx)

Hono NX is an [Nx](https://nx.dev) plugin for generating [Hono](https://hono.dev) application starters.  
Currently, it only supports the [Node.js runtime](https://hono.dev/docs/getting-started/nodejs).

## Installation

```sh
nx add hono-nx
```

## Usage

- Generate an Hono application on your NX workspace:

```sh
nx g hono-nx:app
```

- When you run the command you must provide information like the application name, directory (default is `packages`), and port (default is `3000`).
- Once generated, you can serve your app with:

```sh
nx serve <app-name>
```

- Build for production:

```sh
nx build <app-name>
```
