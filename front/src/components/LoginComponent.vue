<template>
  <div>
    <h2>Se connecter</h2>
    <form @submit.prevent="loginUser">
      <input v-model="user.email" placeholder="Email" required />
      <input v-model="user.password" type="password" placeholder="Mot de passe" required />
      <button type="submit">Se connecter</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import router from "@/router";

const user = ref({
  email: '',
  password: ''
});

const loginUser = async () => {
  try {
    const response = await axios.post('http://localhost:5000/api/users/login', user.value);
    const userData = response.data;
    localStorage.setItem('user', JSON.stringify(userData)); // Stockez les données de l'utilisateur dans le localStorage
    alert(`Connexion réussie! Vous êtes connecté en tant que ${userData.firstname} ${userData.name}`);
    await router.push('/calendar'); // Redirigez vers la page calendrier
  }
  catch (error) {
    alert('Erreur lors de la connexion: ' + error.message);
  }
};
</script>



<style scoped>

</style>