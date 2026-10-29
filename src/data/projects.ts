import type { Project } from "@/types";

export const projects: Project[] = [
	{
		color: "#673ab7",
		description:
			"Zadaci is an all-in-one project management platform built to help you and your team get things done faster.",
		github: "https://github.com/thecodingmontana/zadaci",
		highlights: [
			"Built using Nuxt.js and TypeScript",
			"Responsive design with shadcn-ui + Tailwind CSS",
			"Supabase + PostgreSQL + Drizzle ORM for typed backend.",
			"Fast load times and intuitive navigation optimized for mobile UX.",
		],
		image_url: "/images/zadaci.png",
		is_working: true,
		name: "Zadaci",
		stack: [
			{
				name: "Nuxt.js",
			},
			{
				name: "TypeScript",
			},
			{
				name: "Supabase",
			},
			{
				name: "Drizzle ORM",
			},
			{
				name: "Tailwind CSS",
			},
			{
				name: "Shadcn UI",
			},
			{
				name: "PostgreSQL",
			},
		],
		tagline: "Say Hello 👋 to Effortless Project Management",
		website: "https://zadaci.vercel.app",
	},
	{
		color: "#F97316",
		description:
			"Dogdom is a cross-platform mobile app for dog lovers. It blends modern UI patterns, responsive layouts, and performance-first engineering to deliver a fun and functional experience for users who want to interact with dogs and dog-related content.",
		github: "https://github.com/thecodingmontana/dogdom",
		highlights: [
			"Built using Expo and React Native for seamless Android/iOS deployment.",
			"Responsive design with Nativewind (Tailwind CSS for React Native).",
			"Fast load times and intuitive navigation optimized for mobile UX.",
		],
		image_url: "/images/dogdom.png",
		is_working: true,
		name: "Dogdom",
		stack: [
			{
				name: "Expo",
			},
			{
				name: "React",
			},
			{
				name: "React Native",
			},
			{
				name: "Nativewind",
			},
			{
				name: "TypeScript",
			},
		],
		tagline:
			"An elegant mobile app built for dog lovers, with smooth interactions and playful design.",
	},
	{
		color: "#E2E4F6",
		description:
			"Convertle is an all-in-one media conversion tool for creators. Users can transform any format of image, video, or audio directly from their browser using FFmpeg and enjoy a smooth experience with zero constraints.",
		github: "https://github.com/thecodingmontana/convertle",
		highlights: [
			"Powered by FFmpeg under the hood for accurate and fast conversions.",
			"UI built with Shadcn and TypeScript for maintainability and DX.",
			"Zero-limits conversion pipeline with Next.js App Router.",
		],
		image_url: "images/convertle.png",
		is_working: true,
		name: "Convertle",
		stack: [
			{
				name: "Next.js",
			},
			{
				name: "React",
			},
			{
				name: "Tailwind CSS",
			},
			{
				name: "TypeScript",
			},
			{
				name: "FFmpeg",
			},
			{
				name: "Motion",
			},
		],
		tagline: "Convert images, videos, and audio — without limits.",
		website: "https://convertle.vercel.app",
	},
	{
		color: "#b25a80",
		description:
			"Montflix Rebirth is a high-speed movie discovery app built with the latest Angular features. It offers real-time browsing powered by the TMDB API and a highly optimized UI built with Tailwind CSS v4.",
		github: "https://github.com/thecodingmontana/montflix-rebirth",
		highlights: [
			"Angular 19 with Angular Signals for reactive state handling.",
			"TMDB API for live movie data with dynamic search and filters.",
			"Responsive UI with Tailwind CSS v4 for a cinema-like feel.",
		],
		image_url: "/images/montflix-rebirth.png",
		is_working: true,
		name: "Montflix Rebirth",
		stack: [
			{
				name: "Angular",
			},
			{
				name: "Tailwind CSS",
			},
			{
				name: "TypeScript",
			},
			{
				name: "Signals",
			},
			{
				name: "TMDB API",
			},
		],
		tagline: "Reimagining the movie platform experience with Angular 19.",
		website: "https://montflix-rebirth.vercel.app/",
	},
	{
		color: "#3d46be",
		description:
			"Todos is a productivity-focused app built for resilience. It works offline by default, syncs with a Nuxt.js backend using Drizzle ORM, and ensures your task list never misses a beat — even with poor connectivity.",
		github: "https://github.com/thecodingmontana/todos",
		highlights: [
			"Offline-first storage and sync using RxDB.",
			"Drizzle ORM and Nuxt.js on the backend for real-time syncing.",
			"Clean UI optimized for speed and usability.",
		],
		image_url: "/images/todos.png",
		is_working: true,
		name: "Todos",
		stack: [
			{
				name: "Nuxt.js",
			},
			{
				name: "Vue",
			},
			{
				name: "Drizzle ORM",
			},
			{
				name: "Tailwind CSS",
			},
			{
				name: "TypeScript",
			},
			{
				name: "Nuxt Auth Utils",
			},
			{
				name: "RxDB",
			},
			{
				name: "Shadcn UI",
			},
			{
				name: "PostgreSQL",
			},
		],
		tagline: "A local-first todo app with offline-first syncing and modern DX.",
		website: "https://nuxt-local-first-todos.vercel.app",
	},
	{
		color: "#E70E02",
		description:
			"Jonathan is a photography portfolio built to be clean, immersive, and expressive. It combines motion effects with lightweight image handling to ensure stunning visuals and quick load times.",
		github: "https://github.com/thecodingmontana/jonathan-ke",
		highlights: [
			"Nuxt 3 with Nuxt Image for high-performance image optimization.",
			"Tailwind CSS and smooth animation sequences.",
			"SEO and mobile-friendly layout with fast content delivery.",
		],
		image_url: "/images/jonathan.png",
		is_working: true,
		name: "Jonathan",
		stack: [
			{
				name: "Nuxt.js",
			},
			{
				name: "Vue",
			},
			{
				name: "Tailwind CSS",
			},
			{
				name: "TypeScript",
			},
			{
				name: "Nuxt Image",
			},
			{
				name: "Motion",
			},
		],
		tagline:
			"A minimal, motion-rich photography portfolio to showcase creative excellence.",
		website: "https://jonathan-ke.vercel.app",
	},
	{
		color: "#FFFD82",
		description:
			"Nuxt Lucia Auth is a full-stack authentication kit built for developers who want a robust, secure, and flexible auth setup in Nuxt.js. It comes with OAuth, credentials, email verification, and PostgreSQL integration out of the box.",
		github: "https://github.com/thecodingmontana/nuxt-lucia-auth",
		highlights: [
			"Credential + OAuth authentication using Lucia.",
			"PostgreSQL + Drizzle ORM for typed backend.",
			"Email templates with Nodemailer + built-in routes and validation.",
		],
		image_url: "/images/nuxt-lucia-auth.png",
		is_working: true,
		name: "Nuxt Lucia Auth",
		stack: [
			{
				name: "Nuxt.js",
			},
			{
				name: "Vue",
			},
			{
				name: "Drizzle ORM",
			},
			{
				name: "Tailwind CSS",
			},
			{
				name: "TypeScript",
			},
			{
				name: "Lucia Auth",
			},
			{
				name: "Shadcn UI",
			},
			{
				name: "PostgreSQL",
			},
			{
				name: "Pinia",
			},
		],
		tagline: "A plug-and-play authentication system for Nuxt projects.",
		website: "https://nuxt-lucia-auth.vercel.app/",
	},
	{
		color: "#C1666B",
		description:
			"Jadoo is a beautiful, responsive travel landing page built with Nuxt 3 and enhanced with subtle motion. It targets conversion and visual storytelling for travel brands.",
		github: "https://github.com/thecodingmontana/jadoo",
		highlights: [
			"Modern layout with fluid transitions.",
			"Performance-focused with Nuxt 3 and static generation.",
			"Clean animations and tailored content sections.",
		],
		image_url: "/images/jadoo.png",
		is_working: true,
		name: "Jadoo",
		stack: [
			{
				name: "Nuxt.js",
			},
			{
				name: "Vue",
			},
			{
				name: "Tailwind CSS",
			},
			{
				name: "TypeScript",
			},
			{
				name: "Nuxt Image",
			},
		],
		tagline:
			"A modern travel agency landing page built to inspire exploration.",
		website: "https://jadoo-ke.vercel.app",
	},
	{
		color: "#D4CDF4",
		description:
			"KreativeStores is a SaaS platform for content creators to manage their digital presence. It includes tools for monetization, promotion, and performance analytics — all designed for scalability and impact.",
		github: "",
		highlights: [
			"Tools for content scheduling, campaign tracking, and payout analytics.",
			"Customizable store pages for creators.",
			"Designed to support large user bases with scalable architecture.",
		],
		image_url: "/images/kreativestores.png",
		is_working: true,
		name: "KreativeStores",
		stack: [
			{
				name: "Nuxt.js",
			},
			{
				name: "Vue",
			},
			{
				name: "Express.js",
			},
			{
				name: "Tailwind CSS",
			},
			{
				name: "TypeScript",
			},
			{
				name: "Shadcn UI",
			},
			{
				name: "Nuxt Image",
			},
			{
				name: "Pinia",
			},
		],
		tagline: "Helping creators manage, promote, and monetize their influence.",
		website: "https://www.kreativestores.com",
	},
	{
		color: "#0f8661",
		description:
			"Apiwap is a WhatsApp automation platform that allows businesses to send, schedule, and manage automated messages. It exposes a clean REST API and WebSocket interface for real-time interaction.",
		github: "",
		highlights: [
			"API-first design with developer-friendly docs.",
			"WebSocket support for real-time updates.",
			"Role-based dashboard with stats and message logs.",
		],
		image_url: "/images/apiwap.png",
		is_working: true,
		name: "Apiwap",
		stack: [
			{
				name: "Vue",
			},
			{
				name: "Express.js",
			},
			{
				name: "Tailwind CSS",
			},
			{
				name: "TypeScript",
			},
			{
				name: "Pinia",
			},
		],
		tagline: "Automate WhatsApp with powerful APIs and scheduling tools.",
		website: "https://apiwap.com",
	},
	{
		color: "#2196f3",
		description:
			"A sleek and powerful eCommerce platform designed for store owners and shoppers alike.",
		github: "https://github.com/thecodingmontana/nuxt-github-clone",
		highlights: [
			"Backend built using NestJS with JWT authentication.",
			"Store admin data securely stored in MongoDB.",
			"Firebase Admin SDK handles live store updates.",
			"Frontend built using Vue.js, Tailwind CSS, and Pinia for global state.",
			"Authentication and store actions backed by Firebase.",
		],
		image_url: "/images/shop-with-hawa.png",
		is_working: true,
		name: "Shop With Hawa",
		stack: [
			{
				name: "Next.js",
			},
			{
				name: "MongoDB",
			},
			{
				name: "JWT",
			},
			{
				name: "TypeScript",
			},
			{
				name: "Firebase",
			},
			{
				name: "Vue",
			},
			{
				name: "Tailwind CSS",
			},
			{
				name: "Pinia",
			},
		],
		tagline: "Where elegance meets performance in eCommerce.",
		website: "https://shop-with-hawa.vercel.app",
	},
	{
		color: "#18F2B2",
		description:
			"A pre-configured Nuxt starter template featuring Firebase authentication, route guards, and responsive UI. Designed to reduce boilerplate for projects needing Firebase auth.",
		github: "https://github.com/thecodingmontana/nuxt-firebase-auth",
		highlights: [
			"Firebase ready and Tailwind CSS pre-integrated.",
			"Full auth flow with guards and session persistence.",
			"Built-in UI components and error handling.",
		],
		image_url: "/images/nuxt-firebase-auth.png",
		is_working: true,
		name: "Nuxt Firebase Auth Starter",
		stack: [
			{
				name: "Nuxt.js",
			},
			{
				name: "Vue",
			},
			{
				name: "Firebase",
			},
			{
				name: "Tailwind CSS",
			},
			{
				name: "TypeScript",
			},
			{
				name: "Shadcn UI",
			},
			{
				name: "Pinia",
			},
		],
		tagline: "Kickstart your Nuxt app with Firebase-powered authentication.",
		website: "https://nuxt-firebase-auth-starter.vercel.app",
	},
	{
		color: "#2FE6DE",
		description:
			"SnapEasy is a utility tool to capture full-page or partial screenshots of websites. Built for simplicity and speed, it's perfect for designers, developers, or marketers.",
		github: "https://github.com/thecodingmontana/snapeasy",
		highlights: [
			"Blazing-fast Nuxt 3 architecture.",
			"Uses Puppeteer for accurate page captures.",
			"Download and share screenshots instantly.",
		],
		image_url: "/images/snap-easy.png",
		is_working: true,
		name: "SnapEasy",
		stack: [
			{
				name: "Nuxt.js",
			},
			{
				name: "Vue",
			},
			{
				name: "Puppeteer",
			},
			{
				name: "Tailwind CSS",
			},
			{
				name: "TypeScript",
			},
			{
				name: "Shadcn UI",
			},
		],
		tagline: "One-click beautiful screenshots of any webpage.",
		website: "https://snapeasy.vercel.app",
	},
	{
		color: "#FAE1DF",
		description:
			"Gmail Clone replicates Gmail's clean email interface and real-time updates using Firebase Firestore and Auth. It’s fast, familiar, and a great UI showcase.",
		github: "https://github.com/thecodingmontana/nuxt-gmail-clone",
		highlights: [
			"Authentication and mail sync via Firebase.",
			"Responsive layout with inbox, sent, and draft views.",
			"Search and filter UI with Tailwind CSS.",
		],
		image_url: "/images/nuxt-gmail-clone.png",
		is_working: true,
		name: "Gmail Clone",
		stack: [
			{
				name: "Nuxt.js",
			},
			{
				name: "Vue",
			},
			{
				name: "Firebase",
			},
			{
				name: "Tailwind CSS",
			},
			{
				name: "TypeScript",
			},
			{
				name: "Shadcn UI",
			},
			{
				name: "Pinia",
			},
		],
		tagline: "A Gmail-style email UI powered by Firebase.",
		website: "https://nuxt-gmail-clone.vercel.app",
	},
	{
		color: "#E4C3AD",
		description:
			"This project emulates Twitter’s core features — tweeting, feeds, likes — with real-time updates using Firebase. Built as a modern single-page app.",
		github: "https://github.com/thecodingmontana/react-twitter-clone",
		highlights: [
			"Live tweet feed and like system.",
			"Realtime Firestore sync with minimal delay.",
			"Responsive UI styled with Tailwind.",
		],
		image_url: "/images/vue-twitter.png",
		is_working: false,
		name: "Twitter Clone (React)",
		stack: [
			{
				name: "React",
			},
			{
				name: "Tailwind CSS",
			},
			{
				name: "JavaScript",
			},
			{
				name: "Firebase",
			},
			{
				name: "Redux",
			},
		],
		tagline: "A real-time Twitter clone built with React and Firebase.",
		website: "https://the-twitter-clone-ke.vercel.app",
	},
	{
		color: "#928779",
		description:
			"A feature-rich Twitter clone built with Vue and Pinia. It uses Firebase for backend services and offers responsive mobile-first design.",
		github: "https://github.com/thecodingmontana/vue-twitter-clone",
		highlights: [
			"Vue Composition API with real-time updates.",
			"Firebase auth and tweet syncing.",
			"Tailwind-powered layout optimized for mobile.",
		],
		image_url: "/images/vue-twitter.png",
		is_working: true,
		name: "Twitter Clone (Vue)",
		stack: [
			{
				name: "Vue",
			},
			{
				name: "Tailwind CSS",
			},
			{
				name: "JavaScript",
			},
			{
				name: "Firebase",
			},
			{
				name: "Pinia",
			},
		],
		tagline: "A Vue-powered Twitter clone with live updates and clean design.",
		website: "https://vue-twitter-ke.vercel.app",
	},
];
