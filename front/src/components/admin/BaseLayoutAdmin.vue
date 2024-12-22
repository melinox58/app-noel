<template>
  <div class="content-container">
    <main>
        <canvas id="snowCanvas"></canvas>
        <!-- <slot /> -->
        <router-view></router-view><!-- <slot /> -->
    </main>
  </div>

  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  // import { useRouter } from 'vue-router';

  const user = ref(null);
  
  
  // Déconnexion de l'utilisateur
//   const logoutUser = async () => {
//     try {
//       await axios.post('http://localhost:5000/api/users/logout');
//       localStorage.removeItem('user');
//       alert('Déconnexion réussie!');
//       user.value = null;
//       router.push('/');
//     } catch (error) {
//       alert('Erreur lors de la déconnexion: ' + error.message);
//     }
//   };
  
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
      const maxSnowflakes = 300;
  
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

* {
  list-style-type: none;
  text-decoration: none;
  color: darkgreen;
  font-family: 'Pacifico', sans-serif;
}

body {
  font-family: 'Pacifico', sans-serif;
  display: flex;
  flex-direction: column;
}

.content-container {
  display: flex;
  flex-direction: column;
  flex: 1;
}

main {
  padding: 2%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 69vh;
  margin: 0 4% 2% 4%;
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

@media only screen and (min-width: 768px){
    main {
    background-color: transparent;
    margin-left: 12%;
  }
}
  
  </style>
  