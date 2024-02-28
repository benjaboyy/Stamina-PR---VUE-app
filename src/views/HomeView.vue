<template>
  <div class="home">
    <img class="logo mb-3" alt="Logo with a windmill" src="../assets/logo.png">
    <MainNav/>
  </div>
</template>

<script>
// @ is an alias to /src
import MainNav from '@/components/MainNav.vue'

export default {
  name: 'HomeView',
  components: {
    MainNav
  }
}
</script>
<style>
  .logo {
    max-width: 300px;
  }
</style>
