export interface Format {
	height: number;
	url: string;
	width: number;
}

export interface Breadcrumb {
	title: string;
	slug: string;
}

export namespace Strapi {
	export type V4Attributes<T> = { attributes: T };
	export type V4Wrapper<T> = T extends Array<infer E>
		? {
				data: Array<V4Attributes<E>>;
		  }
		: {
				data: V4Attributes<T>;
		  };
	export type V4Pagination<T> = V4Wrapper<T> & {
		meta: {
			pagination: {
				page: number;
				pageCount: number;
				pageSize: number;
				total: number;
			};
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
	export interface Breadcrumb {
		title: string;
		slug: string;
	}
	export interface Menu {
		title: string;
		pages: Strapi.V4Wrapper<Array<Fragments.MenuItem>>;
	}
	export type MenuItem = Pick<Fragments.Page, 'title' | 'slug' | 'parent'>;
	export interface Global {
		title: string;
		title_prefix: string;
		home: string;
		favicon: Strapi.V4Wrapper<Fragments.Media>;
		logo: Strapi.V4Wrapper<Fragments.Media>;
		menus: Array<Fragments.Menu>;
	}
	export interface Page {
		title: string;
		slug: string;
		sections: Fragments.Sections.All[];
		parent: Strapi.V4Wrapper<Fragments.Page>;
	}
	export interface Startpage {
		title: string;
		sections: Fragments.Sections.All[];
	}
	export type PageSlugs = Array<Pick<Fragments.Page, 'slug' | 'parent'>>;

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
	export interface Startpage extends Base {
		startpage: Strapi.V4Wrapper<Fragments.Startpage>;
	}

	export interface PageSlugs {
		pages: Strapi.V4Wrapper<Fragments.PageSlugs>;
	}

	export interface PageBySlug extends Base {
		page: Strapi.V4Wrapper<Fragments.Page>;
	}

	export interface Base {
		global: Strapi.V4Wrapper<Fragments.Global>;
	}
}
