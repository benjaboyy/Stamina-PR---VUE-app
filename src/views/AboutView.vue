<template>
  <PageNav/>
  <div class="about">
    <PageNav/>
    <img class="logo mb-3" alt="Vue logo" src="../assets/logo.png">
    <h1>About Stamina PR</h1>
    <p>Stamina PR is a website that allows you to submit your scores for the Dutch Stamina PR rankings. <br>
      Every month, the scores will be checked and the ranking will be updated. <br>
      You are allowed to update your score as many times as you want, but only the highest score will be used for the ranking.</p>
    <h3>Mothly submissions</h3>
    <p>Every month, a ranking will be made based on the points you have submitted. you get points based on your placement in the ranking.</p>
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
        <td>6 points</td>
      </tr>
      <tr>
        <td>2nd place</td>
        <td>4 points</td>
      </tr>
      <tr>
        <td>3rd place</td>
        <td>3 points</td>
      </tr>
      <tr>
        <td>4th place</td>
        <td>2 points</td>
      </tr>
      <tr>
        <td>5th place</td>
        <td>2 points</td>
      </tr>
      <tr>
        <td>All other places</td>
        <td>1 point</td>
      </tr>
      </tbody>
    </table>
    <h3>All time ranking</h3>
    <p>There is also an all time ranking. This ranking is based on the total amount of points you have submitted.</p>
    <h3>Hall of fame</h3>
    <p>Here you can see the highest scores ever submitted for every participant.</p>
    <h3>How to submit</h3>
    <p>On the submit page, you can submit your scores. You can do this by scanning a QR code, or by filling in the form. <br>
      If you are not using the QR code, you will need to make a screenshot of your score and upload it.</p>
  </div>
</template>

<script>
import PageNav from "@/components/PageNav";
export default {
  components: {PageNav}
}
</script>

<style scoped>
table {
  width: 100%;
  max-width: 500px;
  border: 1px solid #dee2e6;
}
</style>

