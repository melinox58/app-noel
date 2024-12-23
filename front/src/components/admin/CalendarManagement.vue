<template>
  <div class="container mt-5">
    <h2 class="mb-4">Administration des calendriers</h2>
    <div class="input-group mb-3">
      <input v-model="searchQuery" type="text" class="form-control" placeholder="Search calendars..." />
      <div class="input-group-append">
        <button @click="fetchCalendars" class="btn">Refresh</button>
      </div>
    </div>
    <table class="table table-bordered table-hover">
      <thead>
      <tr>
        <th>Title</th>
        <th>User ID</th>
        <th>Theme</th>
        <th>Actions</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="calendar in filteredCalendars" :key="calendar.id">
        <td>{{ calendar.title }}</td>
        <td>{{ calendar.user_id }}</td>
        <td>{{ calendar.theme }}</td>
        <td>
          <button @click="deleteCalendar(calendar.id)" class="btn btn-sm">Delete</button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import axios from 'axios';

const calendars = ref([]);
const searchQuery = ref('');

const fetchCalendars = async () => {
  try {
    const response = await axios.get('http://localhost:5000/api/calendar');
    calendars.value = response.data;
  } catch (error) {
    console.error('Error fetching calendars:', error);
  }
};

const deleteCalendar = async (id) => {
  try {
    await axios.delete(`http://localhost:5000/api/calendar/${id}`);
    await fetchCalendars();
  } catch (error) {
    console.error('Error deleting calendar:', error);
  }
};

const filteredCalendars = computed(() => {
  return calendars.value.filter(calendar =>
      calendar.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      calendar.theme.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

onMounted(fetchCalendars);
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
