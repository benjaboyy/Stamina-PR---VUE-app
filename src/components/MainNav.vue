<template>
  <div class="hello container">
    <div class="row g-3">
      <div class="col-12">
        <router-link to="/submit" class="btn btn-primary py-2 btn-lg w-100"><font-awesome-icon icon="paper-plane" /> Submit PR</router-link>
      </div>
      <div class="col-6">
        <router-link to="/monthly" class="btn btn-dark d-flex square w-100">
          <div class="m-auto">
            <font-awesome-icon class="fa-lg" icon="ranking-star" />
            <br> Ranking last month
          </div>
        </router-link>
      </div>
      <div class="col-6">
        <router-link to="/ranking" class="btn btn-secondary d-flex square w-100">
          <div class="m-auto">
            <font-awesome-icon class="fa-lg" icon="ranking-star" />
            <br> Seasonal Ranking
          </div>
        </router-link>
      </div>
      <div class="col-6">
        <router-link to="/hallOfFame" class="btn btn-secondary d-flex  py-2 square w-100">
          <div class="m-auto">
            <font-awesome-icon class="fa-lg" icon="trophy" />
            <br> Hall of fame
          </div>
        </router-link>
      </div>
      <div class="col-6">
        <router-link to="/history" class="btn btn-secondary d-flex  py-2 square w-100">
          <div class="m-auto">
            <font-awesome-icon class="fa-lg" icon="timeline" />
            <br> Archive
          </div>
        </router-link>
      </div>
      <div class="col-12">
        <router-link to="/about" class="btn btn-link "><font-awesome-icon icon="circle-info" /> About the stamina PR</router-link>
      </div>
<!--      payoff-->
      <p class="col-12 text-primary text-center mt-5">Made with <font-awesome-icon icon="heart" /> by <a href="https://ddrexp.nl">DDR-EXP</a></p>
<!--      admin login link-->
      <router-link to="/verify" class="col-12 text-primary small text-center mt-1">Admin login</router-link>
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
.square {
  min-height: 100px;
}
</style>
