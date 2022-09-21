<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="toolbar">

          <q-btn flat dense round icon="menu" aria-label="Menu"  @click="toggleLeftDrawer"/>

          <q-toolbar-title class="text-center">Seu Novo Amigo</q-toolbar-title>

          <q-btn flat round dense icon="fa-solid fa-dog" />

      </q-toolbar>
    </q-header>
    <q-drawer v-model="leftDrawerOpen" show-if-above bordered class="drawer">
      <div class="row text-center">
        <div class="col-12 block q-mt-md">
          <img src="src/assets/logo_seu_novo_amigo.png" style="width: 130px" alt="Logo da plataforma">
          <h6 class="text-bold q-pa-none q-ma-none">SEU NOVO AMIGO</h6>
        </div>
      </div>
      <q-separator color="white"/>
      <div class="q-pa-lg">
        <h6 class="q-pa-none q-ma-none text-bold">Inicio</h6>
        <h6 class="q-pa-none q-ma-none text-bold">Adotar</h6>
        <h6 class="q-pa-none q-ma-none text-bold">Cadastrar adoção</h6>
        <h6 class="q-pa-none q-ma-none text-bold">Sobre</h6>
        <h6  class="q-pa-none q-ma-none q-mt-lg text-bold">Cadastrar-se</h6>
        <h6 class="q-pa-none q-ma-none text-bold">Login</h6>
      </div>
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'


export default defineComponent({
  name: 'MainLayout',

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>

<style>
.drawer{
  background-color: #7994E1;
}
.toolbar{
  background-color: #7994E1;

}
</style>
