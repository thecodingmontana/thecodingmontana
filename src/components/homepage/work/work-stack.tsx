/** biome-ignore-all lint/suspicious/noArrayIndexKey: ignore-all */

import { Icon } from "@iconify/react";
import { motion, useInView, type Variants } from "motion/react";
import { useRef } from "react";
import type { TechStack } from "@/types";

type Props = {
	stacks: TechStack[];
};

export default function WorkStack({ stacks }: Props) {
	const domRef = useRef<HTMLDivElement | null>(null);
	const isInView = useInView(domRef);

	const containerVariants: Variants = {
		hidden: { opacity: 1 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
				delayChildren: 0.2,
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
				duration: 0.5,
				ease: "easeOut",
			},
		},
	};

	return (
		<div className="mt-10" ref={domRef}>
			<motion.div
				animate={isInView ? "visible" : "hidden"}
				className="flex flex-wrap gap-3 text-sm"
				initial="hidden"
				variants={containerVariants}
			>
				{stacks.map((stack, index) => (
					<motion.div
						className="flex items-center gap-2 rounded-xl border border-white/[0.14] bg-neutral-100 px-3 py-1 text-sm dark:bg-neutral-900"
						key={index}
						variants={itemVariants}
						whileHover={{
							scale: 1.05,
							transition: { duration: 0.2 },
						}}
						whileTap={{ scale: 0.95 }}
					>
						<Icon aria-label={stack.name} icon={stack.icon} />
						{stack.name}
					</motion.div>
				))}
			</motion.div>
		</div>
	);
}
