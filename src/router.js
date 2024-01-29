// Configurazione di Vue Router per navigare fra le pagine

import { createRouter , createWebHistory } from "vue-router";

import Home from './pages/Home.vue';
import AboutUs from './pages/AboutUs.vue';
import ContactUs from './pages/ContactUs.vue';

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
        ]
});

export { router };