import { DefaultSeo } from 'next-seo';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import 'styles/globals.scss';
import { normalize } from 'utils/functions';
import { getStrapiMedia, parseOGImages } from 'utils/media';
import { Fragments, Queries } from 'utils/types';

function MyApp({ Component, pageProps }: AppProps) {
	const { global } = pageProps as Queries.Base;
	if (!global) throw new Error('Didnt get global');

	const { title, title_prefix, favicon, logo } =
		normalize<Fragments.Global>(global);

	return (
		<>
			<Head>
				{favicon && (
					<link
						rel="shortcut icon"
						href={getStrapiMedia(
							normalize<Fragments.Media>(favicon).url
						)}
					/>
				)}
				<DefaultSeo
					defaultTitle={title}
					titleTemplate={title_prefix}
					openGraph={{
						images: parseOGImages(normalize<Fragments.Media>(logo)),
					}}
				/>
			</Head>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
