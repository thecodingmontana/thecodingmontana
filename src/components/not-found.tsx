import { Link } from "@tanstack/react-router";
import { motion, useReducedMotion } from "motion/react";

export default function NotFound() {
	const reduce = useReducedMotion();
	return (
		<main className="grid min-h-dvh place-items-center px-5">
			<div className="flex flex-col items-center text-center">
				<motion.div
					animate={{ opacity: 1, transform: "translateY(0px) rotate(-3deg)" }}
					className="grain bg-ember relative px-10 pt-4 pb-2"
					initial={{
						opacity: 0,
						transform: reduce
							? "rotate(-3deg)"
							: "translateY(48px) rotate(4deg)",
					}}
					transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1] }}
				>
					<h1 className="text-[clamp(6rem,22vw,14rem)] leading-none font-extrabold tracking-[-0.06em]">
						404
					</h1>
				</motion.div>
				<p className="text-ink/60 mt-10 font-mono text-[11px] tracking-[0.16em] uppercase">
					This print was never made
				</p>
				<Link
					className="bg-ink text-paper mt-4 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-transform duration-150 ease-(--ease-out) active:scale-[0.97]"
					to="/"
				>
					⟵ Back to the work
				</Link>
			</div>
		</main>
	);
}
