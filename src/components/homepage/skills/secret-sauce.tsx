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
							animate={{ rotate: [0, 360], opacity: 1 }}
							className="relative mx-auto size-75 translate-y-36 md:size-95 md:translate-y-40"
							exit={{ rotate: 180, opacity: 0 }}
							initial={{ rotate: 0, opacity: 0 }}
							transition={{
								rotate: {
									duration: 8,
									ease: "linear",
									repeat: Number.POSITIVE_INFINITY,
								},
								opacity: {
									duration: 0.5,
								},
							}}
						>
							<img
								alt="skills cover rotating"
								className="z-10 w-full select-none opacity-65"
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
				className="relative z-30 mb-0 size-full -translate-y-6 text-balance text-center font-medium text-4xl tracking-tight sm:text-5xl md:-translate-y-10 md:text-6xl"
				style={{
					textShadow:
						"0px 4px 8px rgba(255,255,255,0.05), 0px 8px 30px rgba(255,255,255,0.25)",
				}}
			>
				<p className="mb-3 font-normal text-xs uppercase tracking-widest md:text-sm dark:text-white/70">
					My Skills
				</p>

				<span>
					<span>The Secret </span>
					<span className="animate-gradient-x bg-[linear-gradient(288deg,#ff8000,#f0c_53.2394%,#04f)] bg-clip-text font-nyght text-transparent tracking-wide">
						Sauce
					</span>
				</span>
			</h2>

			<TechStack stacks={techStack} />
		</section>
	);
}
