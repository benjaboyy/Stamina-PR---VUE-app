<template>
  <div class="about container">
    <PageNav/>
    <h1>The Shop</h1>
    <p>Points earned can be spend to buy items in the shop</p>
    <div v-for="(item, index) in shopItems" :key="index" class="card mt-2">
      <div class="card-body">
        <div class="row">
          <div class="col-3 col-md-2 d-flex">
            <div class="iconSquare my-auto d-flex">
              <h1 class="my-auto">{{ item.icon }}</h1>
            </div>
          </div>
          <div class="col-6 col-md-8 text-start d-flex">
            <div class="my-auto">
              <h5 class="card-title m-0">{{ item.name }}</h5>
              <p class="card-text m-0"><strong>{{ item.description }}</strong></p>
            </div>
          </div>
          <div class="col-3 col-md-2 text-end my-auto ps-0">
            <h4 class="m-0 dark-gold">
              <font-awesome-icon icon="star"/>
              {{ item.amount }}
            </h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShopView',
  data() {
    return {
      shopItems: [
          // red candy bar 'high chew', blue candybar 'high chew', green candybar 'high chew', stamina socks
        {icon: '🍬', name: 'Red High Chew', description: 'A red candy bar', amount: 15},
        {icon: '🍬', name: 'Blue High Chew', description: 'A blue candy bar', amount: 30},
        {icon: '🍬', name: 'Green High Chew', description: 'A green candy bar', amount: 40},
        {icon: '🧦', name: 'Stamina Socks', description: 'Socks that give you stamina', amount: 50}
      ]
    }
  }
}

</script>

<style scoped>
table {
  width: 100%;
  max-width: 500px;
  border: 1px solid #dee2e6;
}
.iconSquare {
  width: 50px;
  height: 50px;
  //background-color: #fff;
  border: 1px solid #f5c6cb;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

