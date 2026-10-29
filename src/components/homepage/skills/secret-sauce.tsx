import { AnimatePresence, motion } from "motion/react";
import { techStack } from "@/data/projects";
import TechStack from "./tech-stack";

export default function SecretSauce() {
	return (
		<section
			className="relative mx-auto mt-10 mb-16 flex h-full flex-col rounded-3xl py-0 md:px-10"
			id="skills"
		>
			<div className="relative mx-auto size-fit overflow-hidden">
				<div className="mask-[linear-gradient(to_top,transparent,black_50%,black_90%,transparent)]">
					<AnimatePresence>
						<motion.div
							animate={{ opacity: 1, rotate: [0, 360] }}
							className="relative mx-auto size-75 translate-y-36 md:size-95 md:translate-y-40"
							exit={{ opacity: 0, rotate: 180 }}
							initial={{ opacity: 0, rotate: 0 }}
							transition={{
								opacity: {
									duration: 0.5,
								},
								rotate: {
									duration: 8,
									ease: "linear",
									repeat: Number.POSITIVE_INFINITY,
								},
							}}
						>
							<img
								alt="skills cover rotating"
								className="z-10 w-full opacity-65 select-none"
								draggable={false}
								height={512}
								src="/images/steel-flower.webp"
								width={512}
							/>
						</motion.div>
					</AnimatePresence>
				</div>
			</div>

			<h2
				className="relative z-30 mb-0 size-full -translate-y-6 text-center text-4xl font-medium tracking-tight text-balance sm:text-5xl md:-translate-y-10 md:text-6xl"
				style={{
					textShadow:
						"0px 4px 8px rgba(255,255,255,0.05), 0px 8px 30px rgba(255,255,255,0.25)",
				}}
			>
				<p className="mb-3 text-xs font-normal tracking-widest uppercase md:text-sm dark:text-white/70">
					My Skills
				</p>

				<span>
					<span>The Secret </span>
					<span className="animate-gradient-x font-nyght bg-[linear-gradient(288deg,#ff8000,#f0c_53.2394%,#04f)] bg-clip-text tracking-wide text-transparent">
						Sauce
					</span>
				</span>
			</h2>

			<TechStack stacks={techStack} />
		</section>
	);
}
