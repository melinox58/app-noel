<template>
  <component :is="layoutComponent">
    <router-view />
  </component>
</template>

<script>
import BaseLayout from './components/BaseLayout.vue';
import BaseLayoutAdmin from './components/admin/BaseLayoutAdmin.vue';

export default {
  name: 'App',
  components: {
    BaseLayout,
    BaseLayoutAdmin,
  },
  computed: {
    layoutComponent() {
      // Si la route admin est active, utilise BaseLayoutAdmin, sinon BaseLayout
      return this.$route.meta.layout === 'admin' ? 'BaseLayoutAdmin' : 'BaseLayout';
    },
  },
};
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
