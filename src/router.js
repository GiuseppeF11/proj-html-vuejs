// Configurazione di Vue Router per navigare fra le pagine

import { createRouter , createWebHistory } from "vue-router";

import Home from './pages/Home.vue';
import AboutUs from './pages/AboutUs.vue';
import ContactUs from './pages/ContactUs.vue';
import Error404 from './pages/Error404.vue';

const router = createRouter ({
    history: createWebHistory(),
        routes: [
            {
                path: '/',
                name: 'home',
                component: Home
            },
            {
                path: '/aboutus',
                name: 'aboutus',
                component: AboutUs
            },
            {
                path: '/contactus',
                name: 'contactus',
                component: ContactUs
            },
            {
                path: '/error404',
                name: 'error404',
                component: Error404
            },
        ]
});

export { router };