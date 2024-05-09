import { createApp } from 'vue'
import App from './app.vue'
import { createRouter, createWebHistory} from "vue-router";
import 'normalize.css/normalize.css';
import store from './store/store'

const routes =  [
    { name: "Home", path: '/', base: '/', component: () => import('@/views/HomeView') },
    { name: "Menu", path: '/menu', component: () => import('@/views/MenuView') },
    { name: "Blog", path: '/blog', component: () => import('@/views/BlogView')  },
    { name: "Pricing", path: '/pricing', component: () => import('@/views/PricingView') },
    { name: "Contacts", path: '/contacts', component: () => import('@/views/ContactsView') },
    { name: "Sign", path: '/sign', component: () => import('@/views/SignView') },
    { name: "Login", path: '/login', component: () => import('@/views/LoginView') },
]

const router = createRouter({
    history: createWebHistory(),
    routes,

})

createApp(App)
    .use(store)
    .use(router)
    .mount('#app')
