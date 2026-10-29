import { Link } from "@tanstack/react-router";
import {
	type MotionValue,
	motion,
	useReducedMotion,
	useTransform,
} from "motion/react";
import type React from "react";
import type { Project } from "@/types";
import { inkFor, liftFor, pad, slugify, tiltFor, wrap } from "./palette";
import type { RibbonMetrics } from "./use-ribbon";

const ENTRANCE_DELAY_S = 0.55;
const STAGGER_S = 0.06;

type Props = {
	project: Project;
	index: number;
	metrics: RibbonMetrics;
	offset: MotionValue<number>;
	tilt: MotionValue<number>;
	onOpen: (event: React.MouseEvent, index: number) => void;
	onFocusCard: (index: number) => void;
};

export function PosterCard({
	project,
	index,
	metrics,
	offset,
	tilt,
	onOpen,
	onFocusCard,
}: Props) {
	const reduce = useReducedMotion();
	const { cardW, inset, step, total, vw } = metrics;
	const ink = inkFor(index);

	const x = useTransform(
		offset,
		(o) => wrap(index * step - o, -step, total - step) + inset
	);
	const transform = useTransform([x, tilt], ([xv, t]: number[]) =>
		reduce
			? `translate3d(${xv}px, 0, 0)`
			: `translate3d(${xv}px, ${liftFor(index)}px, 0) rotate(${tiltFor(index) + t}deg)`
	);
	// captions dim as their card slides past the viewport edges
	const captionOpacity = useTransform(x, (xv) => {
		const leftOverflow = Math.max(0, -xv) / cardW;
		const rightOverflow = Math.max(0, xv + cardW - vw) / cardW;
		return 1 - Math.min(1, leftOverflow + rightOverflow) * 0.7;
	});

	return (
		<motion.li
			className="absolute top-0 left-0 will-change-transform"
			style={{ transform, width: cardW }}
		>
			<motion.div
				animate={{ opacity: 1, transform: "translateY(0px) rotate(0deg)" }}
				initial={
					reduce
						? { opacity: 0 }
						: { opacity: 0, transform: "translateY(64px) rotate(5deg)" }
				}
				transition={{
					delay: ENTRANCE_DELAY_S + index * STAGGER_S,
					duration: 0.9,
					ease: [0.23, 1, 0.32, 1],
				}}
			>
				<Link
					className="group focus-visible:ring-ink focus-visible:ring-offset-paper block rounded-[2px] outline-none focus-visible:ring-2 focus-visible:ring-offset-4"
					draggable={false}
					onClick={(event) => onOpen(event, index)}
					onFocus={() => onFocusCard(index)}
					resetScroll={false}
					search={{ work: slugify(project.name) }}
					to="/"
				>
					<div
						className="grain relative aspect-[4/5] overflow-hidden shadow-[0_1px_0_rgba(23,21,18,0.08)] transition-transform duration-300 ease-(--ease-out) group-hover:-translate-y-2"
						style={{ backgroundColor: ink }}
					>
						<img
							alt=""
							className="border-paper absolute top-[46%] left-1/2 aspect-[16/10] w-[84%] -translate-x-1/2 -translate-y-1/2 rotate-(--print-tilt) border-[3px] object-cover object-top-left shadow-[0_14px_22px_-12px_rgba(23,21,18,0.6)] transition-[rotate,scale] duration-500 ease-(--ease-out) select-none group-hover:scale-[1.07] group-hover:rotate-0"
							draggable={false}
							height={500}
							loading={index < 6 ? "eager" : "lazy"}
							src={
								project.image_url.startsWith("/")
									? project.image_url
									: `/${project.image_url}`
							}
							style={
								{
									"--print-tilt": `${tiltFor(index + 3) * 1.6}deg`,
								} as React.CSSProperties
							}
							width={400}
						/>
						<span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(255,255,255,0.5),transparent_62%)] opacity-0 transition-opacity duration-300 ease-(--ease-out) group-hover:opacity-100" />
					</div>

					<motion.div className="mt-4 pr-2" style={{ opacity: captionOpacity }}>
						<div className="flex items-baseline gap-3">
							<span className="text-ember font-mono text-[11px] tracking-wide">
								{pad(index + 1)}
							</span>
							<h3 className="text-[clamp(1.15rem,1.4vw,1.4rem)] leading-tight font-bold tracking-[-0.02em]">
								{project.name}
							</h3>
						</div>
						<p className="text-ink/65 mt-1.5 line-clamp-2 text-sm leading-snug">
							{project.tagline}
						</p>
						<span
							className="mt-3 inline-block rounded-full px-2.5 py-0.5 font-mono text-[10px] tracking-[0.12em] uppercase"
							style={{ backgroundColor: ink }}
						>
							{project.stack[0]?.name ?? "Code"}
						</span>
					</motion.div>
				</Link>
			</motion.div>
		</motion.li>
	);
}
