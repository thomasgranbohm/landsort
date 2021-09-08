/* eslint-disable jsx-a11y/alt-text */
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Headshot } from '../../types';
import Image from '../Image/Image';
import classes from './Carousel.module.scss';
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper';
import { useRef } from 'react';

// install Swiper modules
SwiperCore.use([Autoplay, Navigation, Pagination]);

interface Slide {
	title: string;
	description?: string;
	image: Headshot;
}

type CarouselProps = {
	slides: Slide[];
};

const Carousel = ({ slides }: CarouselProps) => {
	const CustomSlide = ({ image, title, description }: Slide) => (
		<SwiperSlide className={classes['slide']}>
			<Image
				{...image}
				type="headshot"
				style="rounded"
				className={classes['background']}
			/>
			<h2 className={classes['title']}>{title}</h2>
			<p className={classes['description']}>{description}</p>
		</SwiperSlide>
	);

	const nextRef = useRef(null);
	const prevRef = useRef(null);

	return (
		<Swiper
			className={classes['container']}
			slidesPerView={1}
			spaceBetween={16}
			autoplay={{
				delay: 5000,
				disableOnInteraction: false,
			}}
			loop
			pagination={{
				clickable: true,
			}}
		>
			{slides.map(CustomSlide)}
		</Swiper>
	);
};

export default Carousel;
