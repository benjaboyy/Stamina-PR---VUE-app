<template>
  <div class="about">
    <PageNav/>
    <img class="logo mb-3 px-3" alt="Vue logo" src="../assets/logo.png">
    <h1>About Stamina PR</h1>
    <p>Stamina PR is a website that allows you to submit your scores for the Dutch Stamina PR rankings. <br>
      Every month, the scores will be checked and the ranking will be updated. <br>
      You are allowed to update your score as many times as you want (keep reasonable), but only the highest score will be used for the ranking for the current month.</p>
    <h3>Monthly submissions</h3>
    <p>Every month, a ranking will be made based on the scores submitted. <br>
      You will receive points equal to your difficulty and 1st place will get +1 extra. <br>
      Your points will be added to your lifetime total and can be used as currency to purchase items in the stamina shop. <br>
      <router-link to="/shop" class="btn btn-outline-primary mb-2">
        See Shop
      </router-link><br>
      Items can be traded at conventions where DDREXP is hosting, <br>
      at the Games Guild in Alphen aan den Rijn or at Pixel Arcade in 's Hertogenbosch.</p>
    <h3>All time ranking</h3>
    <p>This ranking is based on the total amount of points you have for submitting in this season.</p>
    <h3>Hall of fame</h3>
    <p>Here you can see the highest scores submitted for every participant in this season</p>
    <h3>How to submit</h3>
    <p>On the submit page, you can submit your scores. You can do this by scanning a QR code, or by filling in the form. <br>
      If you are not using the QR code, you will need to make a screenshot of your score and upload it. <br>
    Scores need to be confirmed manually before they are added to the ranking <br>
      <router-link to="/submit" class="btn btn-outline-primary mb-2">
        Submit Score
      </router-link></p>
    <h3>Archive</h3>
    <p>All confirmed submissions can be viewed here also from previous seasons</p>
  </div>
</template>

<script>

</script>

<style scoped>
table {
  width: 100%;
  max-width: 500px;
  border: 1px solid #dee2e6;
}
</style>

