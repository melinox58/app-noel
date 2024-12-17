<template>
  <div>
      <h1>Rejoignez Osez Noël !!</h1>

    <h2>Créez votre compte ou identifiez-vous pour commencer
        à personnaliser votre calendrier
        et à vivre l'expérience magique de Noël !</h2>
    
    <section class="register">
      <div>
        <h3>S'enregistrer</h3>
        <form @submit.prevent="createUser">
          <input v-model="newUser.name" placeholder="Nom" required />
          <input v-model="newUser.firstname" placeholder="Prénom" required />
          <input v-model="newUser.email" placeholder="Email" required />
          <input v-model="newUser.password" type="mot de passe" placeholder="Password" required />
          <button class="btn" type="submit">Valider</button>
        </form>
      </div>
    </section>
        <LoginComponent />
  </div>
</template>

<style scoped>
h1{
  color: rgb(196, 2, 2);
  text-shadow: 0px 0px 5px rgb(196, 2, 2);
  transform: rotate(-10deg);
  margin-bottom: 17%;
  font-size: 1.6rem;
}

h2{
  font-size: 0.8rem;
  margin-bottom: 8%;
  width: 70vw;
}

h3{
  font-size: 0.9rem;
  color: blue;
  margin-top: 8%;
}

input{
  color: blue;
  height: 3vh;
  font-size: 0.8rem;
}

.register{
  display: flex;
  margin-top: -8%;
}

form{
  display: flex;
  flex-direction: column;
  width: 65vw;
  align-items: center;
}

.content-container > main:nth-child(2) > div:nth-child(1) {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 15%;
}

.btn{
  font-size: 0.8rem;
  display: flex;
  width: 30vw;
  margin-top: 5%;
  background-image: url('@/assets/img/background/preview.jpg');
  background-size: cover;
  color:white;
  border-radius: 20px;
  height: 4vh;
  justify-content: center;
  align-items: center;
  background-position: center;
  text-shadow:
    1px 1px 0 black,
    -1px 1px 0 black,
    1px -1px 0 black,
    -1px -1px 0 black; /* Ombres pour chaque direction */
}

@media only screen and (min-width: 768px){
h1{
  margin-bottom: 0%;
  font-size: 2.2rem;
}

h2{
  margin-top: 7%;
  font-size: 1.4rem;
  width: 50vw;
  margin-bottom: 5%;
}

h3{
  font-size: 1.2rem;
  margin-top: 5%;
}

input{
  width: 30vw;
  font-size: 1rem;
}

form{
  gap: 5%;
}

.btn{
  font-size: 1.2rem;
  width: 10vw;
  margin-top: 2%;
  margin-bottom: 4%;
}

}

</style>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import LoginComponent from './LoginComponent.vue';
import { useRouter } from 'vue-router';

const router = useRouter(); // Déclare l'instance du routeur

const newUser = ref({
  name: '',
  firstname: '',
  email: '',
  password: ''
});

const users = ref([]);

const createUser = async () => {
  try {
    const response = await axios.post('http://localhost:5000/api/users', newUser.value);
    users.value.push(response.data);
    alert('Utilisateur crée avec succès!');
    router.push('/dashUser'); // Redirection vers la route dashboard user
  } catch (error) {
    alert('une erreur est survenue: ' + error.message);
  }
};

const fetchUsers = async () => {
  try {
    const response = await axios.get('http://localhost:5000/api/users');
    users.value = response.data;
  } catch (error) {
    alert('Error fetching users: ' + error.message);
  }
};


// Fetch users when the component is created
fetchUsers();
</script>
