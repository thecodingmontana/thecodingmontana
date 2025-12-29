/** biome-ignore-all lint/suspicious/noArrayIndexKey: ignore all */
/** biome-ignore-all lint/a11y/noSvgWithoutTitle: ignore all */

import { AnimatePresence, motion } from "motion/react";
import type { Project } from "@/types";
import WorkLink from "./work-link";
import WorkStack from "./work-stack";

type Props = {
	project: Project;
};

export default function WorkInfo({ project }: Props) {
	return (
		<AnimatePresence>
			<motion.div
				className="sticky top-40"
				initial={{ opacity: 0, y: 10 }}
				transition={{ type: "spring", bounce: 0.2 }}
				viewport={{ amount: 0.5 }}
				whileInView={{ opacity: 1, y: 0 }}
			>
				<div className="flex">
					<div
						aria-hidden="true"
						className="my-4 mr-4 h-1 min-w-6 rounded-full"
						style={{
							backgroundColor: project.color || "#F97316",
						}}
					/>
					<div className="flex flex-col items-start lg:h-125">
						<div className="flex items-center gap-3">
							<h3 className="font-bold text-2xl text-foreground">
								{project.name}
							</h3>
						</div>
						<p className="my-2 font-light text-base text-muted-foreground">
							{project.description}
						</p>
						{project.highlights.map((highlight, index) => (
							<ul
								className="mt-4 flex flex-col gap-y-2 text-accent-foreground/85 text-base"
								key={index}
							>
								<li className="flex items-center text-sm">
									<svg
										className="mt-1 mr-2 size-5 shrink-0"
										fill={project.color}
										height="24"
										viewBox="0 0 24 24"
										width="24"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path d="M12 1C12 1 12 8 10 10C8 12 1 12 1 12C1 12 8 12 10 14C12 16 12 23 12 23C12 23 12 16 14 14C16 12 23 12 23 12C23 12 16 12 14 10C12 8 12 1 12 1Z" />
									</svg>
									{highlight}
								</li>
							</ul>
						))}
						<WorkStack stacks={project.stack} />
						<WorkLink github={project.github} website={project.website} />
					</div>
				</div>
			</motion.div>
		</AnimatePresence>
	);
}
