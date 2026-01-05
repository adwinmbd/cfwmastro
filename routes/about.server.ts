import { html, htmlToResponse } from "@mastrojs/mastro";
import { Layout } from "../components/Layout.ts";

export const GET = (_req: Request) =>
  htmlToResponse(
    Layout({
      title: "About Us",
      children: html`
        <p>This is the about page built with Mastro.js on Cloudflare Workers.</p>
        <a href="/">Go back home</a>
      `,
    }),
  );