<template>
  <div class="cards">
    <div v-for="animal in animals" :key="animal.id" class="card">
      <AnimalInformationCard
        :id="animal.id"
        :name="animal.name"
        :breed="animal.breed"
        :picture="animal.picture_1"
      />
    </div>
  </div>
</template>
<script>
import AnimalInformationCard from "components/AnimalInformationCard.vue"

export default {
  name: 'displayAllAnimals',
  components: {
    AnimalInformationCard
  }
}
</script>

<script setup>
import { api } from "boot/axios";
import {onMounted, ref} from "vue";

const animals = ref(null);

function getAllAnimals() {
  api.get('/animals')
    .then(response => {
      animals.value = response.data
    })
    .catch(response => {
      alert(response)
    })
}
onMounted(()=>{
  getAllAnimals()
})

</script>

<style scoped>
.cards {
  grid-area: cards;
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
}

.card {
  grid-area: card;
}

h4 {
  margin-bottom: 15px;
}

@media (max-width: 480px) {
  h4 {
    font-size: 24px;
    margin-bottom: 0;
  }

  .cards {
    justify-content: center;
  }
}

@media (max-width: 768px) {
  h4 {
    font-size: 24px;
    margin-bottom: 0;
  }

  .cards {
    justify-content: center;
  }
}

@media (max-width: 1024px) {
  h4 {
    font-size: 24px;
    margin-bottom: 0;
  }

  .cards {
    justify-content: center;
  }
}

</style>
