<template>
  <div class="about">
    <PageNav/>
    <img class="logo mb-3" alt="Vue logo" src="../assets/logo.png">
    <h1>About Stamina PR</h1>
    <p>Stamina PR is a website that allows you to submit your scores for the Dutch Stamina PR rankings. <br>
      Every month, the scores will be checked and the ranking will be updated. <br>
      You are allowed to update your score as many times as you want (keep reasonable), but only the highest score will be used for the ranking for the current month.</p>
    <h3>Monthly submissions</h3>
    <p>Every month, a ranking will be made based on the scores you have submitted. you get points based on your placement in the ranking.<br>
      You can not choose the month so submit within the month you have played the song</p>
    <table class="table-borderless table-striped table text-start mx-auto">
      <thead>
      <tr>
        <th>Place</th>
        <th>Points</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>1st place</td>
        <td>4 points</td>
      </tr>
      <tr>
        <td>2nd place</td>
        <td>3 points</td>
      </tr>
      <tr>
        <td>3rd place</td>
        <td>2 points</td>
      </tr>
      <tr>
        <td>4th place</td>
        <td>2 points</td>
      </tr>
      <tr>
        <td>All other places</td>
        <td>1 point</td>
      </tr>
      </tbody>
    </table>
    <h3>All time ranking</h3>
    <p>This ranking is based on the total amount of points you have for submitting in this season.</p>
    <h3>Hall of fame</h3>
    <p>Here you can see the highest scores submitted for every participant in this season</p>
    <h3>How to submit</h3>
    <p>On the submit page, you can submit your scores. You can do this by scanning a QR code, or by filling in the form. <br>
      If you are not using the QR code, you will need to make a screenshot of your score and upload it. <br>
    Scores need to be confirmed manually before they are added to the ranking</p>
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

