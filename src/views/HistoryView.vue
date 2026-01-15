<template>
  <div class="about container">
    <h1>PR History</h1>
    <p>Here is a list of all ranking on date</p>
    <div v-for="season in seasons" :key="season">
      <h3>{{ season }}</h3>
      <div class="card mb-3">
        <router-link :to="`/ranking/${season}`" class="row g-0">
          <div class="col-md-12">
            <div class="card-body">
              <h5 class="card-title m-0">- Full Year -</h5>
            </div>
          </div>
        </router-link>
      </div>
      <div v-for="monthIndex in reversedMonthIndexes" :key="monthIndex">
        <div v-if="isNotFutureMonth(season, monthIndex)" class="card mb-3">
          <router-link v-if="isNotFutureMonth(season, monthIndex)" :to="`/monthly/${season}/${monthIndex + 1}`" class="row g-0">
            <div class="col-md-12">
              <div class="card-body"
                   :class="{'bg-primary': isNotFutureMonth(season, monthIndex) === 2}">
                <h5 class="card-title m-0">{{ months[monthIndex] }}</h5>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HistoryView',
  data() {
    return {
      months: [
        "January", "February", "March", "April",
        "May", "June", "July", "August",
        "September", "October", "November", "December"
      ],
      seasons: [
        "2026", "2025", "2024"
      ]
    }
  },
  computed: {
    reversedMonthIndexes() {
      return [...Array(this.months.length).keys()].reverse();
    }
  },
  methods: {
    isNotFutureMonth(year, monthIndex) {
      const date = new Date()
      const currentYear = date.getFullYear();
      const currentMonthIndex = date.getMonth();

      if (year > currentYear) {
        return false;
      } else if (year == currentYear) {
        if (monthIndex > currentMonthIndex) {
          return false;
        } else if (monthIndex == currentMonthIndex) {
          return 2;
        } else {
          return true;
        }
      } else {
        return true;
      }
    }
  }
};
</script>

<style scoped>
a {
  text-decoration: none !important;
}
</style>
