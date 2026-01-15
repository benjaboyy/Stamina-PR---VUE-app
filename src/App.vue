<template>
  <PageNav/>
  <transition name="fly-fade" mode="out-in" appear>
    <router-view v-if="loaded" :key="$route.fullPath"/>
  </transition>
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

.fly-fade-enter-active,
.fly-fade-leave-active,
.fly-fade-appear-active {
  transition: opacity 250ms ease, transform 250ms ease;
}

.fly-fade-enter-from,
.fly-fade-leave-to,
.fly-fade-appear-from {
  opacity: 0;
  transform: translateY(20px);
}

.fly-fade-enter-to,
.fly-fade-leave-from,
.fly-fade-appear-to {
  opacity: 1;
  transform: translateY(0);
}
</style>
