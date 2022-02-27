'use strict'

import Swiper, { Navigation, Pagination, Scrollbar } from 'swiper'
import 'swiper/css/bundle'
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import './styles.scss'

// eslint-disable-next-line no-unused-vars
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
})
