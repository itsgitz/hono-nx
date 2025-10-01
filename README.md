# Hono NX Plugin

[![CI](https://github.com/itsgitz/hono-nx/actions/workflows/ci.yml/badge.svg?branch=master)](https://github.com/itsgitz/hono-nx/actions/workflows/ci.yml)
[![license](https://img.shields.io/npm/l/gh-push-vars)](https://opensource.org/licenses/MIT)
[![npm version](https://img.shields.io/npm/v/hono-nx.svg?logo=npm&color=cb3837)](https://www.npmjs.com/package/hono-nx)

This repository contains the source code for the **Hono NX plugin**, which provides generators for creating [Hono](https://hono.dev) applications inside an [Nx](https://nx.dev) workspace.

## Features

- Generate Hono applications quickly (`nx g hono-nx:app`) on your NX workspace
- Node.js runtime support
- Configurable application directory and port

## Repository Structure

- `hono-nx/` — the Nx plugin source
- `hono-e2e/` — end-to-end tests for the plugin
- `dist/` — build output (ignored in Git)

## Development Setup

Clone the repository and install dependencies:

```sh
git clone https://github.com/your-org/hono-nx.git
cd hono-nx
npm install
```

Run the plugin locally:

```sh
nx build hono-nx
```

Run tests:

```sh
nx test hono-nx
```

## Contributing

Contributions are welcome! Please open an issue or PR.
