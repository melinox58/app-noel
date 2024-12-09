//config du router
import { createRouter, createWebHistory } from 'vue-router';
import CalendarComponent from '../components/CalendarComponent.vue';
import UserComponent from '../components/UserComponent.vue';

const routes = [
    { path: '/', component: CalendarComponent },
    { path: '/users', component: UserComponent }
];


const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;