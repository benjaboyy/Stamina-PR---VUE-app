<template>
  <div class="home">
    <div class="container text-center">
      <DotLottieVue
          class="logo my-0 mx-auto"
          autoplay loop
          src="https://lottie.host/54ba8af3-f787-4cf5-9c62-e580bd33f9bc/cXOwF6BIoL.json" />
    </div>
    <MainNav/>
  </div>
</template>

<script>
// @ is an alias to /src
import MainNav from '@/components/MainNav.vue'
import { DotLottieVue } from '@lottiefiles/dotlottie-vue'

export default {
  name: 'HomeView',
  components: {
    MainNav,
    DotLottieVue
  }
}
</script>
<style>
  .logo {
    width: 100%;
    max-width: 500px;
  }
</style>
