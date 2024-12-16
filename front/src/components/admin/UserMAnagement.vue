<template>
  <div>
    <h2>Administration des utilisateurs</h2>
    <input v-model="searchQuery" placeholder="Search users..." />
    <button @click="fetchUsers">Refresh</button>
    <ul>
      <li v-for="user in filteredUsers" :key="user.id">
        <strong>Name:</strong> {{ user.name }} {{ user.firstname }}<br>
        <strong>Email:</strong> {{ user.email }}<br>
        <button @click="blockUser(user.id)">Block</button>
        <button @click="deleteUser(user.id)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import axios from 'axios';

const users = ref([]);
const searchQuery = ref('');

const fetchUsers = async () => {
  try {
    const response = await axios.get('http://localhost:5000/api/users');
    users.value = response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
  }
};

const deleteUser = async (id) => {
  try {
    await axios.delete(`http://localhost:5000/api/users/${id}`);
    fetchUsers();
  } catch (error) {
    console.error('Error deleting user:', error);
  }
};

const blockUser = async (id) => {
  try {
    await axios.post(`http://localhost:5000/api/users/block/${id}`);
    await fetchUsers();
  } catch (error) {
    console.error('Error blocking user:', error);
  }
};

const filteredUsers = computed(() => {
  return users.value.filter(user =>
      user.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      user.firstname.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

onMounted(fetchUsers);
</script>

<style scoped>

</style>