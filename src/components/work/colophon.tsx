const LINKS = [
	{ href: "mailto:hello@thecodingmontana.com", label: "Email" },
	{ href: "https://github.com/thecodingmontana", label: "GitHub" },
	{ href: "https://x.com/codewithmontana", label: "X" },
	{
		href: "https://www.linkedin.com/in/christopher-odhiambo-9a8b82369",
		label: "LinkedIn",
	},
];

export function Colophon() {
	return (
		<footer className="text-ink/60 flex flex-col gap-3 font-mono text-[10.5px] tracking-[0.12em] uppercase md:flex-row md:items-center md:justify-between">
			<p>
				Web &amp; mobile · TypeScript, React, Vue, Nuxt · ©{" "}
				{new Date().getFullYear()}
			</p>
			<ul className="flex flex-wrap gap-x-5 gap-y-2">
				{LINKS.map((link) => (
					<li key={link.label}>
						<a
							className="decoration-ink/30 hover:text-ink hover:decoration-ember underline underline-offset-4 transition-colors duration-200"
							href={link.href}
							rel="noopener noreferrer"
							target={link.href.startsWith("http") ? "_blank" : undefined}
						>
							{link.label}
						</a>
					</li>
				))}
				<li className="normal-case">made in Nairobi, mostly at night</li>
			</ul>
		</footer>
	);
}
