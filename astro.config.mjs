import { defineConfig } from "astro/config"
import sitemap from "@astrojs/sitemap"
import tailwind from "@astrojs/tailwind"

export default defineConfig({
  site: "https://onest.flurium.com",
  integrations: [sitemap(), tailwind()],
  output: "static",
})
