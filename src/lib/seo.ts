// shortcut: the custom domain does not resolve yet, swap this once it does
export const SITE_URL = "https://thecodingmontana.vercel.app";

const NAME = "Christopher Odhiambo";
const TWITTER = "@codewithmontana";

export const seo = ({
	title,
	description,
	image,
	url,
}: {
	title: string;
	description: string;
	image: string;
	url: string;
}) => [
	{ title },
	{ content: description, name: "description" },
	{ content: NAME, name: "author" },
	{
		content:
			"index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
		name: "robots",
	},

	// Open Graph uses `property`, not `name`
	{ content: "website", property: "og:type" },
	{ content: title, property: "og:title" },
	{ content: description, property: "og:description" },
	{ content: NAME, property: "og:site_name" },
	{ content: "en_US", property: "og:locale" },
	{ content: url, property: "og:url" },
	{ content: image, property: "og:image" },
	{ content: title, property: "og:image:alt" },
	{ content: "1200", property: "og:image:width" },
	{ content: "630", property: "og:image:height" },

	{ content: "summary_large_image", name: "twitter:card" },
	{ content: title, name: "twitter:title" },
	{ content: description, name: "twitter:description" },
	{ content: TWITTER, name: "twitter:creator" },
	{ content: TWITTER, name: "twitter:site" },
	{ content: image, name: "twitter:image" },
	{ content: title, name: "twitter:image:alt" },

	{ content: "telephone=no", name: "format-detection" },
	{ content: "#ece5d5", name: "theme-color" },
	{ content: "light", name: "color-scheme" },
];
