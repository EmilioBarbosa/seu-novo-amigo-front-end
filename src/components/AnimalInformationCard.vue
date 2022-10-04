<template>
  <q-card class="card rounded-borders cursor-pointer" style="width: 230px;height: 336px;">
    <img src="https://cdn.quasar.dev/img/mountains.jpg" style="height: 70%;">

    <q-card-section class="text-black">
      <div class="text-h6" style="color: #6A4A6D">Luke</div>
      <div class="text-subtitle2 text-grey-14">SRD</div>
    </q-card-section>
  </q-card>
</template>

<script>

export default {
  name: "cardInformacaoAnimal",
}
</script>

<style scoped>
.card:hover{
  box-shadow: 3px 3px 3px 3px #6A4A6D;
}
</style>
