<template>
  <div class="wrapper q-mt-md text-center">
    <div class="row flex flex-center">
      <img src="../assets/Seu_novo_amigo_sem_fundo.png" style="width: 200px">
    </div>
    <div class="row flex flex-center">
      <h5 class="q-ma-none text-bold">CADASTRE-SE</h5>
    </div>
    <storeUserForm/>
  </div>
</template>

<script>
import storeUserForm from "components/storeUserForm.vue";
export default {
  name: "SignUpPage",
  components: {
    storeUserForm
  }
}
</script>

<style scoped>

</style>
