import { createApp } from 'vue';
import App from './App.vue';
import BaseLayout from './components/BaseLayout.vue'; // Chemin vers votre composant

const app = createApp(App);

// Enregistrer BaseLayout comme composant global
app.component('BaseLayout', BaseLayout);

app.mount('#app');
