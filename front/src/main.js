import { createApp } from 'vue';
import App from './App.vue';
import BaseLayout from './components/BaseLayout.vue';
import router from './router';
import axios from 'axios'

// Configuration globale d'Axios
axios.defaults.baseURL = 'http://localhost:5000'; // URL de votre backend
axios.defaults.withCredentials = true; // Permet d'envoyer des cookies avec les requêtes

// Créez l'application et enregistrez-la dans une variable
const app = createApp(App);

// Utilisez le router
app.use(router);

app.config.globalProperties.$axios = axios // Ajouter Axios à l'instance globale de Vue

// Enregistrez BaseLayout comme composant global
app.component('BaseLayout', BaseLayout);

// Montez l'application
app.mount('#app');

