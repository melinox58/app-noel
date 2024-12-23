<template>
  <div class="container mt-5">
    <h2 class="mb-4">Administration des surprises</h2>
    <div class="input-group mb-3">
      <input v-model="searchQuery" type="text" class="form-control" placeholder="Search surprises..." />
      <div class="input-group-append">
        <button @click="fetchSurprises" class="btn btn-primary">Refresh</button>
      </div>
    </div>
    <table class="table table-bordered table-hover">
      <thead>
      <tr>
        <th>Case ID</th>
        <th>Source</th>
        <th>Title</th>
        <th>Description</th>
        <th>Actions</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="surprise in filteredSurprises" :key="surprise._id">
        <td>{{ surprise.case_id }}</td>
        <td>{{ surprise.source }}</td>
        <td>{{ surprise.titre }}</td>
        <td>{{ surprise.description }}</td>
        <td>
          <button @click="deleteSurprise(surprise._id)" class="btn btn-sm">Delete</button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import axios from 'axios';

const surprises = ref([]);
const searchQuery = ref('');

const fetchSurprises = async () => {
  try {
    const response = await axios.get('http://localhost:5000/api/surprises');
    surprises.value = response.data;
  } catch (error) {
    console.error('Error fetching surprises:', error);
  }
};

const deleteSurprise = async (id) => {
  try {
    await axios.delete(`http://localhost:5000/api/surprises/${id}`);
    await fetchSurprises();
  } catch (error) {
    console.error('Error deleting surprise:', error);
  }
};

const filteredSurprises = computed(() => {
  return surprises.value.filter(surprise =>
      surprise.titre.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      surprise.description.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

onMounted(fetchSurprises);
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
