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
</script>

<template>
  <div>
    <p>Case {{ props.caseItem.day_number }}: {{ props.caseItem.content.description }}</p>
    <button @click="openCase(props.caseItem.id)" :disabled="props.caseItem.day_number > props.dayNumber || props.caseItem.is_opened">
      {{ props.caseItem.is_opened ? 'Ouverte' : 'Ouvrir' }}
    </button>
  </div>
</template>

<style scoped>

</style>