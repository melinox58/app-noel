<script setup>
import { ref, onMounted } from 'vue'; //ref est une fonction de la Composition API
import axios from 'axios';
import DateComponent from '@/components/DateComponent.vue';


const newCalendar = ref({
  title: '',
  user_id: '',
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
  { id: 3, src: require('@/assets/img/background/6537135.jpg'), name: 'Image 3', description: 'Description 3' },
  { id: 4, src: require('@/assets/img/background/3082604.jpg'), name: 'Image 4', description: 'Description 4' },
  { id: 5, src: require('@/assets/img/background/6205121.jpg'), name: 'Image 2', description: 'Description 2' },
  { id: 6, src: require('@/assets/img/background/7962235.jpg'), name: 'Image 3', description: 'Description 3' },
  { id: 7, src: require('@/assets/img/background/9711201.jpg'), name: 'Image 1', description: 'Description 1' },
  { id: 8, src: require('@/assets/img/background/christmas-season-6838063_1280.jpg'), name: 'Image 2', description: 'Description 2' },
  { id: 9, src: require('@/assets/img/background/christmas-background-3767131_1280.jpg'), name: 'Image 3', description: 'Description 3' },
  { id: 10, src: require('@/assets/img/background/christmas-6805045_1280.jpg'), name: 'Image 4', description: 'Description 4' },
  { id: 11, src: require('@/assets/img/background/freepik__candid-image-photography-natural-textures-highly-r__29953.jpeg'), name: 'Image 2', description: 'Description 2' },
  { id: 12, src: require('@/assets/img/background/freepik__candid-image-photography-natural-textures-highly-r__29954.jpeg'), name: 'Image 3', description: 'Description 3' },
  { id: 13, src: require('@/assets/img/background/freepik__candid-image-photography-natural-textures-highly-r__29955.jpeg'), name: 'Image 1', description: 'Description 1' },
  { id: 14, src: require('@/assets/img/background/freepik__candid-image-photography-natural-textures-highly-r__29956.jpeg'), name: 'Image 2', description: 'Description 2' },
  { id: 15, src: require('@/assets/img/background/freepik__candid-image-photography-natural-textures-highly-r__29957.jpeg'), name: 'Image 3', description: 'Description 3' },
  { id: 16, src: require('@/assets/img/background/freepik__candid-image-photography-natural-textures-highly-r__29958.jpeg'), name: 'Image 4', description: 'Description 4' },
  { id: 17, src: require('@/assets/img/background/freepik__candid-image-photography-natural-textures-highly-r__29959.jpeg'), name: 'Image 2', description: 'Description 2' },
  { id: 18, src: require('@/assets/img/background/holiday-6903031_1280.jpg'), name: 'Image 3', description: 'Description 3' },
  { id: 19, src: require('@/assets/img/background/preview.jpg'), name: 'Image 1', description: 'Description 1' },
  { id: 20, src: require('@/assets/img/background/v1055-a-07a.jpg'), name: 'Image 2', description: 'Description 2' }

]
</script>

<template>
    <h3 v-if="user">Bienvenue {{ user.firstname }} {{ user.name }}</h3>
    <div>
      <DateComponent />
    </div>
    <section>
      <form @submit.prevent="createCalendar">
        <h2>Choisissez votre thème :</h2>
        <input v-model="newCalendar.title" placeholder="Titre du calendrier" required />
        <input type="hidden" v-model="newCalendar.user_id" />
        <button class="btn" type="submit">Valider</button>
      </form>

      <div class="image-table">
        <div class="image-row">
          <div v-for="image in images" :key="image.id" class="image-container">
            <img :src="image.src" :alt="image.name" width="100" @click="selectTheme(image)"
            style="cursor: pointer;" />
            <!-- <input v-model="newCalendar.theme" placeholder="Theme" required /> -->
          </div>
        </div>
      </div>

      <aside>
        <nav>
          <ul class="config">
            <li>
              <a href="/dashUser"><i class="fa-solid fa-user"></i></a>
            </li>
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


<style scoped>

section{
  width: 80vw;
  height: 60vh;
  margin-right: 10%;
}

h3{
  color: blue;
  font-size: 0.8rem;
  margin-top: 2%;
}

h2{
  font-size: 0.5rem;
}

div{
  font-size: 0.4rem;
  margin-bottom: -8%;
}

input{
  color: blue;
  width: 30vw;
  height: 30%;
  font-size: 0.7rem;
}

.fa-solid{
  color: blue;
  font-size: 2rem;
}

form{
  display: flex;
  flex-direction: row;
  gap: 3%;
  width: 89vw;
  height: 17%;
  align-items: center;
  justify-content: center;
}

.content-container > main:nth-child(2) > div:nth-child(1) {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.btn{
  font-size: 0.5rem;
  display: flex;
  width: 15vw;
  background-image: url('@/assets/img/background/preview.jpg');
  background-size: cover;
  color:white;
  border-radius: 20px;
  height: 20%;
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
  margin-top: -150%;
  margin-top: -113%;
  justify-content: center;
  width: 90vw;
  list-style-type: none;
}

.config img{
  width: 50%;
}

ul{
  padding: 0;
}

.image-row img{
  width: 26vw;
}

.image-table {
  margin-top: 10%;
  width: 100%;                /* La table occupe toute la largeur disponible */
  height: 45vh;               /* Hauteur fixe pour la table */
  overflow: hidden;           /* Empêche tout débordement visible de la table elle-même */
}

.image-row {
  display: flex;
  flex-wrap: wrap;            /* Les images passeront à la ligne suivante si l'espace est insuffisant */
  width: 100%;                /* Garantit que l'image-row occupe toute la largeur disponible */
  overflow-x: auto;           /* Permet un défilement horizontal si nécessaire */
  overflow-y: auto;           /* Permet un défilement vertical si nécessaire */
  height: 100%;               /* Occupe toute la hauteur de la table */
  gap: 2%;
  justify-content: center;    /* Centre les images horizontalement */
}

.image-container {
  flex: 0 0 10%;              /* Chaque image occupe environ 48% de la largeur (2 par ligne) */
  max-width: 100%;            /* Evite que les images débordent de leur conteneur */
  justify-content: center;    /* Centre l'image horizontalement */
  margin: 2%;
}

@media only screen and (min-width: 768px){

  main{
    height: 82vh;
  }

  section{
    background-color: rgba(255, 255, 255, 0.854);
    width: 80vw;
    height: 100vh;
    margin-right: 10%;
    margin-bottom: -8%;
  }

  h3{
    font-size: 1.5rem;
    margin-bottom: 2%;
    margin-top: -4.5%;
  }

  p{
    margin-bottom: 0;
  }

  .fa-solid{
  font-size: 3rem;
  }

  div{
    margin-bottom: 0.5%;
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
    font-size: 1rem;
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
    height: 69vh;
    width: 14%;
    justify-content: center;
    margin-left: -12vw;
    margin-top: -68.5vh;
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
    height: 58vh;
    margin-top: 0;
  }

  .image-container[data-v-67104fdf] {
    flex: 0 0 28%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  img {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    cursor: pointer;
}

  img:hover {
    transform: scale(1.1); /* Agrandissement de l'image */
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); /* Ombre autour de l'image */
}

  a{
    margin: 0;
  }
}
</style>



