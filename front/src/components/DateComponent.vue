<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const currentDate = ref('');
const dayNumber = ref(null);
const cases = ref([]);
const adventCalendarDay = ref(null);

//fonction qui actualise la valeur de currentDate et dayNumber
const updateDate = () => {
  const now = new Date();
  currentDate.value = now.toUTCString();
  dayNumber.value = now.getUTCDate();
  adventCalendarDay.value = getAdventCalendarDay(now);
};

//on recupere les cases du calendrier depuis le back
const fetchCases = async () => {
  try {
    const response = await axios.get('/api/calendars/1/cases'); // Remplacez 1 par l'ID du calendrier
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
      await axios.post(`/api/cases/${caseId}/open`);
    }
  } catch (error) {
    console.error('Erreur lors de l\'ouverture de la case :', error);
  }
};

onMounted(() => {
  updateDate(); //actualise la valeur de currentDate et dayNumber
  fetchCases();
  openCase();
});
</script>

<template>
  <div>
    <p>Date actuelle (UTC): {{ currentDate }}</p>
    <p>Numéro du jour: {{ dayNumber }}</p>
    <div v-for="caseItem in cases" :key="caseItem.id">
      <p>Case {{ caseItem.day_number }}: {{ caseItem.content.description }}</p>
      //bouton desactivé si numero de case> numero du jour ou si la case est deja ouverte
      <button @click="openCase(caseItem.id)" :disabled="caseItem.day_number > dayNumber || caseItem.is_opened">
        {{ caseItem.is_opened ? 'Ouverte' : 'Ouvrir' }}
      </button>
    </div>
  </div>
</template>

<style scoped>

</style>