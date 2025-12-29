import { TanStackDevtools } from "@tanstack/react-devtools";
import { createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import Footer from "@/components/navigations/footer";
import Header from "@/components/navigations/header";
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
				content: "width=device-width, initial-scale=1",
			},
			...seo({
				title: "Christopher Odhiambo",
				description:
					"Hello, I'm Christopher Odhiambo, Software Engineer. I focus on crafting beautiful experiences on both web and mobile that are easy to use, enjoyable, and get the job done.",
			}),
		],
		links: [
			{
				rel: "stylesheet",
				href: appCss,
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com",
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "use-credentials",
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200..800&display=swap",
			},
		],
	}),

	shellComponent: RootDocument,
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
