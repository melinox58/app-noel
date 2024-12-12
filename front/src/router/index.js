//config du router
import { createRouter, createWebHistory } from 'vue-router';
import AccueilComponent from '../components/AccueilComponent.vue';
import CalendarComponent from '../components/CalendarComponent.vue';
import RegisterComponent from '../components/RegisterComponent.vue';
import SurpriseComponent from '../components/SurpriseComponent.vue';
import ShareComponent from '../components/ShareComponent.vue';



const routes = [
    { path: '/', component: AccueilComponent },
    { path: '/calendar', component: CalendarComponent },
    { path: '/register', component: RegisterComponent },
    { path: '/surprise', component: SurpriseComponent },
    { path: '/share', component: ShareComponent }
];


const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;