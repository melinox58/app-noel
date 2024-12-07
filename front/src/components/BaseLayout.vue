<template>
  <div class="imgFond">
    <img src="/front/src/assets/img/nice-christmas-background-white-background-with-copy-space.jpg" alt="Fond de Noël">
  </div>
    <div>
      <header>
        <img src="/front/src/assets/logo.png" alt="logo">
        <nav>
          <ul>
            <li><a href="/">Accueil</a></li>
            <li><a href="/about">Calendriers</a></li>
            <li><a href="/about">Connexion/Inscription</a></li>
          </ul>
        </nav>
      </header>
  
      <main>
        <!-- Contenu spécifique à chaque page -->
        <slot />
      </main>
  
      <footer>
        <nav>
          <ul>
            <li><a href="/">Mentions légales</a></li>
            <li><a href="/about">Politique de confidentialité </a></li>
            <li><a href="/about">Conditions d’utilisation</a></li>
          </ul>
        </nav>
        <p>&copy; 2024 Mon Site</p>
      </footer>
    </div>
  </template>
  
  <script>
// import imageUrl from '@/assets/img/nice-christmas-background-white-background-with-copy-space.jpg';

  export default {
    name: "BaseLayout",
  //   data() {
  //   return {
  //     imageUrl
  //   };
  // }
};



  </script>
  
  <style scoped>
  *{
    list-style-type: none;
    text-decoration: none;
    color: darkgreen;
    font-family: Pacifico;
  }

   .imgFond {
    background-image: url('../assets/img/nice-christmas-background-white-background-with-copy-space.jpg');
    background-size: cover;
    width: 100vw;
    height: 100vh;
    position: absolute;
    z-index: 0;
  }
  header {
    color: white;
    padding: 1rem;
    position: relative;
    z-index: 1;
  }
  
  footer {
    text-align: center;
    margin-top: 2rem;
    position: relative;
    z-index: 1;
  }
  </style>
  