import { TanStackDevtools } from "@tanstack/react-devtools";
import { createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import Footer from "@/components/navigations/footer";
import Header from "@/components/navigations/header";
import NotFound from "@/components/not-found";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { seo } from "@/lib/seo";
import appCss from "../styles/global.css?url";

export const Route = createRootRoute({
	head: () => ({
		meta: [
			{
				charSet: "utf-8",
			},
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1, viewport-fit=cover",
			},
			...seo({
				title: "Christopher Odhiambo - Software Engineer",
				description:
					"Hello, I'm Christopher Odhiambo, Software Engineer. I focus on crafting beautiful experiences on both web and mobile that are easy to use, enjoyable, and get the job done.",
				keywords:
					"Christopher Odhiambo, Software Engineer, Full Stack Developer, Web Developer, Mobile Developer, React Developer, TypeScript Developer, Frontend Engineer, Backend Engineer, UI/UX Developer, JavaScript Developer, Nairobi Software Engineer, Kenya Web Developer, TanStack Developer, React Native Developer, Modern Web Applications, Software Development Portfolio, Freelance Software Engineer, Custom Software Development, Web App Development, Mobile App Development",
				author: "Christopher Odhiambo",
				twitterHandle: "@codewithmontana",
				url: "https://thecodingmontana.com",
				image: "https://thecodingmontana.com/images/og-image.png",
			}),
		],
		links: [
			{
				rel: "stylesheet",
				href: appCss,
			},
			{
				rel: "canonical",
				href: "https://thecodingmontana.com",
			},
			{
				rel: "icon",
				type: "image/x-icon",
				href: "/favicon.ico",
			},
			{
				rel: "icon",
				type: "image/png",
				sizes: "32x32",
				href: "/favicon-32x32.png",
			},
			{
				rel: "icon",
				type: "image/png",
				sizes: "16x16",
				href: "/favicon-16x16.png",
			},
			{
				rel: "apple-touch-icon",
				sizes: "180x180",
				href: "/apple-touch-icon.png",
			},
			{
				rel: "manifest",
				href: "/site.webmanifest",
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com",
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous",
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200..800&display=swap",
			},
			{
				rel: "dns-prefetch",
				href: "https://fonts.googleapis.com",
			},
		],
	}),
	shellComponent: RootDocument,
	notFoundComponent: NotFound,
});

function RootDocument({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head>
				<HeadContent />
			</head>
			<body className="relative mx-auto flex min-h-screen max-w-8xl flex-col selection:bg-[#c8ff65] selection:text-primary">
				<ThemeProvider>
					<Header />
					<div className="flex-1">{children}</div>
					<Toaster closeButton richColors />
					<Footer />
				</ThemeProvider>
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
