<template>
  <q-page>
    <div class="row block text-center q-mt-lg q-mb-lg">
      <img src="../assets/Seu_novo_amigo_sem_fundo.png" style="width: 250px" alt="Logo da plataforma">
      <h3 class="q-ma-none">SEU NOVO AMIGO</h3>
      <h6 class="q-ma-none">Plataforma para adoções de animais </h6>
    </div>
    <div class="row">
      <div class="col-12 col-md-6 block text-center q-pa-lg">
        <cardInfoHome
          :title="'ADOTE UM ANIMAL'"
          :icon="'volunteer_activism'"
          :text="'Adote um animal perto de você, assim você estará salvando uma vida e recebendo muito amor em troca !'"
          :redirect="'adopt'"
        />

      </div>
      <div class="col-12 col-md-6 block text-center q-pa-lg">
        <cardInfoHome
          :title="'CADASTRE SUA ONG'"
          :icon="'list_alt'"
          :text="'Cadastre sua ONG e seja visto por mais pessoas.'"
          :redirect="'signUp'"
        />
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-md-6 block text-center q-pa-lg">
        <cardInfoHome
          :title="'CADASTRE UM ANIMAL PARA ADOÇÃO'"
          :icon="'favorite'"
          :text="'Cadastre um animal para adoção e aumente as chances de ele encontrar uma familia !'"
          :redirect="'animalSignUp'"
        />

      </div>
      <div class="col-12 col-md-6 block text-center q-pa-lg">
        <cardInfoHome
          :title="'O PROJETO'"
          :icon="'code'"
          :text="'Informações sobre o projeto.'"
          :redirect="'about'"
        />
      </div>
    </div>
  </q-page>
</template>

<script>
import {defineComponent} from 'vue'
import CardInfoHome from "components/CardInfoHome.vue";

export default defineComponent({
  name: 'IndexPage',
  components: {CardInfoHome}
})
</script>

<style scoped>

</style>
