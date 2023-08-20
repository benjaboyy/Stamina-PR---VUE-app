<template>
  <div>
    <MonthRank :year="2023" :month="7" />
  </div>
</template>

<script>
import MonthRank from "@/components/MonthRank";
export default {
  name: "MonthlyView",
  components: {MonthRank}
}
</script>