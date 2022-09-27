<template>
  <div class="flex flex-center q-mb-lg">
    <q-card class="my-card shadow-6">
      <q-carousel class="carousel" animated v-model="slide" arrows infinite>
        <q-carousel-slide :name="1" img-src="https://cdn.quasar.dev/img/mountains.jpg" />
        <q-carousel-slide :name="2" img-src="https://cdn.quasar.dev/img/parallax1.jpg" />
      </q-carousel>
        <div class="row q-pa-sm absolute-bottom text-subtitle2 flex justify-between">
          <div class="block">
            <p class="q-ma-none">LUKE</p>
            <p class="q-ma-none">SRD</p>
            <p class="q-ma-none">1 ANO</p>
          </div>
          <div class="flex">
            <q-btn color="white" class="text-black btn" label="Adotar" />
          </div>
          <div class="flex">
            <q-icon name="favorite_border" style="align-self: center" size="md"></q-icon>
          </div>
        </div>
    </q-card>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: "cardInformacaoAnimal",
  setup () {
    return {
      slide: ref(1)
    }
  }
}
</script>

<style scoped>
.my-card{
  width: 400px;
}
.btn{
  height: 30px;
  align-self: center;
}
.carousel{
  max-height: 300px;
}
</style>
