<template>
  <div class="about container">
    <h1>PR History</h1>
    <p>Here is a list of all ranking on date</p>
    <div v-for="season in seasons" :key="season.year">
      <h3>{{ season.year }}</h3>
      <div v-for="month in season.rankings" :key="month.rankings" class="card mb-3">
        <router-link to="/monthly/{{ month.rankings }}" class="row g-0">
          <div class="col-md-12">
            <div class="card-body">
              <h5 class="card-title m-0">{{ month.rankings }}</h5>
            </div>
          </div>
        </router-link>
      </div>
    </div>

    <h3>2022</h3>
    <div class="card mb-3">
      <router-link to="/monthly" class="row g-0">
        <div class="col-md-12">
          <div class="card-body">
            <h5 class="card-title m-0">December</h5>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>

export default {
  name: 'HistoryView',
  async created() {
    await this.$store.dispatch("ranking/loadAllSeasonRankings");
  },
  computed: {
    seasons() {
      return this.$store.getters["ranking/getRanking"];
    },
  },

};

</script>

<style scoped>
  a {
    text-decoration: none !important;
  }
</style>
