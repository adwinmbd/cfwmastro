# Mastro Template Basic for Cloudflare Workers

This is a basic TypeScript template for [Mastro](https://mastrojs.github.io) when using the [Cloudflare Workers](https://workers.cloudflare.com/) edge runtime. If you only need to generate a static site for the Cloudflare CDN, you don't need this template.

Click the green **Use this template** button in the top right to create your own copy of this repository. Then clone the **Code** to your computer.

## Run locally

If you have multiple projects on your computer that require different Node.js versions, you should install a tool to manage those version for you; for example [Volta](https://volta.sh/) (see [pnpm Support](https://docs.volta.sh/advanced/pnpm)).

Mastro requires Node.js >=24.

[JSR recommends](https://jsr.io/docs/npm-compatibility#installing-and-using-jsr-packages) to use `pnpm`.

The first time, you need to:

    pnpm install

After that, to start the server:

    pnpm run start

and open <http://localhost:8787> in your browser.


## Next steps

Note that [currently](server.ts), Mastro on Cloudflare Workers only works with the programmatic router, not the file-based router which is the default when using Mastro with Deno, Bun or plain Node.js.

To see how Mastro works, [follow the guide](https://mastrojs.github.io/guide/server-side-components-and-routing/).

To make sure you're on the latest Mastro version:

    pnpm update @mastrojs/mastro --latest


## Deploy to production

    pnpm run deploy
