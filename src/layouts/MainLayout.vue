<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="toolbar">
        <div class="row flex justify-between">
          <div class="col-4">
            <q-btn flat dense round icon="menu" aria-label="Menu"  @click="toggleLeftDrawer"/>
          </div>
          <div class="col-4">
            <q-toolbar-title>
              Quasar App
            </q-toolbar-title>
          </div>
          <div class="col-4">
            icone
          </div>

        </div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered class="drawer">
      <div class="row text-center">
        <div class="col-12 block q-mt-md">
          <img src="src/assets/logo_seu_novo_amigo.png" style="width: 130px" alt="Logo da plataforma">
          <h6 class="text-bold q-pa-none q-ma-none">SEU NOVO AMIGO</h6>
        </div>
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
