<template>
  <div class="imgFond">
    <div class="content-container">
      <header>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
            <img :src="logo" alt="Logo">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <router-link class="nav-link" to="/">Accueil</router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/calendar">Calendriers</router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/register">Connexion</router-link>
                </li>
                <li class="nav-item" v-if="!user">
                  <router-link class="nav-link" to="/register">Inscription</router-link>
                </li>
                <li class="nav-item" v-if="user">
                  <button class="nav-link btn btn-link" @click="logoutUser">Déconnexion</button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <main>
        <canvas id="snowCanvas"></canvas>
        
        <!-- <slot /> -->
        <router-view></router-view><!-- <slot /> -->
      </main>

        <footer>
          <nav>
            <ul>
              <li><a href="/mentions">Mentions légales</a></li>
              <li><a href="/confidential">Politique de confidentialité</a></li>
              <li><a href="/condition">Conditions d’utilisation</a></li>
            </ul>
          </nav>
        </footer>
        <p>&copy; 2024 Martinon Mélanie && Viennot Nicolas</p>

      </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

import logo from '@/assets/img/logo2.png';

const router = useRouter();
const user = ref(null);


// Déconnexion de l'utilisateur
const logoutUser = async () => {
  try {
    await axios.post('http://localhost:5000/api/users/logout');
    localStorage.removeItem('user');
    alert('Déconnexion réussie!');
    user.value = null;
    router.push('/');
  } catch (error) {
    alert('Erreur lors de la déconnexion: ' + error.message);
  }
};

onMounted(() => {
  // Chargement de l'utilisateur depuis le localStorage
  const storedUser = localStorage.getItem('user');
  if (storedUser) {
    user.value = JSON.parse(storedUser);
  }

  // Initialisation de l'animation de neige
  const canvas = document.getElementById('snowCanvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const snowflakes = [];
    const maxSnowflakes = 100;

    const createSnowflake = () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 3 + 1,
      speed: Math.random() * 1 + 0.5,
      opacity: Math.random() * 0.5 + 0.3,
    });

    // Ajout des flocons
    for (let i = 0; i < maxSnowflakes; i++) {
      snowflakes.push(createSnowflake());
    }

    // Animation des flocons
    const animateSnow = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      snowflakes.forEach((flake) => {
        ctx.beginPath();
        ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${flake.opacity})`;
        ctx.fill();
        flake.y += flake.speed;

        // Réinitialisation des flocons sortis de l'écran
        if (flake.y > canvas.height) {
          flake.x = Math.random() * canvas.width;
          flake.y = -flake.radius;
        }
      });

      requestAnimationFrame(animateSnow);
    };

    animateSnow();

    // Mise à jour du canvas lors du redimensionnement
    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });
  }
});
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');

body {
  font-family: 'Pacifico', sans-serif;
  display: flex;
  flex-direction: column;
}

* {
  list-style-type: none;
  text-decoration: none;
  color: darkgreen;
  font-family: 'Pacifico', sans-serif;
}


.imgFond {
  background-image: url('@/assets/img/nice-christmas-background-white-background-with-copy-space.jpg');
  background-size: cover;
  opacity: 90%;
  width: 100%;
  height: 100%;
  position: fixed; /* L'image de fond reste fixe */
}

.content-container {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.footer p{
  margin-left: 18%;
}

img {
  width: 25%;
}

header {
  display: flex;
  padding: 1rem;
  position: relative;
  z-index: 1;
}

nav {
  display: flex;
  flex-direction: row;
  font-size: 0.8rem;
  height: 10vh;
  align-content: center;
}

.nav-link{
  color: green;
}

.navbar-nav {
  gap: 25%;
  margin-left: -20%;
}

.collapse {
  position: absolute;
  top: 100%; /* Place le menu en dessous de la navigation */
  right: 0; /* Aligne le menu à droite */
  width: auto; /* Ajuste la largeur selon le contenu */
  background-color: white; /* Fond du menu */
  border-top: 1px solid #ddd; /* Ligne de séparation (optionnelle) */
  padding: 2%;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); /* Effet visuel optionnel */
}

a{
  text-decoration: none;
  color: green;
}

main {
  padding: 2%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 69vh;
  margin: 0 4% 2% 4%;
  background-color: rgba(255, 255, 255, 0.817);
}

footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  padding-top: 2%;
}

footer nav{
  display: flex;
}

footer ul{
  padding-top: 2%;
  font-size: 0.6rem;
}

p {
  font-size: 0.4rem;
  margin-top: 2%;
}

#snowCanvas {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none; /* Empêche d'interagir avec le canvas */
    z-index: 1; /* Assure que le canvas est derrière votre contenu */
}

@media only screen and (min-width: 768px) {

img {
  margin-top: 5%;
  width: 13%;
  margin-left: 2%;
}

.bg-body-tertiary {
  background-color: transparent!important;
}

header {
    z-index: 10; /* Plus élevé que le fond */
    position: relative; /* Nécessaire pour z-index */
}

header nav {
  font-size: 1.8rem;
  margin-left: 3%;
  margin-top: -1%;
}

.nav-link {
    font-size: 1.5rem;
    margin-left: 0; /* Pas de marge latérale excessive */
    width: auto; /* Ajuste automatiquement la largeur */
}

.navbar-nav {
    padding-left: 0;
    display: flex; /* Assure un alignement horizontal */
    justify-content: flex-start; /* Aligne les liens à gauche */
}

.imgFond[data-v-49eec20b] {
  width: 109%;
  height: 100%;
  position: fixed; /* L'image de fond reste fixe */
  background-position-x: -126px;
  background-repeat: no-repeat;
}

.collapse{

    position: static;
    background-color: transparent;
    box-shadow: none;
    padding: 0;
    justify-content: center;
}

.carousel-item[data-v-6b2ca94e] {
    margin-top: 4%;
}

a{
  text-decoration: none;
  color: green;
  flex: 1;
  width: 15vw;
  margin-left: 30%;
}

.bg-body-tertiary {
  background-color:transparent;
}

main {
  background-color: transparent;
  margin-left: 12%;
}

footer li {
  font-size: 1.2rem;
  width: 20vw;
  text-align: center;
}

footer {
  background-color: transparent;
  display: flex;
  flex-direction: column;
}

footer nav {
  display: flex;
  margin-left: 10%;
}

footer ul{
  display: flex;
  margin-left: -5%;
}

p {
  font-size: 0.8rem;
  margin-top: -2%;
  margin-left: 12%;
}

}
  

</style>
