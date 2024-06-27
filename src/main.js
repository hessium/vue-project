import { createApp } from 'vue'
import App from './app.vue'
import { createRouter, createWebHistory} from "vue-router";
import 'normalize.css/normalize.css';
import store from './store/store';
import VueSplide from '@splidejs/vue-splide';

const routes =  [
    { name: "Home", path: '/', base: '/', component: () => import('@/views/HomeView') },
    { name: "Menu", path: '/menu', component: () => import('@/views/MenuView') },
    { name: "404", path: '/:pathMatch(.*)*', component: () => import('@/views/404')}
]

const router = createRouter({
    history: createWebHistory(),
    routes,

})

createApp(App)
    .use(store)
    .use(router, VueSplide)
    .mount('#app')