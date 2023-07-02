<template>
  <ul class="nav menu nav-pills nav-fill bg-primary py-2">
    <li class="nav-item">
      <router-link to="/" class="btn btn-light w-100">Home</router-link>
    </li>
    <li class="nav-item">
      <router-link to="/submit" class="btn btn-light w-100">Submit PR</router-link>
    </li>
    <li class="nav-item">
      <router-link to="/history" class="btn btn-light w-100">History</router-link>
    </li>
  </ul>
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
  border-color: #6c757d;
  color: #cccccc;
}
</style>
