<template>
  <div class="wrapper">
    <div class="title">
      <h5 class="text-bold q-pa-none q-ma-none">ANIMAIS PARA ADOÇÃO</h5>
    </div>
    <div class="filters">
      <q-select outlined label="Estado" bg-color="white"/>
      <q-select outlined label="Cidade" bg-color="white"/>
    </div>
    <div class="cards">
      <AnimalInformationCard />
      <AnimalInformationCard />
      <AnimalInformationCard />

    </div>
  </div>
</template>

<script>
import AnimalInformationCard from "components/AnimalInformationCard.vue";
export default {
  name: "AdoptPage",
  components: {
    AnimalInformationCard
}
}
</script>

<style scoped>
.wrapper{
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
}
.title{
  grid-column: 1 / 2;
  grid-row: 1;
}
.cards{
  grid-column: 1/4;
  grid-row: 2;
}
</style>
