<template>
  <div class="home">
    <img class="logo mb-3" alt="Vue logo" src="../assets/logo.png">
    <MainNav msg="Welcome to Your Vue.js App"/>
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
