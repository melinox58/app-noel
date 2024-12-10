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
                  <router-link class="nav-link" to="/user">Connexion/Inscription</router-link>
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
          <p>&copy; 2024 Martinon Mélanie && Viennot Nicolas</p>
        </footer>
      </div>
    </div>
</template>

<script>
import logo from '@/assets/img/logo2.png';

export default {
  name: "BaseLayout",
  data() {
    return {
      logo,
    };
  },
};
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
  width: 100%;
  height: 100%;
  position: fixed; /* L'image de fond reste fixe */
  z-index: -1; /* L'image de fond ne doit pas recouvrir les autres éléments */
}

.content-container {
  position: relative;
  z-index: 1;
  flex: 1; /* Permet au contenu principal de prendre l'espace disponible */
  display: flex;
  flex-direction: column;
}

img {
  width: 25%;
}

header {
  display: flex;
  /* opacity: 80%; */
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

a{
  text-decoration: none;
  color: green;
}

main {
  flex: 1; /* Permet à main de prendre l'espace disponible entre header et footer */
}

footer {
  display: flex;
  flex-direction: column;
  text-align: center;
  position: relative;
  z-index: 1;
  align-items: center;
  margin-top: 130%;
  background-color: white;
  height: 10vh;
}

footer p {
  font-size: 0.4rem;
}

@media only screen and (min-width: 768px) {
  img {
  width: 15%;
  margin-top: 4%;
  margin-left: 8%;
}

.bg-body-tertiary {
  background-color: transparent;
}

nav {
  font-size: 1.8rem;
  align-content: center;
  margin-left: 3%;
  width: 90vw;
}

.nav-link{
  font-size: 1.5rem;
}

.navbar-nav{
  padding-left: 3%;
}

a{
  text-decoration: none;
  color: green;
  flex: 1;
  width: 15vw;
}

.bg-body-tertiary {
  background-color:transparent;
}

footer ul {
  display: flex;
  gap: 2%;
  font-size: 1rem;
  width: 100vw;
  justify-content: center;
  text-align: center;
}

footer {
  margin-top: 40%;
  background-color: transparent;

}

footer p {
  font-size: 0.8rem;
}
}
  

</style>
