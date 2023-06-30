<template>
  <div class="hello container">
    <div class="row g-2">
      <div class="col-4 mb-3">
        <router-link to="/" class="btn btn-primary btn-sm w-100">Home</router-link>
      </div>
      <div class="col-4 mb-3">
        <router-link to="/submit" class="btn btn-primary btn-sm w-100">Submit PR</router-link>
      </div>
      <div class="col-4 mb-3">
        <router-link to="/history" class="btn btn-primary btn-sm w-100">History</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageNav',
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
.router-link-active {
  background-color: #6c757d;
  color: white;
}
</style>
