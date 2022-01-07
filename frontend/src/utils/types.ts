export interface Format {
	height: number;
	url: string;
	width: number;
}

export namespace Strapi {
	export interface V4Wrapper<T> {
		data: {
			attributes: T;
		};
	}
	export type Cleaned<T extends { __typename: string }> = Omit<
		T,
		'__typename'
	>;
	export interface Format {
		height?: number;
		url: string;
		width?: number;
	}
}

export namespace Fragments {
	export interface Global {
		title: string;
		title_prefix: string;
		favicon: Strapi.V4Wrapper<Fragments.Media>;
		logo: Strapi.V4Wrapper<Fragments.Media>;
	}

	export interface Page {
		title: string;
		slug: string;
		sections: Fragments.Sections.All[];
	}

	export interface Media extends Strapi.Format {
		alternativeText?: string;
		caption?: string;
		name: string;
		formats: {
			[key: string]: Strapi.Format;
		};
	}

	export namespace Sections {
		export type All = Media | Quote | Wysiwyg;
		export interface Media {
			__typename: 'ComponentSectionsMedia';
			media: Strapi.V4Wrapper<Fragments.Media>;
			credit?: string;
		}
		export interface Quote {
			__typename: 'ComponentSectionsQuote';
			content: string;
			source?: string;
		}
		export interface Wysiwyg {
			__typename: 'ComponentSectionsWysiwyg';
			content: string;
		}
	}
}

export namespace Queries {
	export interface Page extends Base {
		page: Strapi.V4Wrapper<Fragments.Page>;
	}

	export interface Base {
		global: Strapi.V4Wrapper<Fragments.Global>;
	}
}
