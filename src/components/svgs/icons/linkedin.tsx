import type { SVGProps } from "react";

export function IconLinkedin(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			height="1em"
			viewBox="0 0 24 24"
			width="1em"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<title>Linkedin Icon</title>
			<g fill="none" stroke="currentColor" strokeLinejoin="round">
				<path
					d="M7 10v7m4-4v4m0-4a3 3 0 1 1 6 0v4m-6-4v-3"
					strokeLinecap="round"
					strokeWidth="1.5"
				/>
				<path d="M7.008 7h-.009" strokeLinecap="round" strokeWidth="2" />
				<path
					d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12Z"
					strokeWidth="1.5"
				/>
			</g>
		</svg>
	);
}
