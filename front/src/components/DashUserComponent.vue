<template>

    <h3 v-if="user">Bienvenue {{ user.firstname }} {{ user.name }}</h3>
    <a class="btn" href="/calendar">Nouveau calendrier</a>
    
  <section>
    <div class="left">
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
    </div>
    <div class="right">
      <h2>Vos informations :</h2>
      <form @submit.prevent="updateUser" class="form-container">
        <div class="form-group">
          <label for="name">Nom :</label>
          <input type="text" id="name" v-model="updatedUser.name" />
        </div>
        <div class="form-group">
          <label for="firstname">Prénom :</label>
          <input type="text" id="firstname" v-model="updatedUser.firstname" />
        </div>
        <div class="form-group">
          <label for="email">Email :</label>
          <input type="email" id="email" v-model="updatedUser.email" />
        </div>
        <div class="form-group">
          <label for="password">Mot de passe :</label>
          <input type="password" id="password" v-model="updatedUser.password" />
        </div>
        <button class="btn" type="submit">Enregistrer</button>
      </form>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const user = ref(null);
const updatedUser = ref({});
const router = useRouter();

const images = [
  { src: require('@/assets/img/background/3082604.jpg'), alt: 'Image 1' },
  { src: require('@/assets/img/background/6205121.jpg'), alt: 'Image 2' },
  { src: require('@/assets/img/background/7962235.jpg'), alt: 'Tête de cert déguisé en arbre de Noël' },
];

// Fonction pour récupérer les infos utilisateur depuis le localStorage
const fetchUserFromLocalStorage = () => {
  const storedUser = localStorage.getItem('user');
  if (storedUser) {
    user.value = JSON.parse(storedUser);
    updatedUser.value = { ...user.value }; // Crée une copie pour modification
  } else {
    alert('Vous devez être connecté pour accéder à cette page.');
    router.push('/login'); // Redirige vers la page de connexion si non connecté
  }
};

// Fonction pour mettre à jour les informations utilisateur
const updateUser = () => {
  localStorage.setItem('user', JSON.stringify(updatedUser.value)); // Met à jour dans le localStorage
  user.value = { ...updatedUser.value }; // Synchronise avec `user`
  alert('Vos informations ont été mises à jour avec succès.');
};

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

.w-50 {
  width:30% !important;
}

.d-block {
  margin: auto;
}

.carousel-control-prev,
.carousel-control-next {
  width: 5vw;
}


form{
  font-size: 0.7rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Alignement des champs */
.form-group {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: -1%;
}

/* Labels */
label {
  width: 75px;
  text-align: right;
  margin-right: 10px;
}

/* Inputs */
input {
  flex: 1;
  padding: 5px;
  font-size: 14px;
  height: 70%;
}


@media only screen and (min-width: 768px){

  section{
    display: flex;
    align-items: center;
    width: 100%;
  }

  .left{
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 10%;
  }

  .right{
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-right: 120px;
  }

    h3{
    font-size: 1.5rem;
    margin-top: -2%;
    }

    h2 {
    font-size:1.4rem;
    margin-bottom: 5%;
    }

    .btn{
        width: 15vw;
        height: 7%;
        font-size: 1.4rem;
        margin-top: -1px;
    }

    form .btn{
      width: 10vw;
      height: 4vh;
      font-size: 1.3rem;
      margin-top: 3%;
    }

    /* Alignement des champs */
  .form-group {
    margin: 1%;
  }

  /* Labels */
  label {
    font-size: 1.2rem;
    width: 130px;
  }

  /* Inputs */
  input {
    font-size: 1.2rem;
    height: 60%;
  }
}

</style>