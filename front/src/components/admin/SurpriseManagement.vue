<template>
  <div>
    <h2>Administration des surprises</h2>
    <input v-model="searchQuery" placeholder="Search surprises..." />
    <button @click="fetchSurprises">Refresh</button>
    <ul>
      <li v-for="surprise in filteredSurprises" :key="surprise._id">
        <strong>Case ID:</strong> {{ surprise.case_id }}<br>
        <strong>Source:</strong> {{ surprise.source }}<br>
        <strong>Title:</strong> {{ surprise.titre }}<br>
        <strong>Description:</strong> {{ surprise.description }}<br>
        <button @click="deleteSurprise(surprise._id)">Delete</button>
      </li>
    </ul>
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

//conversion en minuscule pour simplifier la recherche
const filteredSurprises = computed(() => {
  return surprises.value.filter(surprise =>
      surprise.titre.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      surprise.description.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

onMounted(fetchSurprises);
</script>


<style scoped>

</style>