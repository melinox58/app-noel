import { createApp } from 'vue';
import App from './App.vue';
import BaseLayout from './components/BaseLayout.vue';
import router from './router';

// Créez l'application et enregistrez-la dans une variable
const app = createApp(App);

// Utilisez le router
app.use(router);

// Enregistrez BaseLayout comme composant global
app.component('BaseLayout', BaseLayout);

// Montez l'application
app.mount('#app');
