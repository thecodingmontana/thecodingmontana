import { motion, useReducedMotion } from "motion/react";
import { Fragment } from "react";
import { pad } from "./palette";

const EASE_OUT = [0.23, 1, 0.32, 1] as const;
const WORD_STAGGER_S = 0.07;

type Props = {
	count: number;
	activeIndex: number;
	activeName: string;
};

export function Hero({ count, activeIndex, activeName }: Props) {
	const reduce = useReducedMotion();
	const lines = [
		[{ text: "Ideas" }, { text: "in." }],
		[{ accent: true, text: "Products" }, { text: "out." }],
	];

	return (
		<header className="grid gap-y-8 md:grid-cols-[auto_minmax(0,24rem)_1fr] md:gap-x-[5vw]">
			<div className="flex items-center justify-between font-mono text-[11px] tracking-[0.14em] uppercase md:col-span-3">
				<motion.span
					animate={{ opacity: 1 }}
					className="flex items-center gap-1.5 font-sans text-[15px] font-extrabold tracking-[-0.02em] normal-case"
					initial={{ opacity: 0 }}
					transition={{ duration: 0.6, ease: EASE_OUT }}
				>
					thecodingmontana
					<span className="bg-ember size-2 rounded-full" />
				</motion.span>
				<p aria-live="polite" className="flex items-baseline gap-2 text-right">
					<span className="text-ember">
						{pad(activeIndex + 1)}/{pad(count)}
					</span>
					<motion.span
						animate={{ clipPath: "inset(0 0% 0 0)" }}
						className="max-w-[46vw] truncate normal-case md:max-w-none"
						initial={reduce ? false : { clipPath: "inset(0 100% 0 0)" }}
						key={activeName}
						transition={{ duration: 0.45, ease: EASE_OUT }}
					>
						{activeName}
					</motion.span>
					<span aria-hidden className="caret text-ember -ml-1">
						▍
					</span>
				</p>
			</div>

			<h1 className="text-[clamp(2.75rem,5.4vw,5.6rem)] leading-[0.9] font-extrabold tracking-[-0.045em]">
				{lines.map((line, lineIndex) => (
					<span className="block" key={line.map((w) => w.text).join(" ")}>
						{line.map((word, index) => {
							const order = lineIndex === 0 ? index : lines[0].length + index;
							const delay = 0.15 + order * WORD_STAGGER_S;
							// real spaces between words so the heading copies and reads correctly
							return (
								<Fragment key={word.text}>
									{index > 0 ? " " : null}
									<span className="-mb-[0.12em] inline-block overflow-hidden pb-[0.12em] align-bottom">
										<motion.span
											animate={{ opacity: 1, transform: "translateY(0%)" }}
											className={`inline-block ${word.accent ? "text-ember" : ""}`}
											initial={
												reduce
													? { opacity: 0 }
													: { opacity: 1, transform: "translateY(105%)" }
											}
											transition={{ delay, duration: 0.9, ease: EASE_OUT }}
										>
											{word.text}
										</motion.span>
									</span>
								</Fragment>
							);
						})}
					</span>
				))}
			</h1>

			<motion.div
				animate={{ opacity: 1, transform: "translateY(0px)" }}
				className="flex max-w-sm flex-col gap-5 self-end md:pb-2"
				initial={{
					opacity: 0,
					transform: reduce ? "none" : "translateY(16px)",
				}}
				transition={{ delay: 0.75, duration: 0.8, ease: EASE_OUT }}
			>
				<p className="text-ink/75 text-[15px] leading-relaxed">
					I'm Christopher Odhiambo, a software engineer in Nairobi shipping
					products for web and mobile. Each print below is a project. Scroll or
					drag sideways to walk through them.
				</p>
				<div className="flex flex-wrap items-center gap-x-6 gap-y-3">
					<a
						className="group bg-ink text-paper inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-transform duration-150 ease-(--ease-out) active:scale-[0.97]"
						href="https://cal.com/thecodingmontana"
						rel="noopener noreferrer"
						target="_blank"
					>
						Book a call
						<span className="transition-transform duration-200 ease-(--ease-out) group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
							↗
						</span>
					</a>
					<span className="text-ink/60 flex items-center gap-3 font-mono text-[11px] tracking-[0.14em] uppercase">
						Scroll to move through work
						<motion.span
							animate={
								reduce
									? undefined
									: {
											transform: [
												"translateX(0px)",
												"translateX(6px)",
												"translateX(0px)",
											],
										}
							}
							aria-hidden
							className="text-ink inline-block"
							transition={{
								duration: 1.6,
								ease: "easeInOut",
								repeat: Number.POSITIVE_INFINITY,
							}}
						>
							⟶
						</motion.span>
					</span>
				</div>
			</motion.div>
		</header>
	);
}
