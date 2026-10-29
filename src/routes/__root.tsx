import { TanStackDevtools } from "@tanstack/react-devtools";
import { createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import NotFound from "@/components/not-found";
import { seo } from "@/lib/seo";
import appCss from "../styles/global.css?url";

export const Route = createRootRoute({
	head: () => ({
		links: [
			{
				href: appCss,
				rel: "stylesheet",
			},
			{
				href: "https://thecodingmontana.com",
				rel: "canonical",
			},
			{
				href: "/favicon.ico",
				rel: "icon",
				type: "image/x-icon",
			},
			{
				href: "/favicon-32x32.png",
				rel: "icon",
				sizes: "32x32",
				type: "image/png",
			},
			{
				href: "/favicon-16x16.png",
				rel: "icon",
				sizes: "16x16",
				type: "image/png",
			},
			{
				href: "/apple-touch-icon.png",
				rel: "apple-touch-icon",
				sizes: "180x180",
			},
			{
				href: "/site.webmanifest",
				rel: "manifest",
			},
			{
				href: "https://fonts.googleapis.com",
				rel: "preconnect",
			},
			{
				crossOrigin: "anonymous",
				href: "https://fonts.gstatic.com",
				rel: "preconnect",
			},
			{
				href: "https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200..800&family=DM+Mono:wght@400;500&display=swap",
				rel: "stylesheet",
			},
			{
				href: "https://fonts.googleapis.com",
				rel: "dns-prefetch",
			},
		],
		meta: [
			{
				charSet: "utf-8",
			},
			{
				content: "width=device-width, initial-scale=1, viewport-fit=cover",
				name: "viewport",
			},
			...seo({
				author: "Christopher Odhiambo",
				description:
					"Hello, I'm Christopher Odhiambo, Software Engineer. I focus on crafting beautiful experiences on both web and mobile that are easy to use, enjoyable, and get the job done.",
				image: "https://thecodingmontana.com/images/og-image.png",
				keywords:
					"Christopher Odhiambo, Software Engineer, Full Stack Developer, Web Developer, Mobile Developer, React Developer, TypeScript Developer, Frontend Engineer, Backend Engineer, UI/UX Developer, JavaScript Developer, Nairobi Software Engineer, Kenya Web Developer, TanStack Developer, React Native Developer, Modern Web Applications, Software Development Portfolio, Freelance Software Engineer, Custom Software Development, Web App Development, Mobile App Development",
				title: "Christopher Odhiambo - Software Engineer",
				twitterHandle: "@codewithmontana",
				url: "https://thecodingmontana.com",
			}),
		],
	}),
	notFoundComponent: NotFound,
	shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head>
				<HeadContent />
			</head>
			<body className="bg-paper text-ink min-h-dvh font-sans">
				{children}
				<TanStackDevtools
					config={{
						position: "bottom-right",
					}}
					plugins={[
						{
							name: "Tanstack Router",
							render: <TanStackRouterDevtoolsPanel />,
						},
					]}
				/>
				<Scripts />
			</body>
		</html>
	);
}
