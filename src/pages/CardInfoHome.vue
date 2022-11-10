<template>
  <q-card class="card-info" @click="redirect">
    <q-card-section class="text-black">
      <q-icon size="lg" :name="props.icon"/>
      <h5>{{ props.title }}</h5>
      <p>{{props.text}}</p>
    </q-card-section>
  </q-card>
</template>
<script>
export default {
  name: 'cardInfoHome'
}
</script>

<script setup>
import {useRouter} from "vue-router";

const router = useRouter();

const props = defineProps({
  title: String,
  icon: String,
  text: String,
  redirect: String
})

function redirect() {
  router.push({name: props.redirect})
}

</script>

<style scoped>
.card-info:hover {
  cursor: pointer;
  box-shadow: 3px 3px 3px 3px #6A4A6D;
}
</style>
