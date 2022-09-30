<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="toolbar flex justify-between">
        <div>

        <q-btn flat dense round icon="menu" aria-label="Menu"  @click="toggleLeftDrawer"/>
        <span class="q-ml-sm text-bold">SEU NOVO AMIGO</span>
        </div>

        <q-btn flat round dense icon="fa-solid fa-dog" />
      </q-toolbar>
    </q-header>
    <q-drawer v-model="leftDrawerOpen" bordered  class="drawer text-black">
      <div class="row text-center">
        <div class="col-12 block q-mt-md">
          <img src="src/assets/logo_seu_novo_amigo_drawer.png" style="width: 180px" alt="Logo da plataforma">
        </div>
      </div>
        <q-list padding class="menu-list">
          <router-link :to="{name: 'home'}">
            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="home" />
              </q-item-section>
              <q-item-section>
                Inicio
              </q-item-section>
            </q-item>
          </router-link>

          <router-link :to="{name: 'adopt'}">
            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="favorite" />
              </q-item-section>
              <q-item-section>
                Adotar
              </q-item-section>
            </q-item>
          </router-link>

          <router-link :to="{name: 'animalSignUp'}">
            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="assignment" />
              </q-item-section>
              <q-item-section>
                Cadastrar adoção
              </q-item-section>
            </q-item>
          </router-link>

          <router-link :to="{name: 'about'}">
            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="info" />
              </q-item-section>
              <q-item-section>
                Sobre
              </q-item-section>
            </q-item>
          </router-link>

          <q-separator/>
          <router-link :to="{name: 'login'}">
            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="login" />
              </q-item-section>

              <q-item-section>
                Login
              </q-item-section>
            </q-item>
          </router-link>

          <router-link :to="{name: 'signUp'}">
            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="person_add" />
              </q-item-section>

              <q-item-section>
                Cadastrar-se
              </q-item-section>
            </q-item>
          </router-link>
        </q-list>
    </q-drawer>
    <q-page-container >
      <router-view />
    </q-page-container>
    <q-footer>
      <q-toolbar class="toolbar flex flex-center">
        <p>Desenvolvido por Emilio Barbosa</p>
      </q-toolbar>
    </q-footer>
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
  background-color: white;
}
.toolbar{
  background-color: #6A4A6D;
}
a{
  text-decoration: none;
  color: black;
}
</style>
