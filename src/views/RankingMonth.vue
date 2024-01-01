<template>
  <div>
    <MonthRank/>
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
}
</script>