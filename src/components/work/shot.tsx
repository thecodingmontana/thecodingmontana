import { Image } from "@unpic/react";
import type { Project } from "@/types";
import { SHOT_WIDTHS } from "./palette";

type Props = {
	project: Project;
	sizes: string;
	className?: string;
	alt?: string;
	eager?: boolean;
};

/** A project screenshot served as resized AVIF/WebP through Vercel's image optimiser. */
export function Shot({ project, sizes, className, alt = "", eager }: Props) {
	const src = project.image_url.startsWith("/")
		? project.image_url
		: `/${project.image_url}`;
	return (
		<Image
			alt={alt}
			breakpoints={SHOT_WIDTHS}
			className={className}
			draggable={false}
			// /_vercel/image only exists on Vercel, so dev serves the original file
			fallback={import.meta.env.PROD ? "vercel" : undefined}
			height={1000}
			layout="constrained"
			loading={eager ? "eager" : "lazy"}
			sizes={sizes}
			src={src}
			unstyled
			width={1600}
		/>
	);
}
