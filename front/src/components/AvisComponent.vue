<template>
    <div>
      <h1>Ajouter un Avis</h1>
      <form @submit.prevent="createAvis">
        <div>
          <label for="calendar_id">Calendrier :</label>
          <select v-model="nouvelAvis.calendar_id" id="calendar_id" required>
            <option value="" disabled>Choisissez un calendrier</option>
            <option v-for="cal in calendars" :key="cal._id" :value="cal._id">
              {{ cal.name }}
            </option>
          </select>
        </div>
        <div>
          <label for="comment">Commentaire :</label>
          <textarea v-model="nouvelAvis.comment" id="comment" required></textarea>
        </div>
        <div>
          <label for="note">Note :</label>
          <input v-model="nouvelAvis.note" id="note" type="number" min="0" max="5" required />
        </div>
        <button type="submit">Valider</button>
      </form>
  
      <h2>Liste des Avis</h2>
      <ul>
        <li v-for="avis in listeAvis" :key="avis._id">
          <strong>Calendrier :</strong> {{ avis.calendar_id }} - 
          <strong>Note :</strong> {{ avis.note }} -
          <em>{{ avis.comment }}</em>
          <br />
          <small>Créé le {{ new Date(avis.created_at).toLocaleString() }}</small>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import axios from 'axios';
  
  // État réactif
  const listeAvis = ref([]);
  const calendars = ref([]);
  const nouvelAvis = ref({
    calendar_id: '',
    comment: '',
    note: '',
  });
  
  // Fonction pour récupérer les avis existants
  const fetchAvis = async () => {
    try {
      const response = await axios.get('/api/avis');
      listeAvis.value = response.data;
    } catch (error) {
      console.error('Erreur lors du chargement des avis :', error);
    }
  };
  
  // Fonction pour récupérer les calendriers de l'utilisateur connecté
  const fetchCalendars = async () => {
    try {
      const response = await axios.get('/api/calendars');
      calendars.value = response.data;
    } catch (error) {
      console.error('Erreur lors du chargement des calendriers :', error);
    }
  };
  
  // Fonction pour créer un nouvel avis
  const createAvis = async () => {
    try {
      const response = await axios.post('/api/avis', nouvelAvis.value);
      listeAvis.value.push(response.data); // Ajouter à la liste locale
      nouvelAvis.value = { calendar_id: '', comment: '', note: '' }; // Réinitialiser le formulaire
    } catch (error) {
      console.error('Erreur lors de la création de l\'avis :', error);
    }
  };
  
  // Charger les données lors du montage du composant
  onMounted(() => {
    fetchAvis();
    fetchCalendars();
  });
  </script>
  