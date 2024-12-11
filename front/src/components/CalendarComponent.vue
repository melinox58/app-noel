<template>
    <h3>Bienvenue {{ user }}</h3>
    <h2>Crée ton Calendrier de Noel personnalisé</h2>
    <form @submit.prevent="createCalendar">
      <input v-model="newCalendar.title" placeholder="Titre" required />
      <input type="hidden" v-model="newCalendar.user_id" placeholder="User ID"  />
      <!-- <input v-model="newCalendar.theme" placeholder="Theme" required /> -->
      <button class="btn" type="submit">Valider</button>
    </form>
    <aside>
      <nav>
        <ul class="config">
          <li>
            <img :src="require('@/assets/calendrier.svg')" alt="Icone calendrier">
          </li>
          <li>
            <img :src="require('@/assets/palette.png')" alt="Icone calendrier">
          </li>
          <li>
            <img :src="require('@/assets/main.png')" alt="Icone partage">
          </li>
        </ul>
      </nav>
    </aside>
    <h2>Choisissez votre thème :</h2>

    <div class="image-table">
      <div class="image-row">
        <div v-for="image in images" :key="image.id" class="image-container">
          <img :src="image.src" :alt="image.name" width="100" />
        </div>
      </div>
    </div>
</template>

<script>
import mainImage from '../assets/main.png';
import calendarImage from '../assets/calendrier.svg';
import paletteImage from '../assets/palette.png';

export default {
  data() {
    return {
      imgButton: '../assets/img/background/preview.jpg',
      hand: mainImage,
      calendar: calendarImage,
      palette: paletteImage,
      images: [
        { id: 1, src: require('@/assets/img/background/13450.jpg'), name: 'Image 1', description: 'Description 1' },
        { id: 2, src: require('@/assets/img/background/4510871.jpg'), name: 'Image 2', description: 'Description 2' },
        { id: 3, src: require('@/assets/img/background/6537135.jpg'), name: 'Image 3', description: 'Description 3' },
        { id: 1, src: require('@/assets/img/background/13450.jpg'), name: 'Image 1', description: 'Description 1' },
        { id: 2, src: require('@/assets/img/background/4510871.jpg'), name: 'Image 2', description: 'Description 2' },
        { id: 3, src: require('@/assets/img/background/6537135.jpg'), name: 'Image 3', description: 'Description 3' },
        { id: 3, src: require('@/assets/img/background/6537135.jpg'), name: 'Image 3', description: 'Description 3' },
        { id: 2, src: require('@/assets/img/background/4510871.jpg'), name: 'Image 2', description: 'Description 2' },
      ],
    };
  },
};
</script>


<style scoped>

h2{
  font-size: 0.9rem;
  margin-bottom: 5%;
  width: 70vw;
}

input{
  color: blue;
  width: 31vw;
  height: 50%;
}

form{
  display: flex;
  flex-direction: row;
  gap: 10%;
  width: 65vw;
  height: 20%;
  align-items: center;
  justify-content: center;
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
  height: 50%;
  justify-content: center;
  align-items: center;
  background-position: center;
  text-shadow: 
    1px 1px 0 black, 
    -1px 1px 0 black, 
    1px -1px 0 black, 
    -1px -1px 0 black; /* Ombres pour chaque direction */
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





@media only screen and (min-width: 768px){

h2{
  margin-top: 7%;
  font-size: 1.8rem;
  width: 40vw;
  margin-bottom: 0;
}

h3{
  font-size: 1.2rem;
  margin-top: 5%;
}

input{
  width: 30vw;
}

form{
  gap: 5%;
}

.btn{
  font-size: 1.2rem;
  width: 10vw;
}

}
</style>



<script setup>
import { ref } from 'vue'; //ref est une fonction de la Composition API
import axios from 'axios';

const newCalendar = ref({
  title: '',
  user_id: 1, //Valeur par defaut pour test. inclure ici la logique pour lier l'utilisateur
  theme: ''
});
  const createCalendar = async() => {
      try {
        await axios.post('http://localhost:5000/api/calendar', newCalendar.value);
        newCalendar.value = { title: '', user_id: '', theme: '' };
        alert('Le calendrier a été crée avec succès!');
      } catch (error) {
        alert('Echec: ' + error.message);
      }
};

</script>