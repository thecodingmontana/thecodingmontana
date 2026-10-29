import { motion, useTransform } from "motion/react";
import type { Project } from "@/types";
import { pad } from "./palette";
import type { useRibbon } from "./use-ribbon";

type Props = {
	projects: Project[];
	ribbon: ReturnType<typeof useRibbon>;
};

export function Timeline({ projects, ribbon }: Props) {
	const { active, goTo, progress } = ribbon;
	const count = projects.length;
	const dot = useTransform(progress, (p) => `translateX(${p * 100}%)`);

	return (
		<motion.nav
			animate={{ opacity: 1 }}
			aria-label="Project timeline"
			className="relative"
			initial={{ opacity: 0 }}
			transition={{ delay: 1.1, duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
		>
			<div className="bg-ink/25 relative h-px">
				<motion.div
					aria-hidden
					className="pointer-events-none absolute inset-x-0 -top-[5px]"
					style={{ transform: dot }}
				>
					<span className="bg-ember -ml-[5.5px] block size-[11px] rounded-full shadow-[0_0_0_4px_rgba(255,76,36,0.18)]" />
				</motion.div>
			</div>

			<ol className="relative h-7">
				{projects.map((project, index) => {
					const isActive = index === active;
					const showLabel = index % 5 === 0 || index === count - 1;
					return (
						<li
							className="absolute top-0 -translate-x-1/2"
							key={project.name}
							style={{ left: `${((index + 0.5) / count) * 100}%` }}
						>
							<button
								aria-current={isActive ? "true" : undefined}
								aria-label={`${pad(index + 1)} ${project.name}`}
								className="group flex min-h-6 min-w-6 cursor-pointer flex-col items-center px-1.5 outline-none"
								onClick={() => goTo(index)}
								type="button"
							>
								<span
									className={`block h-1.5 w-px transition-colors duration-200 ${isActive ? "bg-ember" : "bg-ink/40"}`}
								/>
								<span
									className={`group-focus-visible:text-ink mt-1.5 font-mono text-[10px] tracking-wide transition-colors duration-200 ${isActive ? "text-ember-deep" : "text-ink/65"} ${showLabel ? "" : "hidden md:block"}`}
								>
									{pad(index + 1)}
								</span>
							</button>
						</li>
					);
				})}
			</ol>
		</motion.nav>
	);
}
