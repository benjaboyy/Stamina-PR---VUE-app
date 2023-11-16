<!-- TODO: flip the month order-->
<template>
  <div class="about container">
    <h1>PR History</h1>
    <p>Here is a list of all ranking on date</p>
    <div v-for="season in seasons" :key="season">
      <h3>{{ season }}</h3>
      <div v-for="month, index in months" :key="month">
        <div v-if="isNotFutureMonth(season, index)" class="card mb-3">
          <router-link v-if="isNotFutureMonth(season, index)" :to="`/monthly/${season}/${index+1}`" class="row g-0">
            <div class="col-md-12">
              <div class="card-body"
                   :class="{'bg-primary': isNotFutureMonth(season, index) === 2}">
                <h5 class="card-title m-0">{{ month }}</h5>
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
        "2023", "2022"
      ]
    }
  },
  methods: {
    isNotFutureMonth (year, month) {
      const date = new Date()
      if (year > date.getFullYear()) {
        return false
      }
      if (year == date.getFullYear()) {
        if (month > date.getMonth()) {
          return false
        } else if (month == date.getMonth()) {
          return 2
        } else {
          return true
        }
      } else {
        return true
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
