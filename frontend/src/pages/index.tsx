import Carousel from '../components/Carousel/Carousel';
import NavBar from '../components/Navigation/Navigation';
import { fetchAPI, getGlobalData, getHomePage } from '../utils/api';

const Home = ({ global, home }) => {
	return (
		<main>
			<NavBar {...global} />
			<Carousel slides={home.news_items} />
		</main>
	);
};

export const getServerSideProps = async () => {
	const home = await getHomePage();
	const global = await getGlobalData();

	return {
		props: {
			home,
			global,
		},
	};
};

export default Home;
