<template>
    <BaseLayout msg="Welcome to Your Home App"/>
</template>

  <script>
  import BaseLayout from './components/BaseLayout.vue'

  export default {
    name: 'App',
    components: {
      BaseLayout
    }
  }
  </script>

  <style>
  #app {
    position: relative; /* Position naturelle */
    z-index: 0; /* Derrière les éléments interactifs */
    width: 100%;
    height: auto;
  }
  </style>
