import Anchor from 'components/Anchor/Anchor';
import Heading from 'components/Heading/Heading';
import Image from 'components/Image/Image';
import List from 'components/List/List';
import ListItem from 'components/ListItem/ListItem';
import Paragraph from 'components/Paragraph/Paragraph';
import Quote from 'components/Quote/Quote';
import Row from 'components/Row/Row';

const Home = ({}) => {
	return (
		<>
			<Row>
				<Image
					src={'https://landsort-birds.se/images/Fyren.jpg'}
					alt="Fyren på Landsort"
					width={3838}
					height={2158}
					credit="Thomas Granbohm, YomTube ©"
				/>
			</Row>
			<Row>
				<Paragraph>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
					Earum ipsam architecto, obcaecati id accusantium, ea
					voluptatum consectetur facere voluptatibus reiciendis eum
					quae animi adipisci molestias? Numquam minima pariatur quasi
					esse?
				</Paragraph>
			</Row>
			<Row>
				<Heading type="h2">Unordered list</Heading>
				<List type="ul">
					<ListItem>Item</ListItem>
					<ListItem>Item</ListItem>
					<ListItem>Item</ListItem>
					<ListItem>Item</ListItem>
				</List>
			</Row>
			<Row>
				<Paragraph>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
					Earum ipsam architecto, obcaecati id accusantium, ea
					voluptatum consectetur facere voluptatibus reiciendis eum
					quae animi adipisci molestias? Numquam minima pariatur quasi
					esse?
				</Paragraph>
			</Row>
			<Row>
				<Heading type="h2">Ordered list</Heading>
				<List type="ol">
					<ListItem>Item</ListItem>
					<ListItem>Item</ListItem>
					<ListItem>Item</ListItem>
					<ListItem>Item</ListItem>
				</List>
			</Row>
			<Row>
				<Paragraph>
					<i>Lorem ipsum dolor</i> sit amet, consectetur adipisicing
					elit. Earum ipsam architecto, obcaecati id accusantium, ea
					voluptatum <b>consectetur facere voluptatibus</b> reiciendis
					eum quae animi adipisci molestias? Numquam minima pariatur
					quasi esse?
				</Paragraph>
			</Row>
			<Row>
				<Quote author="Thomas Granbohm, 2022">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit.
					Illum accusamus dolorum aliquid obcaecati facere asperiores
					necessitatibus accusantium perferendis officia.{' '}
					<i>Quas liberoad</i> velit aspernatur nostrum totam maiores,
					amet vitae doloremque!
				</Quote>
			</Row>

			<Row>
				<Paragraph>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
					Earum ipsam architecto, obcaecati id accusantium, ea
					voluptatum consectetur facere voluptatibus reiciendis eum
					quae animi adipisci molestias? Numquam minima pariatur quasi
					esse?
				</Paragraph>
			</Row>
			<Row>
				<Quote
					author={
						<Anchor href="https://granbohm.dev">
							Quote with a link
						</Anchor>
					}
				>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit.
					Illum accusamus dolorum aliquid obcaecati facere asperiores
					necessitatibus accusantium perferendis officia. Quas libero
					ad velit aspernatur nostrum totam maiores, amet vitae
					doloremque!
				</Quote>
			</Row>
			<Row>
				<Paragraph>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
					Earum ipsam architecto, obcaecati id accusantium, ea
					voluptatum consectetur facere voluptatibus reiciendis eum
					quae animi adipisci molestias? Numquam minima pariatur quasi
					esse?
				</Paragraph>
			</Row>
		</>
	);
};

export default Home;
