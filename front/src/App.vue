<template>
  <img alt="Vue logo" src="./assets/logo.png">

  <div id="app">

    <Calendar />
    <User />
  </div>
</template>

<script>
import Calendar from "@/components/CalendarComponent.vue";
import User from "@/components/UserComponent.vue";


export default {
  name: 'App',
  components: {
    Calendar,
    User
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>



