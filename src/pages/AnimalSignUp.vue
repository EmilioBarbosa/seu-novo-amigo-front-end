<template>
  <div>
    <!--Dados do Animal-->
    <div class="row flex flex-center">
      <h5 class="text-bold q-ma-none" style="margin: 20px;">
        Dados do Animal
        <q-icon size="md" class="icon" name="edit_note"></q-icon>
      </h5>
    </div>
    <storeAnimalForm @refreshComponent="refreshComponent" :key="key"/>
  </div>
</template>

<script>
import storeAnimalForm from "components/storeAnimalForm.vue";

export default {
  name: "AnimalSignUpPage",
  components: {
    storeAnimalForm
  }
}
</script>

<script setup>
import {ref} from "vue";

const key = ref(0);

function refreshComponent() {
  key.value++
}

</script>


<style scoped>
.icon {
  margin-bottom: 4px;
}
</style>
