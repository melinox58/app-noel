<template>
  <div>
    <h2>Administration des calendriers</h2>
    <input v-model="searchQuery" placeholder="Search calendars..." />
    <button @click="fetchCalendars">Refresh</button>
    <ul>
      <li v-for="calendar in filteredCalendars" :key="calendar.id">
        <strong>Title:</strong> {{ calendar.title }}<br>
        <strong>User ID:</strong> {{ calendar.user_id }}<br>
        <strong>Theme:</strong> {{ calendar.theme }}<br>
        <button @click="deleteCalendar(calendar.id)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import axios from 'axios';

const calendars = ref([]);
const searchQuery = ref('');

const fetchCalendars = async () => {
  try {
    const response = await axios.get('http://localhost:5000/api/calendars');
    calendars.value = response.data;
  } catch (error) {
    console.error('Error fetching calendars:', error);
  }
};

const deleteCalendar = async (id) => {
  try {
    await axios.delete(`http://localhost:5000/api/calendar/${id}/`);
    fetchCalendars();
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

</style>