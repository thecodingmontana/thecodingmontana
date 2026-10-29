export const seo = ({
	title,
	description,
	keywords,
	image,
	url,
	type = "website",
	author,
	publishedTime,
	modifiedTime,
	siteName = "Christopher Odhiambo",
	twitterHandle = "@codewithmontana",
	locale = "en_US",
	noIndex = false,
}: {
	title: string;
	description?: string;
	image?: string;
	keywords?: string;
	url?: string;
	type?: "website" | "article" | "profile";
	author?: string;
	publishedTime?: string;
	modifiedTime?: string;
	siteName?: string;
	twitterHandle?: string;
	locale?: string;
	noIndex?: boolean;
}) => {
	const tags = [
		{ title },
		{ content: description, name: "description" },
		{ content: keywords, name: "keywords" },
		{ content: author || siteName, name: "author" },

		// Robots meta tags
		...(noIndex
			? [{ content: "noindex, nofollow", name: "robots" }]
			: [
					{
						content:
							"index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
						name: "robots",
					},
				]),

		// Open Graph meta tags (using property for correct OG spec)
		{ content: type, property: "og:type" },
		{ content: title, property: "og:title" },
		{ content: description, property: "og:description" },
		{ content: siteName, property: "og:site_name" },
		{ content: locale, property: "og:locale" },
		...(url ? [{ content: url, property: "og:url" }] : []),
		...(image
			? [
					{ content: image, property: "og:image" },
					{ content: title, property: "og:image:alt" },
					{ content: "1200", property: "og:image:width" },
					{ content: "630", property: "og:image:height" },
				]
			: []),

		// Article specific meta tags
		...(type === "article" && publishedTime
			? [{ content: publishedTime, property: "article:published_time" }]
			: []),
		...(type === "article" && modifiedTime
			? [{ content: modifiedTime, property: "article:modified_time" }]
			: []),
		...(type === "article" && author
			? [{ content: author, property: "article:author" }]
			: []),

		// Twitter Card meta tags
		{
			content: image ? "summary_large_image" : "summary",
			name: "twitter:card",
		},
		{ content: title, name: "twitter:title" },
		{ content: description, name: "twitter:description" },
		{ content: twitterHandle, name: "twitter:creator" },
		{ content: twitterHandle, name: "twitter:site" },
		...(image ? [{ content: image, name: "twitter:image" }] : []),
		...(image ? [{ content: title, name: "twitter:image:alt" }] : []),

		// Additional SEO meta tags
		{ content: "telephone=no", name: "format-detection" },
		{ content: "#ffffff", name: "theme-color" },
		{ content: "light dark", name: "color-scheme" },
	];

	return tags;
};
