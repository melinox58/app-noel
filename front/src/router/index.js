//config du router
import { createRouter, createWebHistory } from 'vue-router';
import AccueilComponent from '../components/AccueilComponent.vue';
import CalendarComponent from '../components/CalendarComponent.vue';
import UserComponent from '../components/UserComponent.vue';



const routes = [
    { path: '/', component: AccueilComponent },
    { path: '/calendar', component: CalendarComponent },
    { path: '/user', component: UserComponent }
];


const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;