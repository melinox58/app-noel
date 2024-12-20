<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import DateComponent from '@/components/DateComponent.vue';
import CaseComponent from '@/components/CaseComponent.vue';

const user = ref(null);
const newCalendar = ref({
  title: '',
  user_id: 1, // Valeur par défaut pour test
  theme: ''
});

const days = ref(Array.from({ length: 24 }, (_, i) => i + 1));

const createCalendar = async () => {
  try {
    await axios.post('http://localhost:5000/api/calendar', newCalendar.value);
    newCalendar.value = { title: '', user_id: 1, theme: '' }; // Réinitialisation
    alert('Le calendrier a été créé avec succès!');
  } catch (error) {
    alert('Échec : ' + error.message);
  }
};

onMounted(() => {
  const storedUser = localStorage.getItem('user');
  if (storedUser) {
    user.value = JSON.parse(storedUser);
    newCalendar.value.user_id = user.value.id;
  }
});

</script>

<template>
    <h3 v-if="user">Bienvenue {{ user.firstname }} {{ user.name }}</h3>
    <div class="date">
      <DateComponent />
    </div>

    <section>
      <form @submit.prevent="createCalendar">
        <h2>Choisissez les surprises :</h2>
          <div class="theme">
            <article class="image-table">
              <CaseComponent
              v-for="(day, index) in days"
                  :key="index"
                  :case-item="day"
                  :day-number="day" />
            </article>
        </div>
      </form>

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
  font-size: 1rem;
  margin-bottom: -8%;
  border: 2px solid black;
}

.date{
  border: none;
}

.theme{
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
}

.fa-solid{
  color: blue;
  font-size: 2rem;
}

form{

  flex-direction: column;
  gap: 3%;
  width: 91vw;
  height: 98%;
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

.image-table {
  width: 90vw;
  height: 45vh;
  margin-top: 20%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  overflow: scroll;
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

  .content-container > main:nth-child(2) > section:nth-child(3) > aside:nth-child(2) {
  padding-top: 40%;
  }

  .fa-solid{
  font-size: 3rem;
  }

  div{
    margin-bottom: 0.5%;
  }

  section{
    height: 69vh;
    margin-bottom: -9%;
  }

  section h2 {
    font-size:1.4rem;
    padding-top: 2%;
  }

  section input{
    width: 30vw;
  }

  section form{
    gap: 5%;
    width: 100%;
    height: 14%;
    display: flex;
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
    margin-top: -70.6vh;
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

  .image-table{
    width: 79vw;
    overflow: hidden;
    display: flex;
    align-items: center;
    height: 59vh;
    margin-top: 1%;
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
