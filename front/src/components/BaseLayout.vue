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
        <!-- <slot /> -->
        <router-view></router-view><!-- <slot /> -->
      </main>

        <footer>
          <nav>
            <ul>
              <li><a href="/">Mentions légales</a></li>
              <li><a href="/about">Politique de confidentialité</a></li>
              <li><a href="/about">Conditions d’utilisation</a></li>
            </ul>
          </nav>
        </footer>
        <p>&copy; 2024 Martinon Mélanie && Viennot Nicolas</p>

      </div>
    </div>
</template>

<script setup>
import logo from '@/assets/img/logo2.png';
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

// export default {
//   name: "BaseLayout",
//   data() {
//     return {
//       logo,
//     };
//   },
// };



const router = useRouter();
const user = ref(null);

const logoutUser = async () => {
  try {
    await axios.post('http://localhost:5000/api/users/logout');
    localStorage.removeItem('user'); // Supprimez les données de l'utilisateur du localStorage
    alert('Déconnexion réussie!');
    user.value = null; // Mettez à jour l'état local
    router.push('/'); // Redirigez vers la page d'accueil
  } catch (error) {
    alert('Erreur lors de la déconnexion: ' + error.message);
  }
};

onMounted(() => {
  const storedUser = localStorage.getItem('user');
  if (storedUser) {
    user.value = JSON.parse(storedUser);
  }
});


</script>

<style>
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
  opacity: 80%;
  width: 100%;
  height: 100%;
  position: fixed; /* L'image de fond reste fixe */
  z-index: -1; /* L'image de fond ne doit pas recouvrir les autres éléments */
}

.content-container {
  display: flex;
  flex-direction: column;
  flex: 1;
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

p {
  font-size: 0.4rem;
  margin-top: 2%;
}

@media only screen and (min-width: 768px) {

img {
  margin-top: 4%;
  width: 12%;
  margin-left: 11%;
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

.collapse{

    position: static;
    background-color: transparent;
    box-shadow: none;
    padding: 0;
    justify-content: center;
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
  margin-left: 25%;
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
}

p {
  font-size: 0.8rem;
  margin-top: -2%;
}

}
  

</style>
