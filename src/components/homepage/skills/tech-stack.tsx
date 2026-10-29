/** biome-ignore-all lint/suspicious/noArrayIndexKey: ignore all */

import { Icon } from "@iconify/react";
import { motion, useInView, type Variants } from "motion/react";
import { useRef } from "react";
import type { TechStack as TechStackType } from "@/types";

type Props = {
	stacks: TechStackType[];
};

export default function TechStack({ stacks }: Props) {
	const domRef = useRef(null);
	const isInView = useInView(domRef, { once: true });

	const containerVariants: Variants = {
		hidden: { opacity: 1 },
		visible: {
			opacity: 1,
			transition: {
				delayChildren: 0.2,
				staggerChildren: 0.1,
			},
		},
	};

	const itemVariants: Variants = {
		hidden: {
			opacity: 0,
			scale: 0.9,
			y: 20,
		},
		visible: {
			opacity: 1,
			scale: 1,
			transition: {
				duration: 0.5,
				ease: "easeOut",
			},
			y: 0,
		},
	};

	return (
		<div ref={domRef}>
			<motion.ul
				animate={isInView ? "visible" : "hidden"}
				className="mx-auto flex max-w-4xl flex-wrap justify-center gap-2 text-lg text-gray-800 lg:gap-4"
				initial="hidden"
				variants={containerVariants}
			>
				{stacks.map((stack, index) => (
					<motion.li
						aria-label={stack.name}
						className="relative flex items-center justify-center gap-2 rounded-xl border border-white/[0.14] bg-neutral-100 px-4 py-1.5 text-sm lg:text-base dark:bg-neutral-900 dark:text-white/80"
						key={index}
						variants={itemVariants}
						whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
						whileTap={{ scale: 0.95 }}
					>
						<Icon className="size-5 duration-300" icon={stack.icon} />
						<span>{stack.name}</span>
					</motion.li>
				))}
			</motion.ul>
		</div>
	);
}
