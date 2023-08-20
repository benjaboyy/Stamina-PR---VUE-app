<template>
  <PageNav v-if="isOnHome"/>
  <router-view/>
</template>

<script>
import PageNav from "@/components/PageNav";
export default {
  components: {PageNav},
  name: 'App',
  computed: {
    isOnHome() {
      return this.$route.name === 'home'
    }
  },
  created() {
    this.dataGetter();
  },
  methods: {
    dataGetter() {
      this.$store.dispatch('submission/loadSubmissions'); // load submissions
      // load season for 2023
      this.$store.dispatch('ranking/loadSeason', {year: 2023});
    }
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
}
</style>
