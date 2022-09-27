<template>
  <div class="q-pa-md">
    <div class="row">
      <div class="col-6 titulo flex">
        <h5 class="text-bold">ANIMAIS PARA ADOÇÃO</h5>
        <div style="align-self: center" class="q-ml-lg">
          <span>Filtros</span>
          <q-icon name="filter_list" style="align-self: center" size="lg"/>
        </div>

      </div>
    </div>
    <div class="row">
      <div class="col-md-4 col-12">
        <cardInformacaoAnimal />
      </div>
      <div class="col-md-4 col-12">
        <cardInformacaoAnimal />
      </div>
      <div class="col-md-4 col-12">
        <cardInformacaoAnimal />
      </div>
    </div>
    <div class="row flex flex-center">
      <div class="col-md-4 col-12">
        <cardInformacaoAnimal />
      </div>
      <div class="col-md-4 col-12">
        <cardInformacaoAnimal />
      </div>
      <div class="col-md-4 col-12">
        <cardInformacaoAnimal />
      </div>
    </div>
  </div>
</template>

<script>
import cardInformacaoAnimal from "components/cardInformacaoAnimal.vue";
export default {
  name: "AdoptPage",
  components: {
    cardInformacaoAnimal
  }
}
</script>

<style scoped>
.titulo{
  margin-left: 50px;
}
</style>
