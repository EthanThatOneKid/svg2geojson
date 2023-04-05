import { startServer } from "https://esm.sh/svelte-language-server@0.15.6/dist/src/server.js";

if (import.meta.main) {
  startServer();
}
