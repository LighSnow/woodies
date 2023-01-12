import Swiper, { Navigation, Pagination } from "swiper";

import "swiper/swiper-bundle.min.css";
import "./../styles/index.scss";

const testimonailsSlider = new Swiper(".js-testimonials-slider", {
    modules: [Navigation, Pagination],
    speed: 500,
    spaceBetween: 30,
    navigation: {
        nextEl: ".js-testimonials-slider-next",
        prevEl: ".js-testimonials-slider-prev",
    },
    pagination: {
        el: ".js-testimonials-slider-pagination",
        clickable: true,
    },
});
