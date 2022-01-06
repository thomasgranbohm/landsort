import 'styles/globals.scss';
import type { AppProps } from 'next/app';
import Layout from 'components/Layout/Layout';
import { DefaultSeo } from 'next-seo';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<DefaultSeo
				defaultTitle="Landsort Fågelstation"
				title="Landsort Fågelstation"
				titleTemplate="%s - Landsort Fågelstation"
			/>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	);
}

export default MyApp;
