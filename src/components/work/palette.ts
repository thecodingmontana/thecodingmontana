import type { Project } from "@/types";

// riso inks, all dark-enough that ink-black text stays readable on them
const INKS = ["#ff4c24", "#5b94c5", "#f08ccb", "#8c8a2e", "#f5b82e", "#3fa592"];

// resting pose per card so the row looks hand-pinned, not gridded
const TILTS = [-2.2, 1.4, -0.8, 2, -1.6, 0.9, -2.4, 1.8];
const LIFTS = [8, -6, 2, -10, 6, -4, 10, -2];

export const inkFor = (index: number) => INKS[index % INKS.length];
export const tiltFor = (index: number) => TILTS[index % TILTS.length];
export const liftFor = (index: number) => LIFTS[index % LIFTS.length];

export const pad = (n: number) => String(n).padStart(2, "0");

export const slugify = (name: string) =>
	name
		.toLowerCase()
		.replace(/[^a-z0-9]+/gu, "-")
		.replace(/^-|-$/gu, "");

export const hostOf = (project: Project) =>
	project.website ? new URL(project.website).host : "github.com";

/** Wraps v into [min, max) — the ribbon is an endless loop. */
export const wrap = (v: number, min: number, max: number) => {
	const range = max - min;
	return ((((v - min) % range) + range) % range) + min;
};

/** Dark-to-light ramp of a project's brand colour for the card glow. */
export const shadesOf = (hex: string) => {
	const channels = [1, 3, 5].map((i) =>
		Number.parseInt(hex.slice(i, i + 2), 16)
	);
	const shift = (by: number, scale = 1) =>
		`rgb(${channels.map((c) => Math.min(255, Math.floor(c * scale) + by)).join(", ")})`;
	return {
		dark: shift(0, 0.3),
		light: shift(60),
		lighter: shift(120),
		medium: hex,
	};
};

/** Widths Vercel may resize screenshots to; vite.config.ts allows exactly these. */
export const SHOT_WIDTHS = [640, 750, 828, 1080, 1280, 1668, 1920];
