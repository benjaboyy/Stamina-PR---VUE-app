<template>
  <div class="about container">
    <PageNav/>
    <h1>This is an ranking page</h1>
    <p>Here is a list of all the submissions</p>
    <h3>2023</h3>
    <div class="card">
      <div class="card-body">
        <div class="row">
          <div class="col-4 col-md-2">
            <div class="square">
              <h5>17</h5>
            </div>
          </div>
          <div class="col-8 col-md-10 text-start">
            <h5 class="card-title m-0">Behy</h5>
            <p class="card-text m-0">Song name</p>
            <p class="card-text m-0">BPM</p>
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

<style scoped>
.square {
  width: 100%;
  padding-bottom: 100%;
  background-color: #eee;
  position: relative;
}
.square h5 {
  position: absolute;
  font-weight: 800;
  font-size: 1.5rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
