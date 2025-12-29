/** biome-ignore-all lint/nursery/noLeakedRender: ignore-all */
import { Icon } from "@iconify/react";
import { motion, useInView, type Variants } from "motion/react";
import { useRef } from "react";

type Props = {
	github: string;
	website?: string;
};

export default function WorkLink({ github, website }: Props) {
	const domRef = useRef<HTMLDivElement | null>(null);
	const isInView = useInView(domRef, { once: true });

	const containerVariants: Variants = {
		hidden: {},
		visible: {
			transition: {
				staggerChildren: 0.1,
				delayChildren: 0.15,
			},
		},
	};

	const itemVariants: Variants = {
		hidden: {
			opacity: 0,
			y: 20,
			scale: 0.9,
		},
		visible: {
			opacity: 1,
			y: 0,
			scale: 1,
			transition: {
				duration: 0.45,
				ease: "easeOut",
			},
		},
	};

	return (
		<div className="mt-5 space-y-2" ref={domRef}>
			<motion.h3
				animate={isInView ? { opacity: 1, y: 0 } : {}}
				className="px-2 font-semibold"
				initial={{ opacity: 0, y: 10 }}
				transition={{ duration: 0.4, ease: "easeOut" }}
			>
				Links
			</motion.h3>

			<motion.div
				animate={isInView ? "visible" : "hidden"}
				className="flex flex-wrap gap-3 text-sm"
				initial="hidden"
				variants={containerVariants}
			>
				{website && (
					<motion.a
						className="flex items-center gap-2 rounded-xl border border-white/[0.14] bg-neutral-100 px-3 py-1 text-sm dark:bg-neutral-900"
						href={website}
						rel="noopener noreferrer"
						target="_blank"
						variants={itemVariants}
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
					>
						<Icon icon="hugeicons:globe-02" />
						Website
					</motion.a>
				)}

				{github && (
					<motion.a
						className="flex items-center gap-2 rounded-xl border border-white/[0.14] bg-neutral-100 px-3 py-1 text-sm dark:bg-neutral-900"
						href={github}
						rel="noopener noreferrer"
						target="_blank"
						variants={itemVariants}
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
					>
						<Icon icon="lineicons:github-original" />
						Repo
					</motion.a>
				)}
			</motion.div>
		</div>
	);
}
