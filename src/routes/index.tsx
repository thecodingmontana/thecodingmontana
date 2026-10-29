import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { AnimatePresence } from "motion/react";
import type React from "react";
import { useCallback, useEffect, useRef, useState } from "react";
import { Colophon } from "@/components/work/colophon";
import { Hero } from "@/components/work/hero";
import { slugify, wrap } from "@/components/work/palette";
import {
	centreOf,
	type ExitInfo,
	type Point,
	ProjectDetail,
} from "@/components/work/project-detail";
import { Ribbon } from "@/components/work/ribbon";
import { Timeline } from "@/components/work/timeline";
import { useRibbon } from "@/components/work/use-ribbon";
import { projects } from "@/data/projects";

const SLUGS = projects.map((project) => slugify(project.name));

export const Route = createFileRoute("/")({
	component: Home,
	validateSearch: (search: Record<string, unknown>): { work?: string } => ({
		work: typeof search.work === "string" ? search.work : undefined,
	}),
});

function Home() {
	const { work } = Route.useSearch();
	const navigate = useNavigate({ from: "/" });
	const ribbon = useRibbon(projects.length);
	const { goTo, hold } = ribbon;
	const openIndex = work ? SLUGS.indexOf(work) : -1;
	const isOpen = openIndex >= 0;

	const origin = useRef<Point>({ x: 0, y: 0 });
	const [exitInfo, setExitInfo] = useState<ExitInfo>({
		mode: "close",
		point: { x: 0, y: 0 },
	});
	const [layer, setLayer] = useState(0);

	const show = useCallback(
		(index: number, point: Point, mode: ExitInfo["mode"]) => {
			origin.current = point;
			setExitInfo({ mode, point });
			setLayer((value) => value + 1);
			navigate({ resetScroll: false, search: { work: SLUGS[index] } });
		},
		[navigate]
	);

	const onOpen = (event: React.MouseEvent, index: number) => {
		event.preventDefault();
		// keyboard activation has no pointer position, so grow from the card
		const point =
			event.detail === 0
				? centreOf(event.currentTarget)
				: { x: event.clientX, y: event.clientY };
		show(index, point, "close");
	};

	const onStep = useCallback(
		(direction: 1 | -1, point: Point) =>
			show(wrap(openIndex + direction, 0, projects.length), point, "replace"),
		[openIndex, show]
	);

	const onClose = useCallback(
		(point: Point) => {
			setExitInfo({ mode: "close", point });
			goTo(openIndex);
			navigate({ resetScroll: false, search: {} });
		},
		[goTo, navigate, openIndex]
	);

	useEffect(() => {
		hold("detail", isOpen);
		document.documentElement.style.overflow = isOpen ? "hidden" : "";
	}, [hold, isOpen]);

	return (
		<>
			<main
				className="flex min-h-dvh flex-col gap-10 overflow-x-clip px-5 pt-5 pb-6 md:justify-between md:gap-6 md:px-[4vw] md:pt-7"
				inert={isOpen}
			>
				<Hero
					activeIndex={ribbon.active}
					activeName={projects[ribbon.active].name}
					count={projects.length}
				/>
				<div className="-mx-5 md:-mx-[4vw]">
					<Ribbon onOpen={onOpen} projects={projects} ribbon={ribbon} />
				</div>
				<div className="flex flex-col gap-4">
					<Timeline projects={projects} ribbon={ribbon} />
					<Colophon />
				</div>
			</main>

			<AnimatePresence custom={exitInfo} initial={false}>
				{isOpen && (
					<ProjectDetail
						count={projects.length}
						index={openIndex}
						key={SLUGS[openIndex]}
						layer={layer}
						nextName={projects[(openIndex + 1) % projects.length].name}
						onClose={onClose}
						onStep={onStep}
						origin={origin.current}
						project={projects[openIndex]}
					/>
				)}
			</AnimatePresence>
		</>
	);
}
