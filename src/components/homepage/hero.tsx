import { motion } from "motion/react";
import CopyToClipboard from "./copy-to-clipboard";

export default function Hero() {
	return (
		<section className="relative">
			<div className="relative z-20 mx-auto mt-36 mb-2 flex max-w-full flex-col items-center justify-center px-3 md:mt-48 md:max-w-4xl lg:max-w-5xl">
				<motion.h1
					animate={{ opacity: 1, y: 0 }}
					className="my-2 w-full text-balance py-px text-center font-semibold text-4xl leading-snug opacity-90 md:text-5xl lg:text-6xl dark:text-zinc-100"
					initial={{ opacity: 0, y: 20 }}
					transition={{ delay: 0.5, duration: 1.8 }}
				>
					<span className="md:whitespace-nowrap">
						Passionate creating great
					</span>
					<br className="hidden md:block" />
					experiences on{" "}
					<motion.span
						animate={{ opacity: 1 }}
						className="animate-gradient-x bg-[linear-gradient(288deg,#ff8000,#f0c_53.2394%,#04f)] bg-clip-text font-nyght text-transparent tracking-wide"
						initial={{ opacity: 0 }}
						transition={{ delay: 0.8, duration: 1.5 }}
					>
						web & mobile
					</motion.span>
					.
				</motion.h1>

				<motion.p
					animate={{ opacity: 1, y: 0 }}
					className="relative z-10 mt-4 mb-7 flex max-w-xl flex-col items-center justify-center text-center text-muted-foreground sm:flex-row md:text-xl lg:mt-7 dark:text-white"
					initial={{ opacity: 0, y: 20 }}
					transition={{ delay: 1.2, duration: 1.5 }}
				>
					<span className="grad-white flex items-center justify-center">
						Hello, I'm Christopher Odhiambo, Software Engineer. I focus on
						crafting beautiful experiences on both web and mobile that are easy
						to use, enjoyable, and get the job done.
					</span>
				</motion.p>

				<motion.div
					animate={{ opacity: 1, y: 0 }}
					className="z-100 mt-4 flex flex-col items-center justify-center gap-6 md:mt-8 md:flex-row md:gap-10"
					initial={{ opacity: 0, y: 20 }}
					transition={{ delay: 1.5, duration: 1.5 }}
				>
					<a
						className="group relative inline-flex cursor-pointer items-center justify-between overflow-hidden rounded-full border border-white/10 bg-[#c8ff65] pr-0.75 pl-2 font-medium text-base opacity-85 backdrop-blur-xs transition-all hover:bg-transparent md:py-1 md:pr-1 md:pl-3 dark:bg-white/10"
						href="https://cal.com/thecodingmontana"
						rel="noreferrer noopener"
						target="_blank"
					>
						<span className="z-10 px-3 text-primary transition-colors duration-300 group-hover:text-black dark:text-white dark:hover:text-black">
							Book a call
						</span>
						<span className="absolute inset-0 translate-x-[45%] scale-0 rounded-full bg-white opacity-0 transition-all duration-300 ease-in-out group-hover:translate-x-0 group-hover:scale-100 group-hover:opacity-100" />
						<span className="z-10 flex items-center justify-center overflow-hidden rounded-full bg-white p-2 transition-colors duration-300 group-hover:bg-transparent md:p-2.5">
							<svg
								className="lucide lucide-arrow-right text-black transition-all duration-300 group-hover:translate-x-5 group-hover:opacity-0"
								fill="none"
								height="18"
								role="img"
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								viewBox="0 0 24 24"
								width="18"
								xmlns="http://www.w3.org/2000/svg"
							>
								<title>Arrow right</title>
								<path d="M5 12h14" />
								<path d="m12 5 7 7-7 7" />
							</svg>
							<svg
								className="lucide lucide-arrow-right absolute -translate-x-5 text-black opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
								fill="none"
								height="18"
								role="img"
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								viewBox="0 0 24 24"
								width="18"
								xmlns="http://www.w3.org/2000/svg"
							>
								<title>Arrow right</title>
								<path d="M5 12h14" />
								<path d="m12 5 7 7-7 7" />
							</svg>
						</span>
					</a>
					<CopyToClipboard text="hello@thecodingmontana.com" />
				</motion.div>
			</div>
		</section>
	);
}
