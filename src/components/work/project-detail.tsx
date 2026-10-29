import { Icon } from "@iconify/react";
import {
	motion,
	useIsPresent,
	useMotionValue,
	useReducedMotion,
	useSpring,
	useTransform,
	type Variants,
} from "motion/react";
import type React from "react";
import { useEffect, useId, useRef } from "react";
import type { Project } from "@/types";
import { hostOf, inkFor, pad } from "./palette";
import { Shot } from "./shot";

export type Point = { x: number; y: number };
export type ExitInfo = { mode: "close" | "replace"; point: Point };

const EASE_OUT = [0.23, 1, 0.32, 1] as const;
const EASE_IN_OUT = [0.77, 0, 0.175, 1] as const;
const TILT_DEG = 6;

const circle = (radius: number, { x, y }: Point) =>
	`circle(${radius}vmax at ${x}px ${y}px)`;

export const centreOf = (element: Element): Point => {
	const rect = element.getBoundingClientRect();
	return { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 };
};

type Props = {
	project: Project;
	index: number;
	count: number;
	nextName: string;
	origin: Point;
	layer: number;
	onClose: (point: Point) => void;
	onStep: (direction: 1 | -1, point: Point) => void;
};

export function ProjectDetail({
	project,
	index,
	count,
	nextName,
	origin,
	layer,
	onClose,
	onStep,
}: Props) {
	const reduce = useReducedMotion();
	const isPresent = useIsPresent();
	const titleId = useId();
	const closeRef = useRef<HTMLButtonElement>(null);
	const nextRef = useRef<HTMLButtonElement>(null);
	const ink = inkFor(index);

	const sheet: Variants = reduce
		? {
				exit: { opacity: 0, transition: { duration: 0.2 } },
				hidden: { opacity: 0 },
				shown: { opacity: 1, transition: { duration: 0.25 } },
			}
		: {
				exit: ({ mode, point }: ExitInfo) =>
					mode === "replace"
						? { opacity: 1, transition: { duration: 0.8 } }
						: {
								clipPath: circle(0, point),
								transition: { duration: 0.6, ease: EASE_IN_OUT },
							},
				hidden: { clipPath: circle(0, origin) },
				shown: {
					clipPath: circle(150, origin),
					transition: { duration: 0.75, ease: EASE_IN_OUT },
				},
			};

	const content: Variants = {
		hidden: {},
		shown: {
			transition: { delayChildren: reduce ? 0 : 0.35, staggerChildren: 0.06 },
		},
	};
	// steps follow the items above in order, no second delay
	const list: Variants = {
		hidden: {},
		shown: { transition: { staggerChildren: 0.05 } },
	};
	const item: Variants = {
		hidden: { opacity: 0, transform: reduce ? "none" : "translateY(18px)" },
		shown: {
			opacity: 1,
			transform: "translateY(0px)",
			transition: { duration: 0.6, ease: EASE_OUT },
		},
	};

	useEffect(() => {
		closeRef.current?.focus({ preventScroll: true });
	}, []);

	useEffect(() => {
		const onKey = (event: KeyboardEvent) => {
			if (!isPresent) {
				return;
			}
			if (event.key === "Escape" && closeRef.current) {
				onClose(centreOf(closeRef.current));
			}
			if (event.key === "ArrowRight" && nextRef.current) {
				onStep(1, centreOf(nextRef.current));
			}
			if (event.key === "ArrowLeft" && closeRef.current) {
				onStep(-1, centreOf(closeRef.current));
			}
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [isPresent, onClose, onStep]);

	const close = (event: React.MouseEvent<HTMLElement>) =>
		onClose(centreOf(closeRef.current ?? event.currentTarget));

	return (
		<motion.div
			animate="shown"
			aria-labelledby={titleId}
			aria-modal="true"
			className="text-ink fixed inset-0 overflow-y-auto overscroll-contain"
			custom={{ mode: "close", point: origin } satisfies ExitInfo}
			exit="exit"
			initial="hidden"
			role="dialog"
			style={{ backgroundColor: ink, zIndex: 50 + layer }}
			variants={sheet}
		>
			<motion.div
				className="grain relative mx-auto flex min-h-dvh max-w-[1440px] flex-col px-5 py-5 md:px-[4vw] md:py-7"
				variants={content}
			>
				<motion.div
					className="flex items-center justify-between font-mono text-[11px] tracking-[0.14em] uppercase"
					variants={item}
				>
					<button
						className="group flex cursor-pointer items-center gap-2 uppercase outline-none focus-visible:underline"
						onClick={close}
						type="button"
					>
						<span className="transition-transform duration-200 ease-(--ease-out) group-hover:-translate-x-1">
							⟵
						</span>
						Back to the work
					</button>
					<button
						aria-label="Close project"
						className="border-ink/70 hover:bg-ink hover:text-paper focus-visible:bg-ink focus-visible:text-paper grid size-10 cursor-pointer place-items-center rounded-full border text-base transition-[background-color,color,transform] duration-200 ease-(--ease-out) focus-visible:outline-none active:scale-[0.94]"
						onClick={close}
						ref={closeRef}
						type="button"
					>
						×
					</button>
				</motion.div>

				<div className="grid flex-1 items-center gap-10 py-8 md:grid-cols-[1fr_1.05fr] md:gap-[5vw] md:py-6">
					<div className="relative">
						<motion.span
							aria-hidden
							className="pointer-events-none absolute -top-4 left-0 block text-[clamp(4.5rem,11vw,10rem)] leading-none font-extrabold tracking-[-0.05em] md:-top-16"
							style={{ color: `color-mix(in oklab, ${ink} 78%, #171512)` }}
							variants={{
								hidden: {
									opacity: 0,
									transform: reduce ? "none" : "translateX(-28px)",
								},
								shown: {
									opacity: 1,
									transform: "translateX(0px)",
									transition: { duration: 0.8, ease: EASE_OUT },
								},
							}}
						>
							{pad(index + 1)}
						</motion.span>
						<motion.div
							className="relative pt-16 md:px-[6%] md:pt-10"
							variants={item}
						>
							<TiltedPrint project={project} />
						</motion.div>
					</div>

					<div className="flex max-w-xl flex-col">
						<motion.p
							className="font-mono text-[11px] tracking-[0.16em] uppercase"
							variants={item}
						>
							Project {pad(index + 1)} · {project.stack[0]?.name} ·{" "}
							{project.is_working ? "Live" : "Archived"}
						</motion.p>
						<motion.h2
							className="mt-3 text-[clamp(2.75rem,6vw,5.5rem)] leading-[0.92] font-extrabold tracking-[-0.045em]"
							id={titleId}
							variants={item}
						>
							{project.name}
						</motion.h2>
						<motion.p
							className="mt-4 max-w-md text-[clamp(1.05rem,1.4vw,1.25rem)] leading-snug font-medium"
							variants={item}
						>
							{project.tagline}
						</motion.p>
						<motion.p
							className="text-ink/75 mt-3 max-w-md text-[15px] leading-relaxed"
							variants={item}
						>
							{project.description}
						</motion.p>

						<motion.ol className="border-ink/25 mt-7 border-t" variants={list}>
							{project.highlights.slice(0, 4).map((highlight, step) => (
								<motion.li
									className="border-ink/25 flex gap-5 border-b py-3 text-[14px] leading-snug"
									key={highlight}
									variants={item}
								>
									<span className="pt-px font-mono text-[11px]">
										{pad(step + 1)}
									</span>
									{highlight}
								</motion.li>
							))}
						</motion.ol>

						<motion.dl
							className="mt-7 flex flex-wrap gap-x-10 gap-y-4"
							variants={item}
						>
							{[
								{ label: "Tools", value: String(project.stack.length) },
								{
									label: "Status",
									value: project.is_working ? "Live" : "Paused",
								},
								{
									label: "Built with",
									value: project.stack[0]?.name ?? "Code",
								},
							].map((stat) => (
								<div key={stat.label}>
									<dt className="font-mono text-[10px] tracking-[0.16em] uppercase opacity-70">
										{stat.label}
									</dt>
									<dd className="text-[clamp(1.6rem,2.4vw,2.2rem)] leading-tight font-bold tracking-[-0.03em]">
										{stat.value}
									</dd>
								</div>
							))}
						</motion.dl>

						<motion.div className="mt-7 flex flex-wrap gap-3" variants={item}>
							{project.website ? (
								<a
									className="bg-ink text-paper inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-transform duration-150 ease-(--ease-out) active:scale-[0.97]"
									href={project.website}
									rel="noopener noreferrer"
									target="_blank"
								>
									Visit {hostOf(project)} ↗
								</a>
							) : null}
							<a
								className="border-ink hover:bg-ink hover:text-paper inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-medium transition-[background-color,color,transform] duration-200 ease-(--ease-out) active:scale-[0.97]"
								href={project.github}
								rel="noopener noreferrer"
								target="_blank"
							>
								Read the source ↗
							</a>
						</motion.div>

						<motion.ul className="mt-6 flex flex-wrap gap-2" variants={item}>
							{project.stack.map((tool) => (
								<li
									className="border-ink/25 flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[10px] tracking-[0.1em] uppercase"
									key={tool.name}
								>
									<Icon aria-hidden icon={tool.icon} width={12} />
									{tool.name}
								</li>
							))}
						</motion.ul>
					</div>
				</div>

				<motion.div
					className="flex items-center justify-between gap-4 font-mono text-[10.5px] tracking-[0.14em] uppercase"
					variants={item}
				>
					<span className="opacity-70">
						Print {pad(index + 1)} of {pad(count)} · {hostOf(project)}
					</span>
					<button
						className="group flex cursor-pointer items-center gap-2 uppercase outline-none focus-visible:underline"
						onClick={(event) => onStep(1, centreOf(event.currentTarget))}
						ref={nextRef}
						type="button"
					>
						Next: <span className="normal-case">{nextName}</span>
						<span className="transition-transform duration-200 ease-(--ease-out) group-hover:translate-x-1">
							⟶
						</span>
					</button>
				</motion.div>
			</motion.div>
		</motion.div>
	);
}

function TiltedPrint({ project }: { project: Project }) {
	const reduce = useReducedMotion();
	const px = useMotionValue(0);
	const py = useMotionValue(0);
	const rx = useSpring(py, { bounce: 0.2, visualDuration: 0.5 });
	const ry = useSpring(px, { bounce: 0.2, visualDuration: 0.5 });
	const transform = useTransform(
		[rx, ry],
		([x, y]: number[]) =>
			`perspective(1000px) rotateX(${-x * TILT_DEG}deg) rotateY(${y * TILT_DEG}deg) rotate(-2deg)`
	);

	const onPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
		if (reduce || event.pointerType !== "mouse") {
			return;
		}
		const rect = event.currentTarget.getBoundingClientRect();
		px.set((event.clientX - rect.left) / rect.width - 0.5);
		py.set((event.clientY - rect.top) / rect.height - 0.5);
	};
	const onPointerLeave = () => {
		px.set(0);
		py.set(0);
	};

	return (
		<motion.div
			className="bg-paper p-2.5 shadow-[0_40px_60px_-35px_rgba(23,21,18,0.55)] md:p-3"
			onPointerLeave={onPointerLeave}
			onPointerMove={onPointerMove}
			style={{ transform }}
		>
			<Shot
				alt={`${project.name} screenshot`}
				className="h-auto w-full"
				eager
				project={project}
				sizes="(min-width: 768px) 45vw, 90vw"
			/>
		</motion.div>
	);
}
