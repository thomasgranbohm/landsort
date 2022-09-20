import { DefaultSeo } from 'next-seo';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { OverlayProvider, SSRProvider } from 'react-aria';

import 'styles/globals.scss';
import { normalize } from 'utils/functions';
import { getStrapiMedia, parseOGImages } from 'utils/media';
import { Fragments, Queries } from 'utils/types';

function MyApp({ Component, pageProps }: AppProps) {
	const { global } = pageProps as Queries.Base;

	if (!global) throw new Error('Did not get global');

	const { title, title_prefix, favicon, logo } =
		normalize<Fragments.Global>(global);

	return (
		<SSRProvider>
			<OverlayProvider>
				<Head>
					{favicon && (
						<link
							rel="shortcut icon"
							href={getStrapiMedia(
								normalize<Fragments.Media>(favicon).url
							)}
						/>
					)}
					{/* IE11 to Edge redirect. See https://stackoverflow.com/questions/63404573/how-to-redirect-from-internet-explorer-to-microsoft-edge-seamlessly */}
					<script
						dangerouslySetInnerHTML={{
							__html: "if(/MSIE d|Trident.*rv:/.test(navigator.userAgent)) { window.location = 'microsoft-edge:' + window.location; setTimeout(function() { window.location = 'https://go.microsoft.com/fwlink/?linkid=2135547'; }, 1);}",
						}}
					/>
					<link
						href="https://fonts.googleapis.com/icon?family=Material+Icons"
						rel="stylesheet"
					/>
				</Head>
				<DefaultSeo
					defaultTitle={title}
					titleTemplate={title_prefix}
					openGraph={{
						images: parseOGImages(normalize<Fragments.Media>(logo)),
					}}
				/>
				<Component {...pageProps} />
			</OverlayProvider>
		</SSRProvider>
	);
}

export default MyApp;
