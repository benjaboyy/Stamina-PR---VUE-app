<template>
  <div class="container">
    <h1>Submit your PR</h1>
    <p v-if="!submitted">Submit your score for this moths ranking
      <router-link to="/about" class="btn btn-link "><font-awesome-icon icon="circle-info" /> How it works</router-link>
    </p>
<!--    alert after sending-->
    <DotLottieVue
        v-if="submitted"
        class="logo my-0 mx-auto"
        autoplay loop
        src="https://lottie.host/6a8c022d-cc1e-4dbe-857c-83b3786e021d/hAAooLvrTv.json" />
    <div v-if="submitted" class="alert alert-success" role="alert">
      <h4 class="alert-heading">Well done!</h4>
      <p class="mb-0">You can check your submission in the history page or overall ranking after the admin approved it</p>
    </div>
    <router-link to="/" v-if="submitted" class="btn btn-primary mb-5" @click="submitted = !submitted">Back to home</router-link>
    <!--      scan qr code button-->
    <button v-if="!submitted" class="btn btn-secondary py-3 w-100 mb-3">
      <font-awesome-icon icon="ranking-star" /> {{ monthName }} 2024 submission</button>
    <form v-if="!submitted" @submit.prevent="submit">
      <div class="form-floating">
        <input v-model="userName" type="text" class="form-control" name="userName" id="userName" placeholder="tag">
        <label for="floatingInput">Player tag</label>
      </div>
      <div v-if="noValidTag" class="alert alert-warning mt-2" role="alert">Not a valid tag</div>
      <div class="form-floating">
        <input v-model="songName" type="text" class="form-control" name="songName" id="songName" placeholder="song">
        <label for="floatingInput">Song name</label>
      </div>
      <div v-if="noValidName" class="alert alert-warning mt-2" role="alert">Not a valid name</div>
      <div class="form-floating">
        <input v-model="bpm" type="text" class="form-control" name="bpm" id="bpm" placeholder="bpm">
        <label for="floatingInput">BPM</label>
      </div>
      <div v-if="noValidBpm" class="alert alert-warning mt-2" role="alert">Not a valid BPM</div>
      <div class="form-floating">
        <input v-model="difficulty" type="text" class="form-control" name="difficulty" id="difficulty" placeholder="difficulty">
        <label for="floatingInput">Difficulty</label>
      </div>
      <div v-if="noValidDifficulty" class="alert alert-warning mt-2" role="alert">Not a valid difficulty</div>
      <p>How to prove your score?</p>
      <div class="card mb-3">
        <div class="card-body text-start">
          <a class="btn btn-primary float-end" href="https://discord.com/invite/y8fDsxa6Aj">Discord</a>
          <div class="">
            <label class=" active">
              <input type="radio" name="options" value="set" id="option1"  v-model="toggleProof" autocomplete="off" checked> Screenshot URL
            </label>
          </div>
          <div>
            <label class="">
              <input type="radio" name="options"  value="" id="option2"  v-model="toggleProof" autocomplete="off"> Upload in Discord
            </label>
          </div>
        </div>
      </div>
      <div v-if="toggleProof" class="form-floating">
        <input v-model="imageUrl" type="text" class="form-control" name="imageUrl" id="imageUrl" placeholder="photo">
        <label for="floatingInput">Screenshot URL</label>
      </div>
      <div v-if="noValidUrl" class="alert alert-warning mt-2" role="alert">You need to provide a valid URL of the screenshot</div>
      <button class="btn btn-primary w-100" type="submit"><font-awesome-icon icon="paper-plane" /> Submit</button>
    </form>
  </div>
</template>
<script>

import { DotLottieVue } from '@lottiefiles/dotlottie-vue'
export default {
  name: "SubmitView",
  components: {
    DotLottieVue
  },
  data() {
    return {
      userName: '',
      songName: '',
      bpm: '',
      toggleProof: 'set',
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
      ],
      noValidTag: false,
      noValidName: false,
      noValidBpm: false,
      noValidDifficulty: false,
      noValidUrl: false
    }
  },
  methods: {
    toggleTheProof() {
      this.toggleProof = !this.toggleProof;
    },
    submit() {
      this.resetErrors();
      let currentDate = new Date();
      if (this.userName === '') {
        this.noValidTag = true;
        return;
      }
      if (this.songName === '') {
        this.noValidName = true;
        return;
      }
      if (this.bpm === '' || isNaN(this.bpm) || this.bpm > 500) {
        this.noValidBpm = true;
        return;
      }
      if (this.difficulty === '' || isNaN(this.difficulty) || this.difficulty > 50) {
        this.noValidDifficulty = true;
        return;
      }
      if ((this.imageUrl === '' || !this.imageUrl.includes('http')) && this.toggleProof === 'set') {
        this.noValidUrl = true;
        return;
      }
      this.$store.dispatch('submission/submitSubmission', {
        userName: this.userName.toLowerCase(),
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
      this.resetErrors();
    },
    resetErrors() {
      this.noValidTag = false;
      this.noValidName = false;
      this.noValidBpm = false;
      this.noValidDifficulty = false;
      this.noValidUrl = false;
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
