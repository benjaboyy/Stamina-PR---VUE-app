<template>
  <div class="px-3 py-2 bg-dark menu text-white">
    <div class="container">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <ul class="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
          <li>
            <router-link to="/" class="nav-link text-white">
              <font-awesome-icon icon="house" class="bi d-block mx-auto mb-1" />
              Home
            </router-link>
          </li>
          <li>
            <router-link to="/submit" class="nav-link text-white">
              <font-awesome-icon icon="paper-plane" class="bi d-block mx-auto mb-1" />
              Submit
            </router-link>
          </li>
          <li>
            <router-link to="/history" class="nav-link text-white">
              <font-awesome-icon icon="ranking-star" class="bi d-block mx-auto mb-1" />
              Archive
            </router-link>
          </li>
        </ul>
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
  border-color: #6c757d;
  color: #cccccc;
}
</style>
