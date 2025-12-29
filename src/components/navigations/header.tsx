import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { IconGithub } from "../svgs/icons/github";
import { IconHome } from "../svgs/icons/home";
import { IconTwitter } from "../svgs/icons/twitter";

export default function Header() {
	return (
		<motion.header
			animate={{
				opacity: 1,
				y: 0,
			}}
			className="fixed top-3 right-0 left-0 z-50 flex flex-col items-center"
			initial={{
				opacity: 0,
				y: -30,
			}}
			transition={{
				duration: 0.4,
				delay: 0.5,
			}}
		>
			<div className="flex w-fit rounded-full backdrop-blur-md">
				<nav className="group/navigation-menu relative flex max-w-max flex-1 items-center justify-center">
					<div style={{ position: "relative" }}>
						<ul
							className="group relative flex flex-1 list-none items-center justify-center gap-1 rounded-full border border-white/10 bg-black px-1.5 py-1 dark:bg-white/5"
							dir="ltr"
						>
							<li className="relative">
								<Link
									className="inline-block gap-1 rounded-full p-2 px-4 py-1.5 font-light text-sm text-white/70 outline-ring/50 ring-ring/10 transition-[text-shadow,color] duration-300 hover:text-white/85 focus:text-white focus-visible:outline-1 focus-visible:ring-4 data-[active=true]:text-white dark:outline-ring/40 dark:ring-ring/20 [&amp;_svg:not([class*='size-'])]:size-4 [&amp;_svg:not([class*='text-'])]:text-muted-foreground"
									to="/"
								>
									<IconHome className="size-5" />
								</Link>
								<div
									className="absolute inset-0 -z-10 w-full rounded-full bg-[#c8ff65] dark:bg-primary/5"
									style={{ opacity: 1 }}
								>
									<div className="absolute -top-2.5 left-1/2 h-1 w-8 -translate-x-1/2 rounded-t-full bg-emerald-600 dark:bg-white">
										<div className="absolute -top-2 -left-2 h-6 w-12 rounded-full bg-emerald-100 blur-md dark:bg-primary/20" />
										<div className="absolute -top-1 h-6 w-8 rounded-full bg-emerald-100 blur-md dark:bg-primary/20" />
										<div className="absolute top-0 left-2 h-4 w-4 rounded-full bg-emerald-100 blur-sm dark:bg-primary/20" />
									</div>
								</div>
							</li>
							<li className="relative" data-slot="navigation-menu-item">
								<a
									className="group group inline-block h-9 w-max items-center justify-center rounded-full px-4 py-1.5 font-light text-sm text-white/70 outline-ring/50 ring-ring/10 transition-[text-shadow,color] duration-300 hover:text-white/85 focus-visible:outline-1 focus-visible:ring-4 disabled:pointer-events-none disabled:opacity-50 data-[active=true]:text-accent-foreground dark:outline-ring/40 dark:ring-ring/20"
									href="https://github.com/thecodingmontana"
									rel="noopener"
									target="_blank"
								>
									<IconGithub className="size-5" />
								</a>
							</li>
							<li className="relative" data-slot="navigation-menu-item">
								<a
									className="group group inline-block h-9 w-max items-center justify-center rounded-full px-4 py-1.5 font-light text-sm text-white/70 outline-ring/50 ring-ring/10 transition-[text-shadow,color] duration-300 hover:text-white/85 focus-visible:outline-1 focus-visible:ring-4 disabled:pointer-events-none disabled:opacity-50 data-[active=true]:text-accent-foreground dark:outline-ring/40 dark:ring-ring/20"
									data-radix-collection-item=""
									href="https://x.com/codewithmontana"
									rel="noopener"
									target="_blank"
								>
									<IconTwitter className="size-5" />
								</a>
							</li>
							<li className="relative">
								<a
									className="relative inline-block h-full cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-full bg-white/10 px-4 py-1.5 font-light text-sm text-white/70 shadow-sm outline-ring/50 ring-ring/10 transition-all duration-300 hover:bg-white/15 hover:text-white/90 focus-visible:outline-1 focus-visible:ring-4 disabled:pointer-events-none disabled:opacity-50 has-[>svg]:px-3 aria-invalid:focus-visible:ring-0 dark:outline-ring/40 dark:ring-ring/20 [&amp;_svg:not([class*='size-'])]:size-4 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0"
									href="https://cal.com/thecodingmontana"
									rel="noopener"
									target="_blank"
								>
									Book a Call
									<div
										aria-hidden="true"
										className="absolute bottom-0 h-1/3 w-full -translate-x-4 rounded-full bg-white opacity-30 blur-sm"
									/>
								</a>
							</li>
						</ul>
					</div>
					<div className="absolute top-full left-0 isolate z-50 flex justify-center" />
				</nav>
			</div>
		</motion.header>
	);
}
