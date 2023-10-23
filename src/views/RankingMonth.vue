<template>
  <div>
    <MonthRank :year="year" :month="month" />
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