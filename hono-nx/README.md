# Hono NX

[![CI](https://github.com/itsgitz/hono-nx/actions/workflows/ci.yml/badge.svg)](https://github.com/itsgitz/hono-nx/actions/workflows/ci.yml)
[![npm version](https://img.shields.io/npm/v/hono-nx.svg?logo=npm&color=cb3837)](https://www.npmjs.com/package/hono-nx)

This plugin provides generators to create [Hono](https://hono.dev) applications within an [Nx](https://nx.dev) workspace. It currently supports generating applications for the [Node.js runtime](https://hono.dev/docs/getting-started/nodejs).

## Installation

To get started, add the plugin to your Nx workspace:

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
