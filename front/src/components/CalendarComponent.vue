<template>
    <h3>Bienvenue {{ user }}</h3>
    <section>
      <form @submit.prevent="createCalendar">
        <h2>Choisissez votre thème :</h2>
        <input v-model="newCalendar.title" placeholder="Titre" required />
        <input type="hidden" v-model="newCalendar.user_id" placeholder="User ID"  />
        <button class="btn" type="submit">Valider</button>
      </form>

      <div class="image-table">
        <div class="image-row">
          <div v-for="image in images" :key="image.id" class="image-container">
            <img :src="image.src" :alt="image.name" width="100" />
            <!-- <input v-model="newCalendar.theme" placeholder="Theme" required /> -->
          </div>
        </div>
      </div>
      <aside>
        <nav>
          <ul class="config">
            <li>
              <a href="/surprise"><img :src="require('@/assets/calendrier.svg')" alt="Icone calendrier"></a>
            </li>
            <li>
              <a href="/calendar"><img :src="require('@/assets/palette.png')" alt="Icone calendrier"></a>
            </li>
            <li>
              <a href="/share"><img :src="require('@/assets/main.png')" alt="Icone partage"></a>
            </li>
          </ul>
        </nav>
      </aside>
    </section>

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

section{
  background-color: rgba(255, 255, 255, 0.854);
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
  margin-top: %;
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
  width: 10%;
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
  margin-top: -69.8vh;
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