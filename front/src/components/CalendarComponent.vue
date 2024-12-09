<script setup>



</script>

<template>
  <div>
    <h1>Create Calendar</h1>
    <form @submit.prevent="createCalendar">
      <input v-model="newCalendar.title" placeholder="Title" required />
      <input v-model="newCalendar.user_id" placeholder="User ID" required />
      <input v-model="newCalendar.theme" placeholder="Theme" required />
      <button type="submit">Create Calendar</button>
    </form>
  </div>
</template>

<style scoped>

</style>