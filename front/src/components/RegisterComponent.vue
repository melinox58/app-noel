<template>
  <div>
      <h1>Rejoignez Osez Noël !!</h1>

    <h2>Créez votre compte ou identifiez-vous pour commencer
        à personnaliser votre calendrier
        et à vivre l'expérience magique de Noël !</h2>

      <h3>S'enregistrer</h3>
      <form @submit.prevent="createUser">
        <input v-model="newUser.name" placeholder="Nom" required />
        <input v-model="newUser.firstname" placeholder="Prénom" required />
        <input v-model="newUser.firstname" placeholder="Prénom" required />
        <input v-model="newUser.email" placeholder="Email" required />
        <input v-model="newUser.password" type="mot de passe" placeholder="Password" required />
        <button class="btn" type="submit">Valider</button>
      </form>
      <ul>
        <li v-for="user in users" :key="user.id">
          {{ user.name }} - {{ user.email }}
          <button @click="deleteUser(user.id)">Delete</button>
        </li>
      </ul>
    </div>
  </template>

<style scoped>
h1{
  color: rgb(196, 2, 2);
  text-shadow: 0px 0px 5px rgb(196, 2, 2);
  transform: rotate(-10deg);
  margin: 0;
}

h2{
  font-size: 1rem;
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
  width: 35vw;
  margin-top: 5%;
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
import { ref } from 'vue';
import axios from 'axios';

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

const deleteUser = async (id) => {
  try {
    await axios.delete(`http://localhost:5000/api/users/${id}`);
    users.value = users.value.filter(user => user.id !== id);
    alert('Utilisateur supprimé avec succès!');
  } catch (error) {
    alert('Error deleting user: ' + error.message);
  }
};

// Fetch users when the component is created
fetchUsers();
</script>
