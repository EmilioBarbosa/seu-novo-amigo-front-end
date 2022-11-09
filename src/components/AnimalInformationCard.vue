<template>
  <q-card @click="openAnimalDialog" class="card rounded-borders cursor-pointer" style="width: 230px;height: 336px;">
    <img :src="animalImage" style="height: 70%;">

    <q-card-section class="text-black">
      <div class="text-h6" style="color: #6A4A6D">{{ props.name.toUpperCase() }}</div>
      <div class="text-subtitle2 text-grey-14">{{ props.breed.toUpperCase() }}</div>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  name: "cardInformacaoAnimal",
}
</script>

<script setup>
import {useRouter} from "vue-router";
import {computed} from "vue";

const animalImage = computed(()=> {
  return `http://localhost:8000/api/image/animal/${props.picture.substring(15)}`;
})

const props = defineProps({
  id: Number,
  name: String,
  breed: String,
  picture: String
})
const router = useRouter()

function openAnimalDialog(){
  router.push({name: 'AnimalDetails', params :{id: props.id}})
}

</script>

<style scoped>
.card:hover{
  box-shadow: 3px 3px 3px 3px #6A4A6D;
}
</style>
