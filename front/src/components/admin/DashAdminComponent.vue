<template>
  <div class="admin-dashboard">
    <nav>
      <router-link class="btn" to="/admin/users">Utilisateurs</router-link>
      <router-link class="btn" to="/admin/calendars">Calendriers</router-link>
      <router-link class="btn" to="/admin/surprises">Surprises</router-link>
      <router-link class="btn" to="/admin/share">Partage</router-link>
    </nav>
    <router-view></router-view>
    <h1>Admin Dashboard</h1>
  </div>

</template>


<style scoped>
.content-container[data-v-004e11f4] {
  display: flex;
  flex-direction: column;
  flex: 1; 
}

.admin-dashboard {
    display: flex;
    flex-direction: column;
  }

h1{
  flex: 1;
  font-size: 1rem;
}

nav{
    display: flex;
    flex-direction: row;
    flex: 1;
    align-items: center;
    margin-top: -80%;
  }

.btn{
  font-size: 0.5rem;
  display: flex;
  width: 20vw;
  background-image: url('@/assets/img/background/preview.webp');
  background-size: cover;
  color:white;
  border-radius: 20px;
  height: 3.5vh;
  justify-content: center;
  align-items: center;
  background-position: center;
  text-shadow: 
    1px 1px 0 black, 
    -1px 1px 0 black, 
    1px -1px 0 black, 
    -1px -1px 0 black; /* Ombres pour chaque direction */
  margin: 2%;
  }

@media only screen and (min-width: 768px){
  .content-container[data-v-004e11f4] {
  display: none;
  }

  h1{
    font-size: 1.8rem;
  }

  nav{
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: center;
    margin-left: -170%;
  }

  .btn{
    display: flex;
    font-size: 1.2rem;
    width: 10vw;
    height: 4vh;
    margin: 2%;
    }
}
</style>



<script setup>

</script>