import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
    // Add your final site URL here (used for sitemap and canonical URLs)
    site: "https://resta.rivenintech.com",
    trailingSlash: "never",
    vite: { plugins: [tailwindcss()] },
    integrations: [
        react(),
        sitemap({
            filter: (page) => page !== "https://resta.rivenintech.com/admin",
        }),
        robotsTxt(),
    ],

    build: {
        // Example: Generate `page.html` instead of `page/index.html` during build.
        // Used to remove trailing slash on Cloudflare (https://developers.cloudflare.com/pages/platform/serving-pages/#route-matching)
        format: "file",
    },
});
