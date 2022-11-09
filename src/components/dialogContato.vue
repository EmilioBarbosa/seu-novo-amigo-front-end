<template>
  <div>
    <q-btn color="white" class="text-black q-mb-md q-mt-lg" size="lg" icon-right="pets" label="adotar" @click="dialog = true"/>
    <q-dialog v-model="dialog" >
      <q-card class="dialog">
        <q-card-section class="row items-center q-pb-none text-black">
          <div class="text-h6">Contato</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>

        <q-card-section class="q-pt-none text-black flex flex-center">
          <div class="flex items-center">
            <h6 class="q-mr-md">(48) 98418-9420</h6>
            <q-icon size="sm" name="call" class="q-mr-sm" color="primary" />
            <q-icon size="sm" name="fa-brands fa-whatsapp" color="green" class="cursor-pointer"/>
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
export default {
  name: "dialogContato"
}
</script>

<script setup>
import {ref} from "vue";

const dialog = ref(false);
</script>

<style scoped>
.dialog{
  min-width: 300px;
  width: 500px;
}
</style>
