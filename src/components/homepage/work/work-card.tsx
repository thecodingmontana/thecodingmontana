import { Icon } from "@iconify/react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";
import type { Project } from "@/types";

type Props = {
	project: Project;
};

const generateColorVariations = (baseColor: string) => {
	const hex = baseColor.replace("#", "");
	const r = Number.parseInt(hex.substring(0, 2), 16);
	const g = Number.parseInt(hex.substring(2, 4), 16);
	const b = Number.parseInt(hex.substring(4, 6), 16);

	return {
		dark: `rgb(${Math.floor(r * 0.3)}, ${Math.floor(g * 0.3)}, ${Math.floor(b * 0.3)})`,
		medium: baseColor,
		light: `rgb(${Math.min(255, r + 60)}, ${Math.min(255, g + 60)}, ${Math.min(255, b + 60)})`,
		lighter: `rgb(${Math.min(255, r + 120)}, ${Math.min(255, g + 120)}, ${Math.min(255, b + 120)})`,
	};
};

export default function ProjectCard({ project }: Props) {
	const colorVariations = project.color
		? generateColorVariations(project.color)
		: {
				dark: "rgb(107, 13, 51)",
				medium: "rgb(219, 39, 119)",
				light: "rgb(244, 114, 182)",
				lighter: "rgb(249, 215, 147)",
			};

	return (
		<AnimatePresence>
			<motion.div
				className="project-card flex w-full flex-row md:col-span-1 lg:col-span-2"
				exit={{ opacity: 0 }}
				initial={{ scale: 0.8, y: 10, opacity: 0 }}
				transition={{ type: "spring", bounce: 0.4 }}
				viewport={{ amount: 0.5 }}
				whileInView={{ scale: 1, y: 0, opacity: 1 }}
			>
				<div className="flex flex-col md:mx-10 md:w-full">
					<a
						className="relative cursor-pointer overflow-hidden rounded-2xl border border-white/15 bg-[#f2f2f20c] p-1.5 shadow-2xl md:h-115 md:rounded-3xl md:p-2 lg:h-140"
						draggable={false}
						href={project.website || project.github || "#"}
						target="_blank"
					>
						<div
							className="absolute inset-x-0 top-0 h-px"
							style={{
								background:
									"linear-gradient(90deg, rgba(0,0,0,0) 5%, rgba(255,255,255,0.8) 35%, rgb(255,255,255) 50%, rgba(255,255,255,0.8) 65%, rgba(0,0,0,0) 95%)",
							}}
						/>

						<div className="group relative flex size-full flex-col items-center justify-between overflow-hidden rounded-xl bg-linear-to-b from-black/40 to-transparent transition-all duration-300 md:rounded-2xl">
							<div
								className="absolute inset-0 -z-1"
								style={{
									background: `linear-gradient(
                    188.62deg,
                    ${colorVariations.dark} 49.9%,
                    ${colorVariations.medium} 81.7%,
                    ${colorVariations.light} 93.88%,
                    ${colorVariations.lighter} 113.5%
                  )`,
								}}
							/>

							<div
								className="absolute inset-x-0 top-px z-10 h-[0.8px] opacity-70"
								style={{
									background:
										"linear-gradient(90deg, rgba(0,0,0,0) 20%, rgb(255,255,255) 50%, rgba(0,0,0,0) 80%)",
								}}
							/>

							<div
								className={cn(
									"flex w-full flex-row items-center justify-between px-12 py-8"
								)}
								style={{ color: project.color || "#f9a8d4" }}
							>
								<h3 className="max-w-[90%] text-base lg:text-2xl">
									{project.tagline}
								</h3>
								<Icon className="size-6" icon="lucide-arrow-right" />
							</div>

							<img
								alt={project.name}
								className="w-full max-w-[85%] translate-y-5 -rotate-3 rounded-t-lg border-[1.5px] border-white/20 transition-all duration-300 will-change-transform md:block md:rotate-0 md:group-hover:-rotate-3 md:group-hover:scale-[1.08]"
								height={753}
								loading="lazy"
								src={project.image_url || "/images/vue-twitter.png"}
								style={{
									boxShadow: project.color
										? `0 0 30px ${project.color}`
										: "0 0 30px #DB2777",
								}}
								width={1203}
							/>
						</div>
					</a>
				</div>
			</motion.div>
		</AnimatePresence>
	);
}
