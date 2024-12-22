<template>
  <div class="container mt-5">
    <h2 class="mb-4">Administration des calendriers</h2>
    <div class="input-group mb-3">
      <input v-model="searchQuery" type="text" class="form-control" placeholder="Search calendars..." />
      <div class="input-group-append">
        <button @click="fetchCalendars" class="btn btn-primary">Refresh</button>
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
          <button @click="deleteCalendar(calendar.id)" class="btn btn-danger btn-sm">Delete</button>
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
</style>
