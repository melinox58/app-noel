//config du router
import { createRouter, createWebHistory } from 'vue-router';
import AccueilComponent from '../components/AccueilComponent.vue';
import CalendarComponent from '../components/CalendarComponent.vue';
import SurpriseComponent from '../components/SurpriseComponent.vue';
import ShareComponent from '../components/ShareComponent.vue';
import RegisterComponent from '../components/RegisterComponent.vue';
import LoginComponent from '@/components/LoginComponent.vue';
import DashAdminComponent from '@/components/admin/DashAdminComponent.vue';
import AvisComponent from '@/components/AvisComponent.vue';
import DashUserComponent from '@/components/DashUserComponent.vue';
import MentionsComponent from '@/components/MentionsComponent.vue';
import ConfComponent from '@/components/ConfComponent.vue';
import ConditionComponent from '@/components/ConditionComponent.vue';
//Admin
import UserManagement from '../components/admin/UserMAnagement.vue';
import CalendarManagement from '../components/admin/CalendarManagement.vue';
import SurpriseManagement from '../components/admin/SurpriseManagement.vue';
import ShareCalendar from '../components/admin/ShareManagement.vue';



const routes = [
    { path: '/', component: AccueilComponent },
    { path: '/calendar', component: CalendarComponent },
    { path: '/register', component: RegisterComponent },
    { path: '/surprise', component: SurpriseComponent },
    { path: '/share', component: ShareComponent },
    { path: '/login', component: LoginComponent },
    { path: '/avis', component: AvisComponent},
    { path: '/dashUser', component: DashUserComponent},
    { path: '/mentions', component: MentionsComponent},
    { path: '/confidential', component: ConfComponent},
    { path: '/condition', component: ConditionComponent},

    {
        path: '/admin',
        component: DashAdminComponent,
        meta: { layout: 'admin' }, // Utilise BaseLayoutAdmin pour les pages admin
        children: [
          { path: 'users', component: UserManagement, meta: { layout: 'admin' } },
          { path: 'calendars', component: CalendarManagement, meta: { layout: 'admin' } },
          { path: 'surprises', component: SurpriseManagement, meta: { layout: 'admin' } },
          { path: 'share', component: ShareCalendar, meta: { layout: 'admin' } },
        ],
      },
        
];


const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;