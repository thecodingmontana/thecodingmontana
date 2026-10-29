export type Project = {
	name: string;
	tagline: string;
	description: string;
	highlights: string[];
	stack: TechStack[];
	github: string;
	color: string;
	website?: string;
	is_working: boolean;
	image_url: string;
};

export type TechStack = {
	name: string;
};
