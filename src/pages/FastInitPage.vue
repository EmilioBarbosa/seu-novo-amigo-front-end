<template>
  <div>
    <div class="row q-mt-md">
      <div class="col-12 col-md-4 q-pl-lg flex justify-start">
        <h5 class="text-bold">Pular</h5>
      </div>
      <div class="col-12 col-md-4 flex flex-center q-mb-md">
        <img src="src/assets/logo_seu_novo_amigo.png" style="width: 200px" alt="Logo da plataforma">
      </div>
    </div>
    <div class="row flex justify-center">
      <div class="col-12 col-md-3 text-center" style="max-width: 300px">
        <h4 class="text-bold q-pa-none q-ma-none q-mb-md q-ma-sm-lg">Desejo</h4>
        <q-select rounded outlined label="Adotar" bg-color="white"/>

        <h4 class="text-bold q-pa-none q-ma-none q-mb-md q-mt-md">Um</h4>
        <q-select rounded outlined label="Gato" bg-color="white"/>

        <h4 class="text-bold q-pa-none q-ma-none q-mb-md q-mt-md">Onde</h4>
        <q-select rounded outlined label="Palhoça" bg-color="white">
          <template v-slot:prepend>
            <q-icon name="apartment" />
          </template>
        </q-select>

        <q-btn color="white" class="text-black q-ma-lg" icon="near_me" label="Me leve até la !" />

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignUpPage"
}
</script>

<style scoped>

</style>
