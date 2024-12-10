<!-- front/src/components/RegisterComponent.vue -->
<template>
  <div>
    <h2>S'enregistrer</h2>
    <form @submit.prevent="createUser">
      <input v-model="newUser.name" placeholder="Nom" required />
      <input v-model="newUser.firstname" placeholder="Prénom" required />
      <input v-model="newUser.email" placeholder="Email" required />
      <input v-model="newUser.password" type="mot de passe" placeholder="Password" required />
      <button type="submit">Valider</button>
    </form>
    <ul>
      <li v-for="user in users" :key="user.id">
        {{ user.firstname }}{{ user.name }} - {{ user.email }}
        <button @click="deleteUser(user.id)">Delete</button>
      </li>
    </ul>
  </div>
</template>

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
    newUser.value = { name: '', firstname: '', email: '', password: '' };
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

<style scoped>
/* Ajoutez vos styles ici */
</style>