<script setup>
import { ref, onMounted } from 'vue'; //ref est une fonction de la Composition API
import axios from 'axios';
import DateComponent from '@/components/DateComponent.vue';


const newCalendar = ref({
  title: '',
  user_id: '',
  theme: ''
});

const preview = ref(false);
const createCalendar = async() => {
  try {
    await axios.post('http://localhost:5000/api/calendar', newCalendar.value);
    newCalendar.value = { title: '', user_id: '', theme: '' };
    alert('Le calendrier a été crée avec succès!');
  } catch (error) {
    alert('Echec: ' + error.message);
  }
};

const previewCalendar = () => {
  if (!newCalendar.value.theme) {
    alert("Veuillez choisir un thème avant de prévisualiser !");
    return;
  }
  if (!newCalendar.value.title.trim()) {
    alert("Veuillez ajouter un titre avant de prévisualiser !");
    return;
  }
  preview.value = true;
};

const selectTheme = (image) => {
  newCalendar.value.theme = image.src;
};

//On recup les info de l'utilisateur stockées dans le localstorage
//pour pouvoir lui afficher un message de bienvenu si on a un user connecté (v-if )
const user = ref(null);

onMounted(() => {
  const storedUser = localStorage.getItem('user');
  if (storedUser) {
    user.value = JSON.parse(storedUser);
    newCalendar.value.user_id = user.value.id; // Définir user_id à partir de l'ID de l'utilisateur
  }
});

// Images disponibles pour les thèmes
const images = [
  { id: 1, src: require('@/assets/img/background/13450.jpg'), name: 'Image 1', description: 'Description 1' },
  { id: 2, src: require('@/assets/img/background/4510871.jpg'), name: 'Image 2', description: 'Description 2' },
  { id: 3, src: require('@/assets/img/background/6537135.jpg'), name: 'Image 3', description: 'Description 3' }
];

</script>

<template>
  <section>
    <h3 v-if="user">Vous êtes connecté en tant que {{ user.firstname }} {{ user.name }}</h3>
    <DateComponent />

    <form @submit.prevent="createCalendar">
      <h2>Choisissez votre thème :</h2>
      <input v-model="newCalendar.title" placeholder="Titre du calendrier" required />
      <input type="hidden" v-model="newCalendar.user_id" />
      <button class="btn" type="button" @click="previewCalendar">Prévisualiser</button>
      <button class="btn" type="submit">Valider</button>
    </form>


    <div class="image-table">
        <div class="image-row">
          <div v-for="image in images" :key="image.id" class="image-container">
            <img
                :src="image.src"
                :alt="image.name"
                width="100"
                @click="selectTheme(image)"
                style="cursor: pointer;"
            />
          </div>
        </div>
      </div>


    <!-- Prévisualisation -->
    <div v-if="preview" class="preview-container">
      <h3>Prévisualisation du Calendrier</h3>
      <div
          class="calendar-preview"
          :style="{ backgroundImage: `url(${newCalendar.theme || '@/assets/img/background/13450.jpg'})` }"
      >
        //generer les cases
        <div v-for="day in 24" :key="day" class="calendar-day">
          {{ day }}
        </div>
      </div>
      <h4>{{ newCalendar.title }}</h4>
      <button class="btn" type="button" @click="preview = false">Fermer la prévisualisation</button>
    </div>
  </section>
</template>


<style scoped>




section{
  width: 80vw;
  height: 70vh;
  margin-right: 10%;
  margin-top: 5%;
}

h3{
  color: blue;
  font-size: 1rem;
  margin-bottom: 2%;
  margin-top: 5%;
}

h2{
  font-size: 0.8rem;
}

input{
  color: blue;
  width: 31vw;
  height: 50%;
}

form{
  display: flex;
  flex-direction: row;
  gap: 3%;
  width: 89vw;
  height: 20%;
  align-items: center;
  justify-content: center;
}

.container {
  position: relative;
}

.content-container > main:nth-child(2) > div:nth-child(1) {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.btn{
  font-size: 0.8rem;
  display: flex;
  width: 20vw;
  background-image: url('@/assets/img/background/preview.jpg');
  background-size: cover;
  color:white;
  border-radius: 20px;
  height: 29%;
  justify-content: center;
  align-items: center;
  background-position: center;
  text-shadow:
    1px 1px 0 black,
    -1px 1px 0 black,
    1px -1px 0 black,
    -1px -1px 0 black; /* Ombres pour chaque direction */
}

input{
  color: blue;
  width: 70%;
  height: 31%;
}

.config{
  display: flex;
  margin-top: 4%;
}

.config img{
  width: 60%;
}

ul{
  padding: 0;
}

.image-row img{
  width: 26vw;
}

.image-table {
  width: 100%;                /* La table occupe toute la largeur disponible */
  height: 60vh;               /* Hauteur fixe pour la table */
  overflow: hidden;           /* Empêche tout débordement visible de la table elle-même */
}

.image-row {
  display: flex;
  flex-wrap: wrap;            /* Les images passeront à la ligne suivante si l'espace est insuffisant */
  width: 100%;                /* Garantit que l'image-row occupe toute la largeur disponible */
  overflow-x: auto;           /* Permet un défilement horizontal si nécessaire */
  overflow-y: auto;           /* Permet un défilement vertical si nécessaire */
  height: 95%;               /* Occupe toute la hauteur de la table */
  gap: 4%;
  justify-content: center;    /* Centre les images horizontalement */
}

.image-container {
  flex: 0 0 28%;              /* Chaque image occupe environ 48% de la largeur (2 par ligne) */
  max-width: 100%;            /* Evite que les images débordent de leur conteneur */
  justify-content: center;    /* Centre l'image horizontalement */
}

.preview-container {
  flex: 1 1 auto;
  width: 100%;
  min-height: 300px;
  margin-top: 20px;
  border: 1px solid #ccc;
  padding: 20px;
  background-color: #f9f9f9;
}

.calendar-preview {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
  background-size: cover;
  background-position: center;
  padding: 20px;
  border: 1px solid #ccc;
  min-height: 300px; /* Hauteur minimum pour la prévisualisation */
  width: 100%;
}

.calendar-day {
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid #ddd;
  padding: 20px;
  text-align: center;
  font-size: 1.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 50px;
  border-radius: 5px;
}



@media only screen and (min-width: 768px){

section{
  background-color: rgba(255, 255, 255, 0.854);
  width: 80vw;
  height: 70vh;
  margin-right: 10%;
  margin-top: 0;
  margin-bottom: 2%;
}

h3{
  font-size: 1.5rem;
  margin-bottom: 2%;
}

section h2 {
  font-size:1.4rem;
}


section input{
  width: 30vw;
}

section form{
  gap: 5%;
  width: 100%;
  height: 14%;
}

section input {
  height: 40%;
}

section .btn{
  font-size: 1.2rem;
  width: 10vw;
  height: 30%;
}

section .config{
  background-color: rgba(255, 255, 255, 0.858);
  display: flex;
  flex-direction: column;
  height: 687%;
  width: 14%;
  justify-content: center;
  margin-left: -12vw;
  margin-top: 0;
  gap: 10%;
  position: relative;
  z-index: 8;
}

section .config img{
  width: 32%;
  margin: 0;
}

.image-row img {
  width: 22vw;
}

.image-table[data-v-67104fdf] {
  width: 95%;
  overflow: hidden;
  display: flex;
  align-items: center;
}

.image-container[data-v-67104fdf] {
  flex: 0 0 28%;
  display: flex;
  justify-content: center;
  align-items: center;
}

a{
  margin: 0;
}

}
</style>







