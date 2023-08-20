<template>
  <div class="about container">
    <h1>Ranking {{ monthName }} {{ year }}</h1>
    <p>Here is a list of all the submissions</p>
    <div class="card">
      <div class="card-body" v-for="submission in submissions.submissions" :key="submission.userName">
        <div class="row">
          <div class="col-3 col-md-2">
            <div class="square shiny-gold">
              <h5>18</h5>
            </div>
          </div>
          <div class="col-6 col-md-8 text-start d-flex">
            <div class="my-auto">
              <h5 class="card-title m-0">{ submission }</h5>
              <p class="card-text m-0">Song name</p>
              <p class="card-text m-0">BPM</p>
            </div>
          </div>
          <div class="col-3 col-md-2 text-end my-auto">
            <h4 class="m-0 dark-gold">
              <font-awesome-icon icon="star"/>
              +6
            </h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  name: "MonthlyRanking",
  components: { FontAwesomeIcon },
  props: {
    year: Number, // Pass the year as a prop
    month: Number, // Pass the month as a prop
  },
  computed: {
    submissions() {
      // Get submissions for the specified month and year
      return this.$store.getters["ranking/rankingOfMonth"](this.month) || [];
    },
    monthName() {
      const months = [
        "January", "February", "March", "April",
        "May", "June", "July", "August",
        "September", "October", "November", "December"
      ];
      return months[this.month - 1] || "";
    },
  },
};
</script>

<style scoped>
.square {
  width: 100%;
  padding-bottom: 100%;
  background-gradient: linear-gradient(45deg, #f0f0f0, #f8f8f8);
  box-shadow: 0 0 2px 1px rgba(255, 255, 255, 0.8) inset;
  border: 1px solid rgba(0, 0, 0, 0.1);
  position: relative;
}
.square h5 {
  position: absolute;
  font-weight: 800;
  font-size: 1.5rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.card {
  margin-top: 1rem;
  margin-bottom: 1rem;
  box-shadow: 0 0 2px 1px rgba(255, 255, 255, 0.8) inset;
  border: 1px solid rgba(0, 0, 0, 0.1);
}
.shiny-gold {
  background: linear-gradient(228deg, #f7bb24, #dd8000);
  background-size: 400% 400%;

  -webkit-animation: AnimationName 3s ease infinite;
  -moz-animation: AnimationName 3s ease infinite;
  -o-animation: AnimationName 3s ease infinite;
  animation: AnimationName 3s ease infinite;
}

@-webkit-keyframes AnimationName {
  0%{background-position:0% 90%}
  50%{background-position:100% 11%}
  100%{background-position:0% 90%}
}
@-moz-keyframes AnimationName {
  0%{background-position:0% 90%}
  50%{background-position:100% 11%}
  100%{background-position:0% 90%}
}
@-o-keyframes AnimationName {
  0%{background-position:0% 90%}
  50%{background-position:100% 11%}
  100%{background-position:0% 90%}
}
@keyframes AnimationName {
  0%{background-position:0% 90%}
  50%{background-position:100% 11%}
  100%{background-position:0% 90%}
}

.dark-gold {
  color: #b97b00;
}

</style>
