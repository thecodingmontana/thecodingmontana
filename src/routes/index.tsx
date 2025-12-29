import { createFileRoute } from "@tanstack/react-router";
import Hero from "@/components/homepage/hero";

export const Route = createFileRoute("/")({ component: App });

function App() {
	return (
		<div>
			<Hero />
		</div>
	);
}
