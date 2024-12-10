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
                  <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Accueil</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/">Calendriers</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Connexion/Inscription</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <main>
        <!-- <slot /> -->
      </main>

      <footer>
        <nav>
          <ul>
            <li><a href="/">Mentions légales</a></li>
            <li><a href="/about">Politique de confidentialité</a></li>
            <li><a href="/about">Conditions d’utilisation</a></li>
          </ul>
        </nav>
        <p>&copy; 2024 Mon Site</p>
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
  /* background-position: 0; */
  width: 100%;
  height: 100%;
  position: fixed; /* Changement pour s'assurer que l'image de fond reste fixe */
  z-index: -1; /* L'image de fond ne doit pas recouvrir les autres éléments */
}

.content-container {
  position: relative;
  z-index: 1; /* Pour garantir que le contenu est au-dessus du fond */
}

img {
  width: 25%;
}

header {
  display: flex;
  color: white;
  opacity: 80%;
  padding: 1rem;
  position: relative;
  z-index: 1;
}

nav {
  display: flex;
  flex-direction: row;
  font-size: 0.8rem;
}

.navbar-nav .nav-link.active{
  color: green;
}








footer {
  text-align: center;
  margin-top: 2rem;
  position: relative;
  z-index: 1;
}
</style>
