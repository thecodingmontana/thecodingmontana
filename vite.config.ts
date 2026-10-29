import tailwindcss from "@tailwindcss/vite";
import { devtools } from "@tanstack/devtools-vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { nitro } from "nitro/vite";
import { defineConfig } from "vite";
import viteTsConfigPaths from "vite-tsconfig-paths";
import { SHOT_WIDTHS } from "./src/components/work/palette";

// unit tests only need path aliases; the app server plugins break under vitest
const isTest = Boolean(process.env.VITEST);

const config = defineConfig({
	plugins: [
		// devtools must stay first; nitro goes after tanstackStart
		!isTest && devtools(),
		// this is the plugin that enables path aliases
		viteTsConfigPaths({
			projects: ["./tsconfig.json"],
		}),
		!isTest && tailwindcss(),
		!isTest && tanstackStart(),
		!isTest &&
			nitro({
				vercel: {
					config: {
						// enables /_vercel/image, which unpic uses for project screenshots
						images: {
							domains: [],
							formats: ["image/avif", "image/webp"],
							minimumCacheTTL: 2_592_000,
							sizes: SHOT_WIDTHS,
						},
						version: 3,
					},
				},
			}),
		!isTest && viteReact(),
	],
});

export default config;
