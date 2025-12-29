import { createFileRoute } from "@tanstack/react-router";
import Hero from "@/components/homepage/hero";
import SecretSauce from "@/components/homepage/skills/secret-sauce";
import CuratedWork from "@/components/homepage/work/curated-work";

export const Route = createFileRoute("/")({ component: App });

function App() {
	return (
		<div>
			<Hero />
			<CuratedWork />
			<SecretSauce />
		</div>
	);
}
