<template>
  <div class="admin-dashboard container-fluid">
    <div class="row">
      <nav class="col-md-3 col-lg-2 d-md-block bg-light sidebar">
        <div class="sidebar-sticky">
          <ul class="nav flex-column">
            <li class="nav-item">
              <router-link to="/admin/users" class="nav-link active">Utilisateurs</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/admin/calendars" class="nav-link">Calendriers</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/admin/surprises" class="nav-link">Surprises</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/admin/share" class="nav-link">Partage</router-link>
            </li>
          </ul>
        </div>
      </nav>
      <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-md-4">
        <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h4>Admin Dashboard</h4>
        </div>
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>


<style scoped>

</style>



<script setup>
</script>