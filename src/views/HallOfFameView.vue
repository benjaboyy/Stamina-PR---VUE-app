<template>
  <div class="about container">
    <h1>Hall of fame</h1>
    <p>Dutch community highest PR list</p>
    <!-- Loop through sortedSubmissions and create a card for each submission -->
    <div v-for="(submission, index) in sortedSubmissions" :key="index" class="card">
      <div class="float-end text-primary"><small>12-12-2023</small></div>
      <div class="card-body">
        <div class="row">
          <div class="col-3 col-md-2">
            <div class="square shiny-gold">
              <h5>{{ submission.difficulty }}</h5>
            </div>
          </div>
          <div class="col-9 col-md-10 text-start d-flex">
            <div class="my-auto">
              <h5 class="card-title m-0">{{ submission.userName }}</h5>
              <p class="card-text m-0">Song: <strong>{{ submission.songName }}</strong></p>
              <p class="card-text m-0">BPM: <strong>{{ submission.bpm }}</strong></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HallOfFame",
  data() {
    return {
      submissions: [],
      sortedSubmissions: [],
      year: 2024
    };
  },
  created() {
    this.reset();
  },
  methods: {
    async reset() {
      await this.loadRankings();
    },
    async loadRankings() {
      await this.getSubmissions();
      await this.sortSubmissions();
    },
    async getSubmissions() {
      this.submissions = await this.$store.getters['ranking/getHighestRankingScores'];
      // Further processing or actions related to submissions
    },
    sortSubmissions() {
      if (this.submissions && Object.keys(this.submissions).length > 0) {
        const submissionArray = Object.entries(this.submissions).map(([userName, submission]) => ({
          userName,
          ...submission,
        }));

        this.sortedSubmissions = submissionArray.sort((a, b) => {
          return b.difficulty - a.difficulty;
        });
      } else {
        // Handle the case where this.submissions is not a valid object
        this.sortedSubmissions = [];
      }
    },
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
  background-color: #f9a602;
}
.dark-gold {
  color: #b97b00;
}
</style>
