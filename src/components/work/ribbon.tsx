import type React from "react";
import type { Project } from "@/types";
import { PosterCard } from "./poster-card";
import { CARD_ASPECT, type useRibbon } from "./use-ribbon";

const CAPTION_SPACE_PX = 130;

type Props = {
	projects: Project[];
	ribbon: ReturnType<typeof useRibbon>;
	onOpen: (event: React.MouseEvent, index: number) => void;
};

export function Ribbon({ projects, ribbon, onOpen }: Props) {
	const { active, goTo, hold, metrics, pointer, smooth, tilt } = ribbon;

	const onKeyDown = (event: React.KeyboardEvent) => {
		if (event.key === "ArrowRight") {
			event.preventDefault();
			goTo(active + 1);
		}
		if (event.key === "ArrowLeft") {
			event.preventDefault();
			goTo(active - 1);
		}
	};

	return (
		// biome-ignore lint/a11y/noNoninteractiveElementInteractions: drag surface; arrow keys bubble up from the focusable card links inside
		<section
			aria-label="Selected work. Scroll, drag or use the arrow keys to move through it."
			className="relative w-full cursor-grab touch-pan-y select-none active:cursor-grabbing"
			onKeyDown={onKeyDown}
			onPointerEnter={(event) =>
				event.pointerType === "mouse" && hold("hover", true)
			}
			onPointerLeave={() => hold("hover", false)}
			{...pointer}
		>
			<ul
				className="relative overflow-x-clip"
				style={{ height: metrics.cardW * CARD_ASPECT + CAPTION_SPACE_PX }}
			>
				{projects.map((project, index) => (
					<PosterCard
						index={index}
						key={project.name}
						metrics={metrics}
						offset={smooth}
						onFocusCard={goTo}
						onOpen={onOpen}
						project={project}
						tilt={tilt}
					/>
				))}
			</ul>
		</section>
	);
}
