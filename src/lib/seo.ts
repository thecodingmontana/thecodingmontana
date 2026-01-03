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
		{ name: "description", content: description },
		{ name: "keywords", content: keywords },
		{ name: "author", content: author || siteName },

		// Robots meta tags
		...(noIndex
			? [{ name: "robots", content: "noindex, nofollow" }]
			: [
					{
						name: "robots",
						content:
							"index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
					},
				]),

		// Open Graph meta tags (using property for correct OG spec)
		{ property: "og:type", content: type },
		{ property: "og:title", content: title },
		{ property: "og:description", content: description },
		{ property: "og:site_name", content: siteName },
		{ property: "og:locale", content: locale },
		...(url ? [{ property: "og:url", content: url }] : []),
		...(image
			? [
					{ property: "og:image", content: image },
					{ property: "og:image:alt", content: title },
					{ property: "og:image:width", content: "1200" },
					{ property: "og:image:height", content: "630" },
				]
			: []),

		// Article specific meta tags
		...(type === "article" && publishedTime
			? [{ property: "article:published_time", content: publishedTime }]
			: []),
		...(type === "article" && modifiedTime
			? [{ property: "article:modified_time", content: modifiedTime }]
			: []),
		...(type === "article" && author
			? [{ property: "article:author", content: author }]
			: []),

		// Twitter Card meta tags
		{
			name: "twitter:card",
			content: image ? "summary_large_image" : "summary",
		},
		{ name: "twitter:title", content: title },
		{ name: "twitter:description", content: description },
		{ name: "twitter:creator", content: twitterHandle },
		{ name: "twitter:site", content: twitterHandle },
		...(image ? [{ name: "twitter:image", content: image }] : []),
		...(image ? [{ name: "twitter:image:alt", content: title }] : []),

		// Additional SEO meta tags
		{ name: "format-detection", content: "telephone=no" },
		{ name: "theme-color", content: "#ffffff" },
		{ name: "color-scheme", content: "light dark" },
	];

	return tags;
};
