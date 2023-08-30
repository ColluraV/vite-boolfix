import { createApp } from 'vue'
import './styles/generals.scss'
import App from './App.vue'

createApp(App).mount('#app')

const scrollSeries = document.querySelector("#seriesScroll");

scrollSeries.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollSeries.scrollLeft += evt.deltaY;
});

const scrollMovies = document.querySelector("#moviesScroll");

scrollMovies.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollMovies.scrollLeft += evt.deltaY;
});

/* ////////////////////////////////////////////////////////////////////////API Key: 0e6e1204e5ce59257a879d34cc0f9cb7//////////////////////////////////////////////////////////////////////// */

