<template>
  <div class="about container">
    <h1>Points ranking</h1>
    <h3>Season 1</h3>
    <p class="text-secondary">Here is a list of all the players on points earned this season</p>
    <div class="card">
      <div class="card-body">
        <div class="row">
          <div class="col-4 col-md-3">
            <div class="square shiny-gold">
              <h5>
                <font-awesome-icon icon="star"/> 120
              </h5>
            </div>
          </div>
          <div class="col-8 col-md-9 text-start d-flex">
            <h5 class="card-title m-0 my-auto">Behy</h5>
          </div>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-body">
        <div class="row">
          <div class="col-4 col-md-3">
            <div class="square">
              <h5>
                <font-awesome-icon icon="star"/> 114
              </h5>
            </div>
          </div>
          <div class="col-8 col-md-9 text-start d-flex">
            <h5 class="card-title m-0 my-auto">ASS</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style scoped>
.square {
  width: 100%;
  height: 50px;
  background-gradient: linear-gradient(45deg, #f0f0f0, #f8f8f8);
  box-shadow: 0 0 2px 1px rgba(255, 255, 255, 0.8) inset;
  border: 1px solid rgba(0, 0, 0, 0.1);
  position: relative;
  display: flex;
}
.square h5 {
  font-weight: 800;
  font-size: 1.5rem;
  margin: auto;
}
.card {
  margin-top: 1rem;
  margin-bottom: 1rem;
  box-shadow: 0 0 2px 1px rgba(255, 255, 255, 0.8) inset;
  border: 1px solid rgba(0, 0, 0, 0.1);
}
.shiny-gold {
  background-color: #f9a602;
}
</style>
