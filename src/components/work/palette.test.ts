import { describe, expect, test } from "vitest";
import { projects } from "@/data/projects";
import { slugify, wrap } from "./palette";

describe("wrap", () => {
	test("loops values below the range back to the end", () => {
		expect(wrap(-1, 0, 16)).toBe(15);
		expect(wrap(-17, 0, 16)).toBe(15);
	});

	test("loops values past the range back to the start", () => {
		expect(wrap(16, 0, 16)).toBe(0);
		expect(wrap(33, 0, 16)).toBe(1);
	});

	test("keeps fractional positions", () => {
		expect(wrap(-0.5, 0, 16)).toBe(15.5);
	});
});

describe("slugify", () => {
	test("turns a project name into a url-safe slug", () => {
		expect(slugify("Twitter Clone (Vue)")).toBe("twitter-clone-vue");
	});

	test("gives every project a distinct slug so ?work= opens the right one", () => {
		const slugs = projects.map((project) => slugify(project.name));
		expect(new Set(slugs).size).toBe(projects.length);
	});
});
