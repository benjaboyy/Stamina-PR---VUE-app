<template>
  <PageNav/>
  <div class="about container">
    <h1>This is an submission page</h1>
    <p>Here is a form to submit your data for your personal record</p>
<!--    alert after sending-->
    <div v-if="submitted" class="alert alert-success" role="alert">
      <h4 class="alert-heading">Well done!</h4>
      <p>You successfully submitted personal monthly record</p>
      <hr>
      <p class="mb-0">You can check your submission in the history page or overal ranking after the admin approved it</p>
    </div>
    <button v-if="submitted" class="btn btn-primary mb-5" @click="submitted = !submitted">Submit another PR</button>
    <form v-if="!submitted" @submit.prevent="submit">
<!--      scan qr code button-->
      <button class="btn btn-secondary py-3 w-100 mb-3" type="submit">
        <font-awesome-icon icon="qrcode" /> Scan QR code</button>
      <div class="form-floating">
        <input v-model="player_tag" type="text" class="form-control" name="player_tag" id="player_tag" placeholder="tag">
        <label for="floatingInput">Player tag</label>
      </div>
      <div class="form-floating">
        <input v-model="song_name" type="text" class="form-control" name="song_name" id="song_name" placeholder="song">
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
import PageNav from "@/components/PageNav";
export default {
  components: {PageNav},
  name: "SubmitView",
  data() {
    return {
      player_tag: '',
      song_name: '',
      bpm: '',
      imageUrl: '',
      difficulty: '',
      submitted: false
    }
  },
  methods: {
    submit() {
      console.log(this.player_tag, this.song_name, this.bpm, this.imageUrl);
      this.$store.dispatch('submission/submitSubmission', {
        player_tag: this.player_tag,
        song_name: this.song_name,
        bpm: this.bpm,
        imageUrl: this.imageUrl,
        difficulty: this.difficulty,
        approved: false
      })
      this.resetData();
    },
    resetData() {
      this.player_tag = '';
      this.song_name = '';
      this.bpm = '';
      this.imageUrl = '';
      this.difficulty = '';
      this.submitted = true;
    }
  }
}
</script>