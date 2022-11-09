<template>
  <div class="container">
      <div class="info items-center block">
        <h4 class="text-bold">Animais para adoção</h4>
        <div class="flex filtros">
          <q-select outlined label="Estado" dense class="select" bg-color="white"/>
          <q-select outlined label="Cidade" dense class="select cidade" bg-color="white"/>
        </div>
      </div>
    <displayAllAnimals class="cards"/>
  </div>
</template>

<script>
import DisplayAllAnimals from "pages/DisplayAllAnimals.vue";
export default {
  name: "AdoptPage",
  components: {
    DisplayAllAnimals
}
}
</script>

<style scoped>

.container{
  display: grid;
  grid-template-areas:
  ". info ."
  ". cards .";
  grid-template-columns: 10% 80% 10%;
  grid-template-rows: 0.5fr auto;
  margin-bottom: 30px;
}

.info{
  grid-area: info;

}

.select{
  width: 150px;
  margin-bottom: 20px;
}

.cidade{
  margin-left: 10px;
}

h4{
  margin-bottom: 15px;
}

@media (max-width: 480px) {
  h4 {
    font-size: 24px;
    margin-bottom: 0;
  }
  .info{
    justify-content: center;
  }
  .filtros{
    justify-content: center;
  }

  .cidade{
    margin-left: 0;
  }
}

@media (max-width: 768px) {
  h4 {
    font-size: 24px;
    margin-bottom: 0;
  }
  .info{
    justify-content: center;
  }
  .filtros{
    justify-content: center;
  }
}

@media (max-width: 1024px) {
  h4 {
    font-size: 24px;
    margin-bottom: 0;
  }
  .info{
    display: block;
    justify-content: center;
    text-align: center;
  }
  .filtros{
    justify-content: center;
  }
}

</style>
