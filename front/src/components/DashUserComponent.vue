<template>

    <h3 v-if="user">Bienvenue {{ user.firstname }} {{ user.name }}</h3>
    <a class="btn" href="/calendar">Nouveau calendrier</a>
    <h2>Historique de vos calendriers</h2>

    <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div 
          v-for="(image, index) in images" 
          :key="index" 
          :class="['carousel-item', { active: index === 0 }]">
          <img :src="image.src" :alt="image.alt" class="d-block w-50" />
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>

    <h2>Vos informations :</h2>
    
    <ul v-if="user">
        <li><strong>Nom :</strong> {{ user.name }}</li>
        <li><strong>Prénom :</strong> {{ user.firstname }}</li>
        <li><strong>Email :</strong> {{ user.email }}</li>
    </ul>

    

</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const user = ref(null);
const router = useRouter();

// Fonction pour récupérer les infos utilisateur depuis le localStorage
const fetchUserFromLocalStorage = () => {
  const storedUser = localStorage.getItem('user');
  if (storedUser) {
    user.value = JSON.parse(storedUser);
  } else {
    alert('Vous devez être connecté pour accéder à cette page.');
    router.push('/login'); // Redirige vers la page de connexion si non connecté
  }
};

const images = [
  { src: require('@/assets/img/background/3082604.jpg'), alt: 'Image 1' },
  { src: require('@/assets/img/background/6205121.jpg'), alt: 'Image 2' },
  { src: require('@/assets/img/background/7962235.jpg'), alt: 'Tête de cert déguisé en arbre de Noël' },
];

// Appel de la fonction au montage du composant
onMounted(() => {
  fetchUserFromLocalStorage();
});

</script>

<style scoped>

h3{
  color: blue;
  font-size: 1rem;
  margin-bottom: 2%;
  margin-top: 5%;
}

h2{
  font-size: 0.8rem;
}

.btn{
  display: flex;
  margin-top: 4%;
  margin-bottom: 5%;
  width: 30vw;
  background-image: url('@/assets/img/background/freepik__candid-image-photography-natural-textures-highly-r__29953.jpeg');
  background-size: cover;
  border-radius: 20px;
  height: 5%;
  justify-content: center;
  align-items: center;
  background-position: center;
  text-decoration: none;
  font-size: 0.6rem;
  color:white;
  text-shadow: 
    1px 1px 0 black, 
    -1px 1px 0 black, 
    1px -1px 0 black, 
    -1px -1px 0 black; /* Ombres pour chaque direction */
}

.carousel {
  position:relative;
  margin-top: 3%;
  margin-bottom: 3%;
}


@media only screen and (min-width: 768px){

    h3{
    font-size: 1.5rem;
    margin-bottom: 2%;
    }

    h2 {
    font-size:1.4rem;
    }

    .carousel-item{
        width: 30vw;
        padding: 0;
        margin-bottom: -1%;
        margin-top: 4%;
    }

    .btn{
        width: 27vw;
        height: 9%;
        margin: 0 0 2% 0;
        font-size: 1.4rem;
    }
}

</style>