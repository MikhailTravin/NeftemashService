/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, { Navigation, Autoplay } from 'swiper';
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';

if (document.querySelector('.main-home__slider')) { // Указываем скласс нужного слайдера
	// Создаем слайдер
	new Swiper('.main-home__slider', { // Указываем скласс нужного слайдера
		// Подключаем модули слайдера
		// для конкретного случая
		modules: [Autoplay],
		observer: true,
		observeParents: true,
		slidesPerView: 1,
		spaceBetween: 0,
		autoHeight: false,
		speed: 800,
		loop: true,
		preloadImages: true,
		lazy: true,

		// Эффекты
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
	});
}

if (document.querySelector('.main-clients__slider')) { // Указываем скласс нужного слайдера
	// Создаем слайдер
	new Swiper('.main-clients__slider', { // Указываем скласс нужного слайдера
		observer: true,
		observeParents: true,
		slidesPerView: "auto",
		spaceBetween: 20,
		autoHeight: false,
		speed: 800,
		loop: true,
		grabCursor: true,
		preloadImages: true,
		lazy: true,
		// Брейкпоинты
		breakpoints: {
			0: {
				spaceBetween: 5,
			},
			767.98: {
				spaceBetween: 10,
			},
		},
	});
}

function aboutSlider() {
	if (document.querySelector('.about-documents__slider')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.about-documents__slider', { // Указываем скласс нужного слайдера
			modules: [Navigation],
			observer: true,
			observeParents: true,
			slidesPerView: 'auto',
			spaceBetween: 20,
			speed: 800,
			//loop: true,
			//lazy: true,
			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.about-documents__arrow-prev',
				nextEl: '.about-documents__arrow-next',
			},
			// Брейкпоинты
			breakpoints: {
				0: {
					spaceBetween: 10,
				},
				767.98: {
					spaceBetween: 20,
				},
			},
		});
	}
}
aboutSlider();

window.addEventListener("resize", function (e) {
	aboutSlider();
});