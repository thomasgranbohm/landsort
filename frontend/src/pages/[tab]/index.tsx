const Tab = () => <h1>How did you get here?</h1>;

export const getServerSideProps = async () => ({
	redirect: {
		destination: '/',
		permanent: false,
	},
});

export default Tab;
