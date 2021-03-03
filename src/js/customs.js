const feather = require('feather-icons')
import Swiper from 'swiper/swiper-bundle.min';

feather.replace()

new Swiper('.news-slider', {
	slidesPerView: 1,
	loop: true,
	autoplay: {
		delay: 4000
	},
	breakpoints: {
		576: {
			slidesPerView: 2,
			spaceBetween: 30
		},
		992: {
			slidesPerView: 3,
			spaceBetween: 30
		}
	}
});

new Swiper('.client-slider', {
	slidesPerView: 2,
	spaceBetween: 30,
	loop: true,
	autoplay: true,
	breakpoints: {
		768: {
			slidesPerView: 3
		},
		992: {
			slidesPerView: 4
		}
	}
});


