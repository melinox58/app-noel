<script setup>
import axios from 'axios';
import { useRouter } from 'vue-router';

const router = useRouter();

const logoutUser = async () => {
  try {
    await axios.post('http://localhost:5000/api/users/logout');
    localStorage.removeItem('user'); // Supprimez les données de l'utilisateur du localStorage
    alert('Déconnexion réussie!');
    router.push('/'); // Redirigez vers la page d'accueil
  } catch (error) {
    alert('Erreur lors de la déconnexion: ' + error.message);
  }
};
</script>

<template>
  <div>
    <h2>Se déconnecter</h2>
    <button @click="logoutUser">Se déconnecter</button>
  </div>
</template>

<style scoped>

</style>