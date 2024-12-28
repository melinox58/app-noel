import { createApp } from 'vue';
import App from './App.vue';
import BaseLayout from './components/BaseLayout.vue';
import router from './router';
import axios from 'axios';

// Configuration globale d'Axios
const apiUrl = process.env.VUE_APP_API_URL || 'https://osez-noel-3f432aeb3b00.herokuapp.com'; // URL de l'API par défaut
axios.defaults.baseURL = '/api'; // URL de votre backend
// Créez l'application et enregistrez-la dans une variable
const app = createApp(App);

// Utilisez le router
app.use(router);

app.config.globalProperties.$axios = axios // Ajouter Axios à l'instance globale de Vue

// Enregistrez BaseLayout comme composant global
app.component('BaseLayout', BaseLayout);

// Montez l'application
app.mount('#app');

