export interface Dates {
	published_at?: Date;
	created_at: Date;
	updated_at: Date;
}

export interface ArticleStub extends Dates {
	slug: string;
	title: string;
	headshot: Headshot;
}

export interface Article extends ArticleStub {
	id: number;
	title: string;
	slug: string;
	tab: Tab;
	content: string;
}

export interface Headshot extends Dates {
	id: number | string;
	name: string;
	alternativeText: string;
	caption: string;
	width: number;
	height: number;
	formats: Formats;
	hash: string;
	ext: string;
	mime: string;
	size: number;
	url: string;
	previewUrl: null;
	provider: string;
	provider_metadata: null;
}

export interface Formats {
	thumbnail: Thumbnail;
}

export interface Thumbnail {
	name: string;
	hash: string;
	ext: string;
	mime: string;
	width: number;
	height: number;
	size: number;
	path: null;
	url: string;
}

export interface TabStub extends Dates {
	id: number;
	name: string;
	slug: string;
}

export interface Tab extends TabStub {
	articles: ArticleStub[];
}
