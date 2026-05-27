import { serve } from "@hono/node-server";
import app from "../dist/server/index.js";

const server = serve({
  fetch: app.fetch,
  port: parseInt(process.env.PORT || "3000"),
});

console.log(`Server is running on port ${server.port}`);
