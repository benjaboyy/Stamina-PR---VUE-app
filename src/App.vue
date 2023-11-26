<template>
  <PageNav/>
  <router-view v-if="loaded"/>
</template>

<script>
import PageNav from "@/components/PageNav";
export default {
  components: {PageNav},
  name: 'App',
  data() {
    return {
      loaded: false
    }
  },
  computed: {
    isOnHome() {
      return this.$route.name === 'home'
    }
  },
  created() {
    this.dataGetter();
  },
  methods: {
    async dataGetter() {
      this.loaded = false;
      await this.$store.dispatch('submission/loadSubmissions'); // load submissions
      // load season for 2023
      await this.$store.dispatch("ranking/loadAllSeasonRankings");
      this.loaded = true;
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
