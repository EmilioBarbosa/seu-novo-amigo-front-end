<template>
  <div>
      <div class="row q-mt-lg q-mb-lg">
        <div class="col-12 text-center">
          <h5 class="text-bold q-pa-none q-ma-none">ANIMAIS PARA ADOÇÃO</h5>
        </div>
      </div>
      <div class="row q-pa-md gutter flex flex-center">
        <div class="col-sm-12 col-md-6 q-mb-lg col-lg-3 flex flex-center">
          <AnimalInformationCard />
        </div>
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

</style>
