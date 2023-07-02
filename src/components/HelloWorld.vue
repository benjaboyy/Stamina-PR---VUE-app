<template>
  <div class="hello container">
    <div class="row">
      <div class="col-12 mb-3">
        <router-link to="/submit" class="btn btn-primary btn-lg w-100"><font-awesome-icon icon="paper-plane" /> Submit</router-link>
      </div>
      <div class="col-12 mb-3">
        <router-link to="/ranking" class="btn btn-primary btn-lg w-100"><font-awesome-icon icon="ranking-star" /> All Time Ranking</router-link>
      </div>
      <div class="col-12 mb-3">
        <router-link to="/hallOfFame" class="btn btn-primary btn-lg w-100"><font-awesome-icon icon="trophy" /> Hall of fame</router-link>
      </div>
      <div class="col-12 mb-3">
        <router-link to="/history" class="btn btn-primary btn-lg w-100"><font-awesome-icon icon="timeline" /> History</router-link>
      </div>
      <div class="col-12 mb-3">
        <router-link to="/about" class="btn btn-link btn-lg"><font-awesome-icon icon="circle-info" /> About the stamina PR</router-link>
      </div>
<!--      payoff-->
      <p class="col-12 text-primary text-center mt-5">Made with <font-awesome-icon icon="heart" /> by <a href="https://ddrexp.nl">DDR-EXP</a></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
</style>
