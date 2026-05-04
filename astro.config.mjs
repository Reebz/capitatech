// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

const port = process.env.PORT ? Number(process.env.PORT) : 4321;
const host = process.env.HOST ?? true;

export default defineConfig({
  server: { port, host },
  vite: {
    plugins: [tailwindcss()],
  },
});
