import { cn } from "@/lib/utils";
import Navigation from "./navigation";

export default function PageLayout({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) {
	return (
		<main className="mx-auto max-w-332 px-4 pt-2 pb-8 text-flexoki-tx sm:px-6 sm:pt-24">
			<div className="lg:grid lg:grid-cols-[1fr_minmax(0,2.5fr)_1fr] lg:gap-8">
				<div className="lg:col-start-1">
					<Navigation />
				</div>
				<div className={cn("w-full lg:col-start-2", className)}>{children}</div>

				<div className="lg:col-start-3" />
			</div>
		</main>
	);
}
