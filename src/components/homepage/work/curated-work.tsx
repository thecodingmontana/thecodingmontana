import { AnimatePresence, motion } from "motion/react";
import { projects } from "@/data/projects";
import WorkCard from "./work-card";
import WorkInfo from "./work-info";

export default function CuratedWork() {
	return (
		<section className="relative mx-auto mt-28 w-full max-w-7xl py-10">
			<AnimatePresence>
				<motion.h2
					animate={{ opacity: 1, y: 0 }}
					className="relative z-2 mb-20 text-balance text-center font-medium text-4xl tracking-tight sm:text-5xl md:mb-36 md:text-6xl"
					exit={{ opacity: 0 }}
					initial={{ opacity: 0, y: 20 }}
					style={{
						textShadow:
							"rgba(255, 255, 255, 0.05) 0px 4px 8px rgba(255, 255, 255, 0.25) 0px 8px 30px",
					}}
					transition={{
						delay: 0.5,
						duration: 1.8,
						ease: "easeIn",
						type: "spring",
					}}
				>
					<p className="mb-3 font-normal text-muted-foreground text-xs uppercase tracking-widest md:text-sm dark:text-white/70">
						FEATURED CASE STUDIES
					</p>
					<span>
						<span>Curated</span>
						<span className="ml-1 animate-gradient-x bg-[linear-gradient(288deg,#ff8000,#f0c_53.2394%,#04f)] bg-clip-text font-nyght text-transparent tracking-wide">
							work
						</span>
					</span>
				</motion.h2>
			</AnimatePresence>
			<div className="grid gap-16">
				{projects.map((project) => (
					<div
						className="relative mx-auto flex w-full flex-col gap-5 p-5 md:grid md:grid-cols-2 lg:grid-cols-3"
						key={project.name}
					>
						<WorkCard project={project} />
						<WorkInfo project={project} />
					</div>
				))}
			</div>
			<a
				className="group mx-auto flex w-fit items-center justify-center gap-2 group-hover:text-neutral-100 md:mt-20 dark:text-neutral-300"
				href="https://github.com/thecodingmontana"
				rel="noopener"
				target="_blank"
			>
				See more projects
				<div className="size-6 overflow-hidden rounded-full border border-white/10 bg-white/5 duration-500 group-hover:bg-white/10">
					<div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
						<span className="flex size-6">
							<svg
								aria-hidden="true"
								className="lucide lucide-arrow-right m-auto size-3.5"
								fill="none"
								height="24"
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								viewBox="0 0 24 24"
								width="24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d="M5 12h14" />
								<path d="m12 5 7 7-7 7" />
							</svg>
						</span>
						<span className="flex size-6">
							<svg
								aria-hidden="true"
								className="lucide lucide-arrow-right m-auto size-3.5"
								fill="none"
								height="24"
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								viewBox="0 0 24 24"
								width="24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d="M5 12h14" />
								<path d="m12 5 7 7-7 7" />
							</svg>
						</span>
					</div>
				</div>
			</a>
		</section>
	);
}
