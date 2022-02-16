import Swiper, { Navigation, Pagination, Scrollbar } from 'swiper';
import 'swiper/css/bundle';
import './color.css'

const swiper = new Swiper('.swiper', {
  modules: [ Navigation, Pagination, Scrollbar ],
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination"
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: true
  },
});