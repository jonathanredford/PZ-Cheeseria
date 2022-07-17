import { SWRConfig } from 'swr';
import DefaultLayout from '../components/Layout';
import fetcher from '../lib/fetcher';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
	const Layout = Component.Layout || DefaultLayout;
	const swrOptions = {
		fetcher: fetcher,
		revalidateIfStale: false,
		revalidateOnFocus: false,
		shouldRetryOnError: false,
	};
	return (
		<SWRConfig value={swrOptions}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</SWRConfig>
	);
}

export default MyApp;
