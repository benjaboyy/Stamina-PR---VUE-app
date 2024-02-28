<template>
  <div class="menu">
    <transition name="fade">
      <div v-show="showMore" class="px-3 py-2 transitionMenu text-white">
        <div class="container">
          <div class="row subMenu g-2">
            <div class="col-12">
              <router-link @click="toggleShowMore" :to="'/monthly/' + currentYear + '/' + currentMonth" class="btn btn-primary d-flex w-100">
                <div class="m-auto">
                  <font-awesome-icon class="fa-lg" icon="ranking-star" />
                  Ranking this month
                </div>
              </router-link>
            </div>
            <div class="col-12">
              <router-link @click="toggleShowMore" to="/ranking" class="btn btn-primary d-flex w-100">
                <div class="m-auto">
                  <font-awesome-icon class="fa-lg" icon="ranking-star" />
                  Seasonal Ranking
                </div>
              </router-link>
            </div>
            <div class="col-12">
              <router-link @click="toggleShowMore" to="/hallOfFame" class="btn btn-primary d-flex w-100">
                <div class="m-auto">
                  <font-awesome-icon class="fa-lg" icon="trophy" />
                  Hall of fame
                </div>
              </router-link>
            </div>
            <div class="col-12">
              <router-link @click="toggleShowMore" to="/history" class="btn btn-primary d-flex w-100">
                <div class="m-auto">
                  <font-awesome-icon class="fa-lg" icon="timeline" />
                  Archive
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </transition>
    <div class="px-3 py-2 bg-dark text-white">
      <div class="container">
        <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <ul class="nav w-100 col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
            <li>
              <router-link @click="closeShowMore" to="/" class="nav-link text-white">
                <font-awesome-icon icon="house" class="bi d-block mx-auto mb-1" />
                Home
              </router-link>
            </li>
            <li>
              <router-link @click="closeShowMore" to="/submit" class="nav-link text-white">
                <font-awesome-icon icon="paper-plane" class="bi d-block mx-auto mb-1" />
                Submit
              </router-link>
            </li>
            <li>
              <a @click="toggleShowMore" class="clickEvent nav-link text-white" :class="{ active: showMore }">
                <font-awesome-icon icon="ellipsis" class="bi d-block mx-auto mb-1" />
                More
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageNav',
  data () {
    return {
      showMore: false,
    }
  },
  methods: {
    toggleShowMore () {
      this.showMore = !this.showMore
    },
    closeShowMore () {
      this.showMore = false
    }
  },
  computed: {
    currentYear () {
      const date = new Date()
      return date.getFullYear()
    },
    currentMonth () {
      const date = new Date()
      return date.getMonth() + 1
    }
  },
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
.router-link-active, .active {
  background-color: #6c757d;
  border-color: #6c757d;
  color: #cccccc;
}
.z-2 {
  z-index: 999;
}

li {
  width: 25%;
}
.clickEvent {
  cursor: pointer;
}
.fade-enter-active {
  transition: opacity 0.3s ease;
}

.fade-enter {
  transition: opacity 0.3s ease;
}

.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-leave-to, .fade-enter-from  {
  opacity: 0;
}

.subMenu {
  width: 50%;
  margin-left: auto;
}

@media (max-width: 768px) {
  .subMenu {
    width: 100%;
  }
}

</style>
