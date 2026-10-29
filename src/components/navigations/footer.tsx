import { Icon } from "@iconify/react";
import { AnimatePresence, motion } from "motion/react";
import { ThemeToggle } from "../theme-toggle";
import { Button } from "../ui/button";

export default function Footer() {
	return (
		<AnimatePresence>
			<motion.footer
				className="mx-auto mt-28 w-full max-w-full px-5 py-10 md:max-w-4xl lg:max-w-6xl"
				exit={{ opacity: 0 }}
				initial={{ opacity: 0, y: 40 }}
				transition={{ bounce: 0.4, delay: 0.3, type: "spring" }}
				viewport={{ amount: 0.8 }}
				whileInView={{ opacity: 1, y: 0 }}
			>
				<div className="flex w-full flex-col justify-start">
					<div className="flex w-full flex-col items-center gap-y-4 md:flex-row md:justify-between">
						<div className="flex flex-col gap-y-4 md:self-start">
							<h3 className="text-5xl">
								Feeling{" "}
								<span className="animate-gradient-x font-nyght bg-[linear-gradient(288deg,#ff8000,#f0c_53.2394%,#04f)] bg-clip-text tracking-wide text-transparent">
									Inspired
								</span>
							</h3>

							<div className="group flex items-center justify-center md:justify-start">
								<a
									href="https://cal.com/thecodingmontana"
									rel="noopener"
									target="_blank"
								>
									<Button className="cursor-pointer rounded-full bg-[#c8ff65] text-black hover:bg-[#c8ff65]">
										schedule a call
									</Button>
								</a>

								<Button
									className="-ml-1 cursor-pointer rounded-full bg-[#c8ff65] text-black transition-all duration-500 ease-in-out group-hover:translate-x-3 hover:bg-[#c8ff65]"
									size="icon"
								>
									<Icon
										className="size-6 -rotate-45 transition-all duration-500 ease-in-out group-hover:rotate-0"
										icon="lucide:arrow-right"
									/>
								</Button>
							</div>
						</div>

						<div className="grid gap-2 text-center md:self-start md:text-start">
							<h4 className="text-lg font-semibold">Contact Info</h4>

							<div className="flex flex-col items-center space-y-1 md:items-start">
								<a
									className="flex items-center gap-x-2"
									href="tel:+254768879348"
								>
									<Icon icon="solar:phone-outline" width={20} />
									<p>+254 768879348</p>
								</a>

								<a
									className="flex items-center gap-x-2"
									href="mailto:hello@thecodingmontana.com"
								>
									<Icon icon="solar:mailbox-outline" width={20} />
									<p>hello@thecodingmontana.com</p>
								</a>
							</div>
						</div>
					</div>

					<div className="mt-16 flex flex-col items-center md:flex-row md:justify-between">
						<p>©thecodingmontana {new Date().getFullYear()}</p>

						<div className="flex items-center gap-x-2">
							<p>All Rights Reserved</p>
							<ThemeToggle />
						</div>
					</div>
				</div>
			</motion.footer>
		</AnimatePresence>
	);
}
