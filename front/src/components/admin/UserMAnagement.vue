<template>
  <div class="container mt-5">
    <h2 class="mb-4">Administration des utilisateurs</h2>
    <div class="input-group mb-3">
      <input v-model="searchQuery" type="text" class="form-control" placeholder="Search users..." />
      <div class="input-group-append">
        <button @click="fetchUsers" class="btn btn-primary">Refresh</button>
      </div>
    </div>
    <table class="table table-bordered table-hover">
      <thead>
      <tr>
        <th>Name</th>
        <th>Firstname</th>
        <th>Email</th>
        <th>Actions</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="user in filteredUsers" :key="user.id">
        <td>{{ user.name }}</td>
        <td>{{ user.firstname }}</td>
        <td>{{ user.email }}</td>
        <td>
          <button @click="blockUser(user.id)" class="btn btn-sm mr-2">Block</button>
          <button @click="deleteUser(user.id)" class="btn btn-sm">Delete</button>
        </td>
      </tr>
      </tbody>
    </table>
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
    await fetchUsers();
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
.table {
  margin-top: 20px;
}
.btn {
  font-size: 0.8rem;
  display: flex;
  width: 15vw;
  margin-top: 5%;
  background-image: url('@/assets/img/background/preview.jpg');
  background-size: cover;
  color: white;
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
  transition: background-color 0.3s, transform 0.3s;
}

.btn:hover {
  background-color: rgba(0, 0, 0, 0.3);
  transform: scale(1.05);
}
</style>