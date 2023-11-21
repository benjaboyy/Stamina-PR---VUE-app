<template>
  <div>
    <MonthRank :year="year" :month="month" />
    <router-link to="/history" class="btn btn-primary mt-3 px-4">
      <div class="m-auto">
        <font-awesome-icon class="fa-lg" icon="timeline" /> Back to archive
      </div>
    </router-link>
  </div>
</template>

<script>
import MonthRank from "@/components/MonthRank";
export default {
  name: "MonthlyView",
  components: {MonthRank},
  data() {
    return {
      year: this.$route.params.year,
      month: this.$route.params.month
    }
  },
  // example of url
  // http://localhost:8080/monthly/2023/7
}
</script>