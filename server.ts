import { Mastro } from '@mastrojs/mastro/server'
import { GET as home } from './routes/index.server';
import { GET as about } from './routes/about.server';

const handler = new Mastro()
  .get("/", home)
  .get("/about", about)
  // Add more routes here
  .createHandler({ serveStaticFiles: false }); // wrangler is configured to serve static files

export default { fetch: handler } satisfies ExportedHandler<Env>;


// The above is using Mastro's programmatic router
// The file-based router should start working after
// https://github.com/cloudflare/workerd/issues/5416 with the following setup:
// Wrangler uses esbuild, which can include dynamically imported files in the bundle
// if done right: see https://esbuild.github.io/api/#glob
// loadRoutes((name) => import(`./routes/${name.slice(8, -10)}.server.${name.slice(-2)}`));
