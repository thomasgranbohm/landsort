import NavBar from '../components/NavBar/NavBar';
import { fetchAPI, getGlobalData } from '../utils/api';

const Home = ({ tabs }) => {
	return (
		<div>
			<h1>Hello, World!</h1>
			<NavBar tabs={tabs} />
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
