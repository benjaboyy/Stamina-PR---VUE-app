<template>
  <div class="about container">
    <h1>This is an verify page</h1>
    <PageNavAdmin />
    <h3>An list of all the submissions</h3>
<!--    if no unapproved submissions than show message-->
    <div v-if="unapprovedSubmissions.length === 0 && !showAll">
      <div class="my-3">
        <i>- No unapproved submissions -</i>
      </div>
    </div>
    <div v-for="submission in submissions" :key="submission.id">
      <transition name="fade">
        <div v-if="submission.approved === false || showAll" class="card mb-3">
          <div class="card-body" :class="{'bg-success': submission.approved === true}">
            <div class="row g-3">
              <div class="col-md-6">
                <img :src="submission.imageUrl" class="img-fluid rounded" alt="...">
              </div>
              <div class="col-md-6 d-flex text-md-start">
                <div class="m-auto ms-md-0">
                  <h5 class="card-title my-1">Player: {{ submission.userName }}</h5>
                  <p class="card-text my-1">Song: {{ submission.songName }}</p>
                  <p class="card-text my-1">BPM: {{ submission.bpm }}</p>
                  <p class="card-text my-1">Difficulty: {{ submission.difficulty }}</p>
                  <button v-if="submission.approved === false" class="btn btn-success me-2" @click="verifySubmission(submission)">Verify</button>
                  <button class="btn btn-danger" @click="deleteSubmission(submission)">Remove</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
    <button class="btn btn-primary mb-5" @click="showAll = !showAll">Show all</button>
  </div>
</template>

<script>
import PageNavAdmin from "@/components/PageNavAdmin.vue";

export default {
  components: {PageNavAdmin},
  data() {
    return {
      showAll: false,
    }
  },
  methods: {
    verifySubmission(submission) {
      this.$store.dispatch('submission/approveSubmission', submission)
      this.$store.dispatch('ranking/addToRanking', submission)
    },
    deleteSubmission(submission) {
      this.$store.dispatch('submission/deleteSubmission', submission)
    }
  },
  computed: {
    submissions() {
      return this.$store.getters['submission/getSubmissions']
    },
    unapprovedSubmissions() {
      return this.submissions.filter(submission => !submission.approved)
    }
  },
}
</script>

<style scoped>
  .img-fluid {
    max-width: 100%;
    height: auto;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
    opacity: 1;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }

</style>
