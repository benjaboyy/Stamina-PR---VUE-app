<template>
  <div class="container">
    <h1>Submit your PR</h1>
    <p>Submit your score for this moths ranking
      <router-link to="/about" class="btn btn-link "><font-awesome-icon icon="circle-info" /> How it works</router-link></p>
<!--    alert after sending-->
    <div v-if="submitted" class="alert alert-success" role="alert">
      <h4 class="alert-heading">Well done!</h4>
      <p>You successfully submitted personal monthly record</p>
      <hr>
      <p class="mb-0">You can check your submission in the history page or overal ranking after the admin approved it</p>
    </div>
    <router-link to="/" v-if="submitted" class="btn btn-primary mb-5" @click="submitted = !submitted">Back to home</router-link>
    <!--      scan qr code button-->
    <button class="btn btn-secondary py-3 w-100 mb-3">
      <font-awesome-icon icon="ranking-star" /> {{ monthName }} 2024 submission</button>
    <form v-if="!submitted" @submit.prevent="submit">
      <div class="form-floating">
        <input v-model="userName" type="text" class="form-control" name="userName" id="userName" placeholder="tag">
        <label for="floatingInput">Player tag</label>
      </div>
      <div class="form-floating">
        <input v-model="songName" type="text" class="form-control" name="songName" id="songName" placeholder="song">
        <label for="floatingInput">Song name</label>
      </div>
      <div class="form-floating">
        <input v-model="bpm" type="text" class="form-control" name="bpm" id="bpm" placeholder="bpm">
        <label for="floatingInput">BPM</label>
      </div>
      <div class="form-floating">
        <input v-model="difficulty" type="text" class="form-control" name="difficulty" id="difficulty" placeholder="difficulty">
        <label for="floatingInput">Difficulty</label>
      </div>
        <div class="form-floating">
        <input v-model="imageUrl" type="text" class="form-control" name="imageUrl" id="imageUrl" placeholder="photo">
        <label for="floatingInput">Screenshot URL</label>
      </div>
      <button class="btn btn-primary w-100" type="submit"><font-awesome-icon icon="paper-plane" /> Submit</button>
    </form>
  </div>
</template>
<script>
export default {
  name: "SubmitView",
  data() {
    return {
      userName: '',
      songName: '',
      bpm: '',
      imageUrl: '',
      difficulty: '',
      submitted: false,
      months: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ]
    }
  },
  methods: {
    submit() {
      let currentDate = new Date();
      this.$store.dispatch('submission/submitSubmission', {
        userName: this.userName,
        songName: this.songName,
        bpm: this.bpm,
        imageUrl: this.imageUrl,
        difficulty: this.difficulty,
        approved: false,
        date: currentDate.getDate(),
        month: currentDate.getMonth()+1,
        year: currentDate.getFullYear()
      })
      this.resetData();
    },
    resetData() {
      this.userName = '';
      this.songName = '';
      this.bpm = '';
      this.imageUrl = '';
      this.difficulty = '';
      this.submitted = true;
    }
  },
  computed: {
    monthName() {
      let currentDate = new Date();
      return this.months[currentDate.getMonth()] || "";
    },
  }
}
</script>
