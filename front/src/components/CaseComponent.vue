<script setup>
import { defineProps, defineEmits } from 'vue';

// Définir les props attendues
const props = defineProps({
  caseItem: {
    type: Object,
    required: true
  },
  dayNumber: {
    type: Number,
    required: true
  }
});

// Définir les événements émis
const emits = defineEmits(['openCase']);

const openCase = (caseId) => {
  emits('openCase', caseId);
};

// Déboguer les données des props
console.log("Props caseItem :", props.caseItem);
console.log("Props dayNumber :", props.dayNumber);
</script>

<template>
  <div v-if="caseItem">
    <h1>{{ caseItem.name }}</h1>
    <button @click="openCase(caseItem.id)">Ouvrir</button>
  </div>
  <div v-else>
    <p>Chargement des données...</p>
  </div>
</template>


<style scoped>

</style>