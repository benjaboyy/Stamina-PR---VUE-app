<template>
  <div class="about container">
    <h1>Ranking {{ monthName }} {{ year }}</h1>
    <p>Here is a list of all the submissions</p>
    <button class="btn btn-primary mb-3" @click="navigateToPreviousMonth">
      <font-awesome-icon icon="chevron-left"/>
      {{ previousMonthName }}
    </button>
    <button :disabled="isCurrentMonth" :class="isCurrentMonth ? 'btn-dark' : 'btn-primary'" class="btn ms-2 btn-primary mb-3" @click="navigateToNextMonth">
      {{ nextMonthName }}
      <font-awesome-icon icon="chevron-right"/>
    </button>
    <div class="card mb-2" v-for="(submission, index) in sortedSubmissions" :key="submission.userName">
      <div class="card-body">
        <div class="row">
          <div class="col-3 col-md-2 d-flex">
            <div class="square shiny-gold my-auto">
              <h5>{{ submission.difficulty }}</h5>
            </div>
          </div>
          <div class="col-5 col-md-8 text-start d-flex p-0">
            <div class="my-auto">
              <h5 class="card-title m-0">{{ submission.userName }}</h5>
              <p class="card-text m-0">{{ submission.songName }}</p>
              <p class="card-text m-0">Bpm: {{ submission.bpm }}</p>
            </div>
          </div>
          <div class="col-4 col-md-3 text-end my-auto ps-0">
            <h4 class="m-0 dark-gold">
              <font-awesome-icon icon="star"/>
              +{{ stars(index, submission.difficulty) }}
            </h4>
          </div>
        </div>
      </div>
    </div>

    <div class="card mb-2" v-if="sortedSubmissions.length === 0">
      <div class="card-body text-center">
         <h5 class="mb-0">No submissions yet</h5>
      </div>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  name: "MonthlyRanking",
  components: { FontAwesomeIcon },
  data() {
    return {
      submissions: [],
      sortedSubmissions: [],
      months: [
        "January", "February", "March", "April",
        "May", "June", "July", "August",
        "September", "October", "November", "December"
      ]
    };
  },
  async created() {
    await this.getSubmissions();
    await this.sortSubmissions(); // Call the sortSubmissions method here
  },
  watch: {
    // Watch for changes in the route parameters and update the component accordingly
    '$route'() {
      this.getSubmissions();
      this.sortSubmissions();
    },
  },
  methods:{
    // Use Vue Router's push method to navigate without a full page reload
    navigateToPreviousMonth() {
      this.$router.push({ path: `/monthly/${this.previousYear}/${this.previousMonth}` });
    },

    navigateToNextMonth() {
      this.$router.push({ path: `/monthly/${this.nextYear}/${this.nextMonth}` });
    },
    stars(index, difficulty) {
      // Calculate the star count based on the index
      switch (index) {
        case 0:
          return difficulty + '+1';
        default:
          return difficulty;
      }
    },
    getSubmissions() {
      // Get submissions for the specified month and year
      this.submissions = this.$store.getters["ranking/rankingOfMonth"](this.month-1, this.year);
    },
    sortSubmissions() {
      if (this.submissions && typeof this.submissions === 'object') {
        const submissionArray = Object.values(this.submissions.submissions);

        this.sortedSubmissions = submissionArray.sort((a, b) => {
          if (a.difficulty !== b.difficulty) {
            return b.difficulty - a.difficulty; // Higher difficulty comes first
          }
          return b.bpm - a.bpm; // If difficulties are the same, higher bpm comes first
        });
      } else {
        // Handle the case where this.submissions is not a valid object
        this.sortedSubmissions = [];
      }
    }

  },
  computed: {
    year() {
      return this.$route.params.year;
    },
    month() {
      return this.$route.params.month;
    },
    monthName() {
      return this.months[this.month - 1] || "";
    },
    previousMonthName() {
      return this.months[this.previousMonth - 1] || "";
    },
    nextMonthName() {
      return this.months[this.nextMonth - 1] || "";
    },
    isCurrentMonth() {
      const now = new Date();
      return now.getFullYear() === parseInt(this.year) && now.getMonth() + 1 === parseInt(this.month, 10);
    },
    previousMonth() {
      if (this.month == 1) {
        return 12;
      } else {
        return this.month - 1;
      }
    },
    previousYear() {
      if (this.month == 1) {
        return this.year - 1;
      } else {
        return this.year;
      }
    },
    nextMonth() {
      const currentMonth = parseInt(this.month, 10);
      if (currentMonth == 12) {
        return 1; // If the current month is December, go to January (1) of the same year.
      } else {
        return currentMonth + 1; // Otherwise, increment the current month by 1.
      }
    },
    nextYear() {
      if (this.month == 12) {
        return parseInt(this.year) + 1; // If the current month is December, increment the year by 1.
      } else {
        return this.year; // Otherwise, stay in the same year.
      }
    }
  }
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
