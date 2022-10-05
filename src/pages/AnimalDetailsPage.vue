<template>
  <div class="container">
    <div class="images">
      <img src="https://cdn.quasar.dev/img/mountains.jpg">
    </div>
    <div class="information">
      <h3>Luke</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "AnimalDetailsPage"
}
</script>

<style scoped>
.container{
  padding: 50px;
  display: grid;
  grid-template-areas: "images information";
  grid-template-columns: 50% 50%;
  grid-template-rows: 50px auto 100px;
}
.images{
  grid-area: images;
}
.information{
  grid-area: information;
}
</style>
