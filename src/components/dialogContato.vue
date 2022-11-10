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

        <q-card-section class="q-pt-none text-black block ">
          <div class="flex flex-center">
            <h6 class="q-mr-md">{{numeroFormatado}}</h6>
            <q-icon size="sm" name="call" class="q-mr-sm" color="primary" />
            <q-icon v-if="phone.whatsapp" size="sm" name="fa-brands fa-whatsapp" color="green" class="cursor-pointer">
              <q-tooltip>
                Telefone com whatsapp
              </q-tooltip>
            </q-icon>
          </div>
          <div class="flex flex-center">
            <q-btn
              v-if="phone.whatsapp"
              :href="wppLink"
              target="_blank"
              color="black"
              class="q-mb-md q-mt-lg"
              size="md"
              icon-right="pets"
              label="Entrar em contato"
            />
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
import {computed, defineProps, ref} from "vue";

const props = defineProps({
  phone: Object
})

const wppLink = `https://wa.me/55${props.phone.phone_number}`

const numeroFormatado = computed(()=>{
  let numero = props.phone.phone_number
  if (numero.length === 10){
    return `(${numero.substring(0,2)}) ${numero.substring(2,6)}-${numero.substring(6)}`
  }
  else{
    return `(${numero.substring(0,2)}) ${numero.substring(2,7)}-${numero.substring(7)}`
  }
})

const dialog = ref(false);
</script>

<style scoped>
.dialog{
  min-width: 300px;
  width: 500px;
}
</style>
