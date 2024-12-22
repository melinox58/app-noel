<script setup>
import { defineProps} from 'vue';

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
// const emits = defineEmits(['openCase']);

// const openCase = (caseId) => {
//   emits('openCase', caseId);
// };

// Déboguer les données des props
console.log("Props caseItem :", props.caseItem);
console.log("Props dayNumber :", props.dayNumber);
</script>

<template>
  <div v-if="caseItem">
    <h1>{{ caseItem.name }}</h1>
    <!-- <button @click="openCase(caseItem.id)">Ouvrir</button> -->
  </div>
  <div v-else>
    <p>Chargement des données...</p>
  </div>
</template>


<style scoped>

div[data-v-11327214] {
  font-size: 1rem;
  border: 1px solid black;
  width: 20%;
  height: 21%;
  margin: 2px;
}

@media only screen and (min-width: 768px){
  div[data-v-11327214][data-v-59a6bd2d] {
  font-size: 1rem;
  border: 1px solid black;
  width: 10%;
  height: 23%;
  margin: 1%;
}
}

</style>