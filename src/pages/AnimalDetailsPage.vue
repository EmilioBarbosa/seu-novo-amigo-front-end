<template>
  <div class="container">
    <div class="images">
      <img class="image" :src="animalImage" v-if="animalInfo">
    </div>
<!--    <div class="galery">-->
<!--      <img class="galeryImage" src="https://cdn.quasar.dev/img/mountains.jpg">-->
<!--      <img class="galeryImage" src="https://cdn.quasar.dev/img/mountains.jpg">-->
<!--    </div>-->
    <div class="information">
      <div class="title">
        <h3 class="q-ma-none text-bold q-mb-sm" v-if="animalInfo">{{animalInfo.name.toUpperCase()}}</h3>
        <p class="text-bold q-mt-sm" v-if="animalInfo">{{subtitle}}</p>
      </div>
      <div class="animalInfo">
        <p class="text-bold q-ma-none" v-if="animalInfo">Raça: {{animalInfo.breed}}</p>
        <p class="text-bold q-ma-none" v-if="animalInfo">Peso: {{animalInfo.weight}}kg</p>
        <p class="text-bold q-ma-none" v-if="animalInfo">Se encontra em: {{ animalInfo.owner.address.city.name }} - {{ animalInfo.owner.address.city.state.name }} </p>
        <p class="text-bold" v-if="animalInfo">Responsável: {{animalInfo.owner.name.toUpperCase()}}</p>
        <div class="about" v-if="animalInfo && animalInfo.description !== 'null'">
          <p class="text-bold">Sobre:</p>
          <span class="text-bold" >{{animalInfo.description}}</span>
        </div>
      </div>
      <div class="flex flex-center">
        <dialogContato
          :phone="animalInfo.owner.phones[0]"
          v-if="animalInfo"
        />
      </div>
    </div>
  </div>
</template>

<script>
import dialogContato from "components/dialogContato.vue";
export default {
  name: "AnimalDetailsPage",
  components: {
    dialogContato
  }
}
</script>

<script setup>
import {api} from "boot/axios";
import {computed, onMounted, ref} from "vue";
import { useRoute } from 'vue-router'

const router = useRoute();

const animalInfo = ref(null);

const animalImage = computed(()=> {
  if (animalInfo){
    return `https://api-seu-novo-amigo-production.up.railway.app/api/image/animal/${animalInfo.value.picture_1.substring(15)}`;
  }
})
const sex = computed(()=>{
  if(animalInfo){
    return animalInfo.sex === 'M' ? 'Macho': 'Fêmea'
  }
})
const subtitle = computed(()=>{
  if (animalInfo){
    return `${animalInfo.value.species.name} | ${sex.value} | ${animalInfo.value.age} | Porte ${animalInfo.value.animal_size.name}`
  }
})

function getAnimalInfo() {
  api.get(`/animals/${router.params.id}`)
    .then(response => animalInfo.value = response.data)
    .catch(response => alert(response))
}

onMounted(()=>{
  getAnimalInfo()
})
</script>

<style scoped>
.container{
  padding: 50px;
  display: grid;
  grid-template-areas:
    "images information"
    "galery .";
  grid-template-columns: 50% 50%;
  grid-template-rows: auto 1fr;
  grid-column-gap: 3rem;
  grid-row-gap: .5rem;
  margin-bottom: 30px;
}
.images{
  grid-area: images;
  min-height: 450px;
  max-height: 450px;
}
.image{
  width: 100%;
  height: 100%;
  border: 3px solid white;
}
.information{
  grid-area: information;
}
.galery{
  grid-area: galery;
}
.galeryImage{
  width: 25%;
  border: 3px solid white;
  margin-right: 5px;
}
h3{
  text-decoration: underline;
  text-decoration-thickness: 1px;
  text-underline-offset: 10px;
}

@media (max-width: 480px) {
  .container{
    padding: 30px;
    display: grid;
    grid-template-areas:
    "images"
    "galery"
    "information";
    grid-template-columns: auto;
    grid-template-rows: auto;
    grid-column-gap: 3rem;
    grid-row-gap: 1rem;
    margin-bottom: 30px;
  }
  .galery{
    display: flex;
    justify-content: center;
  }
  .images{
    min-height: 300px;
  }
}@media (max-width: 768px) {
  .container{
    padding: 30px;
    display: grid;
    grid-template-areas:
    "images"
    "galery"
    "information";
    grid-template-columns: auto;
    grid-template-rows: auto;
    grid-column-gap: 3rem;
    grid-row-gap: 1rem;
    margin-bottom: 30px;
  }
  .galery{
    display: flex;
    justify-content: center;
  }
}
</style>
