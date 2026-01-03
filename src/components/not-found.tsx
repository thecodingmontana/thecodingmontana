import { Link } from "@tanstack/react-router";
import "../styles/glitch.css";
import { IconHome } from "./svgs/icons/home";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "./ui/button";

export default function NotFound() {
	return (
		<div className="relative flex min-h-screen items-center justify-center overflow-hidden p-4">
			<ThemeToggle className="absolute top-5 right-5 rounded-full" />
			<div className="mx-auto max-w-2xl space-y-8 text-center">
				{/* Glitchy 404 Text */}
				<div className="relative">
					<h1 className="glitch-text select-none font-black text-9xl text-transparent md:text-[12rem]">
						404
					</h1>
					<h1 className="glitch-text-shadow absolute inset-0 select-none font-black text-9xl text-slate-100 md:text-[12rem]">
						404
					</h1>
					<h1 className="glitch-text-shadow-2 absolute inset-0 select-none font-black text-9xl text-brand md:text-[12rem]">
						404
					</h1>
				</div>

				{/* Glitchy Message */}
				<div className="space-y-4">
					<p className="glitch-message font-extralight text-xl md:text-2xl">
						This page fell into the void.
					</p>
					<p className="glitch-subtitle font-extralight text-red-600 text-sm md:text-base">
						{"// ERROR: Reality.exe has stopped working"}
					</p>
				</div>

				{/* Glitchy Button */}
				<div className="pt-4">
					<Button
						asChild
						className="bg-brand text-white hover:bg-brand-secondary"
						size="lg"
					>
						<Link className="flex items-center gap-2" to="/">
							<IconHome className="h-4 w-4 transition-transform group-hover:scale-110" />
							Back to Homepage
						</Link>
					</Button>
				</div>

				{/* Glitch Lines */}
				<div className="pointer-events-none absolute inset-0">
					<div className="glitch-line glitch-line-1" />
					<div className="glitch-line glitch-line-2" />
				</div>
			</div>
		</div>
	);
}
