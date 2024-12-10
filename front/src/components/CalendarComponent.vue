<script setup>
import { ref } from 'vue'; //ref est une fonction de la Composition API
import axios from 'axios';

const newCalendar = ref({
  title: '',
  user_id: 1, //Valeur par defaut pour test. inclure ici la logique pour lier l'utilisateur
  theme: ''
});
  const createCalendar = async() => {
      try {
        await axios.post('http://localhost:5000/api/calendar', newCalendar.value);
        newCalendar.value = { title: '', user_id: '', theme: '' };
        alert('Le calendrier a été crée avec succès!');
      } catch (error) {
        alert('Echec: ' + error.message);
      }
};

</script>

<template>
  <div>
    <h2>Crée ton Calendrier de Noel personnalisé</h2>
    <form @submit.prevent="createCalendar">
      <input v-model="newCalendar.title" placeholder="Titre" required />
      <input type="hidden" v-model="newCalendar.user_id" placeholder="User ID"  />
      <input v-model="newCalendar.theme" placeholder="Theme" required />
      <button type="submit">Valider</button>
    </form>
  </div>
</template>

<style scoped>

</style>