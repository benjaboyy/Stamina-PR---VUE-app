<template>
  <div class="about container">
    <PageNav/>
    <h1>PR History</h1>
    <p>Here is a list of all the submissions</p>
    <h3>2023</h3>
    <div class="card mb-3">
      <router-link to="/ranking" class="row g-0">
        <div class="col-md-12">
          <div class="card-body">
            <h5 class="card-title m-0">Juni</h5>
          </div>
        </div>
      </router-link>
    </div>
    <div class="card mb-3">
      <div class="row g-0">
        <div class="col-md-12">
          <div class="card-body">
            <h5 class="card-title m-0">Mei</h5>
          </div>
        </div>
      </div>
    </div>
    <div class="card mb-3">
      <div class="row g-0">
        <div class="col-md-12">
          <div class="card-body">
            <h5 class="card-title m-0">April</h5>
          </div>
        </div>
      </div>
    </div>

    <h3>2022</h3>
    <div class="card mb-3">
      <div class="row g-0">
        <div class="col-md-12">
          <div class="card-body">
            <h5 class="card-title m-0">December</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PageNav from "@/components/PageNav";
export default {
  components: {PageNav}
}
</script>
