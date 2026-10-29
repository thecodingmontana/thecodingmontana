import { Link } from "@tanstack/react-router";
import {
	type MotionValue,
	motion,
	useReducedMotion,
	useTransform,
} from "motion/react";
import type React from "react";
import type { Project } from "@/types";
import { liftFor, pad, shadesOf, slugify, tiltFor, wrap } from "./palette";
import { Shot } from "./shot";
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
	const shade = shadesOf(project.color);

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
					<div className="border-ink/15 bg-ink/5 rounded-[22px] border p-1.5 shadow-[0_24px_40px_-24px_rgba(23,21,18,0.55)] transition-transform duration-300 ease-(--ease-out) group-hover:-translate-y-2">
						<div
							className="relative flex aspect-[16/10] flex-col overflow-hidden rounded-[16px]"
							style={
								{
									"--glow": project.color,
									background: `linear-gradient(188.62deg, ${shade.dark} 49.9%, ${shade.medium} 81.7%, ${shade.light} 93.88%, ${shade.lighter} 113.5%)`,
								} as React.CSSProperties
							}
						>
							<div
								className="flex items-start justify-between gap-4 px-[7%] pt-[6%]"
								style={{ color: project.color }}
							>
								<p className="line-clamp-2 text-[clamp(0.8rem,1.15vw,1.15rem)] leading-snug font-medium">
									{project.tagline}
								</p>
								<span
									aria-hidden
									className="shrink-0 text-[clamp(0.9rem,1.3vw,1.3rem)] transition-transform duration-300 ease-(--ease-out) group-hover:translate-x-1"
								>
									→
								</span>
							</div>
							<Shot
								className="mx-auto mt-auto w-[85%] translate-y-[6%] rounded-t-md border border-white/20 shadow-[0_0_30px_var(--glow)] transition-[rotate,scale] duration-300 ease-(--ease-out) select-none group-hover:scale-[1.06] group-hover:-rotate-2"
								eager={index < 6}
								project={project}
								sizes="(min-width: 768px) 32vw, 74vw"
							/>
						</div>
					</div>

					<motion.div
						className="mt-4 flex items-baseline gap-3 pr-2"
						style={{ opacity: captionOpacity }}
					>
						<span className="text-ember font-mono text-[11px] tracking-wide">
							{pad(index + 1)}
						</span>
						<h3 className="text-[clamp(1.15rem,1.4vw,1.4rem)] leading-tight font-bold tracking-[-0.02em]">
							{project.name}
						</h3>
					</motion.div>
				</Link>
			</motion.div>
		</motion.li>
	);
}
