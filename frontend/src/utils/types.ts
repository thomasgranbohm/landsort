export interface Format {
	height: number;
	url: string;
	width: number;
}

export namespace Strapi {
	export type V4Wrapper<T> = T extends Array<infer E>
		? {
				data: Array<{ attributes: E }>;
		  }
		: {
				data: {
					attributes: T;
				};
		  };
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
	export interface Header {
		menus: Array<{
			title: string;
			pages: Strapi.V4Wrapper<Array<Fragments.MenuItem>>;
		}>;
	}
	export type MenuItem = Pick<Fragments.Page, 'title' | 'slug'>;
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
		header: Strapi.V4Wrapper<Fragments.Header>;
	}
}
