<template>
  <div>
    <q-layout class="q-mt-lg" container style="height: 100vh">
      <div class="row q-pl-md">
        <div class="col-auto">
          <h5 class="text-bold q-pa-none q-ma-none">ANIMAIS PARA ADOÇÃO</h5>
        </div>
      </div>
      <div class="row justify-between q-pa-md">
        <div class="col-auto flex flex-sm-center">
          <AnimalInformationCard />
        </div>
        <div class="col-auto">
          <AnimalInformationCard />
        </div>
        <div class="col-auto">
          <AnimalInformationCard />
        </div>
        <div class="col-auto">
          <AnimalInformationCard />
        </div>
        <div class="col-auto">
          <AnimalInformationCard />
        </div>
      </div>
    </q-layout>
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
