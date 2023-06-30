<template>
  <div class="about container">
    <PageNav/>
    <h1>This is an submission page</h1>
    <p>Here is a form to submit your data for your personal record</p>
    <form action="">
      <div class="form-floating">
        <input type="text" class="form-control" name="player_tag" id="player_tag" placeholder="tag">
        <label for="floatingInput">Player tag</label>
      </div>
      <div class="form-floating">
        <input type="text" class="form-control" name="song_name" id="song_name" placeholder="song">
        <label for="floatingInput">Song name</label>
      </div>
      <div class="form-floating">
        <input type="text" class="form-control" name="bpm" id="bpm" placeholder="bpm">
        <label for="floatingInput">BPM</label>
      </div>
      <div class="form-floating">
        <input type="text" class="form-control" name="photo_link" id="photo_link" placeholder="photo">
        <label for="floatingInput">Screenshot URL</label>
      </div>
      <button class="btn btn-primary w-100" type="submit">Submit</button>
    </form>
  </div>
</template>
<script>
import PageNav from "@/components/PageNav";
export default {
  components: {PageNav}
}
</script>