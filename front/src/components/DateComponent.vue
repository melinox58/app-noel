<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import CaseComponent from '@/components/CaseComponent.vue';

const currentDate = ref('');
const dayNumber = ref(null);
const cases = ref([]);
const adventCalendarDay = ref(null);
const calendarId = ref(1); // Définir calendarId comme une variable réactive

//fonction qui actualise la valeur de currentDate et dayNumber
const updateDate = () => {
  const now = new Date();
  currentDate.value = now.toUTCString();
  dayNumber.value = now.getUTCDate();
  adventCalendarDay.value = getAdventCalendarDay(now);
};

// On récupère les cases du calendrier depuis le back
const fetchCases = async () => {
  try {
    console.log('Fetching cases for calendar ID:', calendarId.value);
    const response = await axios.get(`http://localhost:5000/api/calendars/${calendarId.value}/cases`);
    console.log('Response data:', response.data);
    cases.value = response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des cases :', error);
  }
};

//fonction qui s'assure qu'on est du 1 au 24 decembre et qui retourne le numero du jour
const getAdventCalendarDay = (date) => {
  const month = date.getUTCMonth(); // avec index qui commence a 0, decembre est le mois numero 11
  const day = date.getUTCDate();
  if (month === 11 && day >= 1 && day <= 24) {
    return day;
  }
  return null;
};

const openCase = async (caseId) => {
  try {
    const caseToOpen = cases.value.find(caseItem => caseItem.id === caseId);
    if (caseToOpen && !caseToOpen.is_opened && caseToOpen.day_number <= dayNumber.value) {
      caseToOpen.is_opened = true;
      await axios.post(`http://localhost:5000/api/cases/${caseId}/open`);
    }
  } catch (error) {
    console.error('Erreur lors de l\'ouverture de la case :', error);
  }
};

onMounted(() => {
  updateDate(); //actualise la valeur de currentDate et dayNumber
  fetchCases();
});
</script>

<template>
  <div class="date">
    <p>Date actuelle (UTC): {{ currentDate }}</p>
    <p>Numéro du jour: {{ dayNumber }}</p>
    <div v-for="caseItem in cases" :key="caseItem.id">
      <CaseComponent :caseItem="caseItem" :dayNumber="dayNumber" @openCase="openCase" />
    </div>
  </div>
</template>

<style scoped>

p{
  color: black;
  font-size: 1rem;
}

div .date{
  border: none
}
</style>