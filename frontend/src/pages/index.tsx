import NavBar from '../components/Navigation/Navigation';
import { fetchAPI, getGlobalData } from '../utils/api';

const Home = ({ tabs }) => {
	return (
		<div>
			<NavBar tabs={tabs} />
			<h1>Hello, World!</h1>
		</div>
	);
};

export const getServerSideProps = async () => {
	const global = await getGlobalData();

	return {
		props: {
			...global,
		},
	};
};

export default Home;
