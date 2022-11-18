<template>
  <div>

    <div class="block text-center q-mt-lg">

      <q-avatar size="200px" font-size="100px" color="purple-9" text-color="white" icon="person"/>

      <div class="flex flex-center">
        <router-link :to="{name: 'signUp'}" class="flex items-center">
          <p class="q-mt-md text-white">Editar Perfil</p>
          <q-icon name="edit" size="sm" color="white" class="q-mb-sm q-ml-sm"/>
        </router-link>
      </div>

      <div>
        <h4 class="q-ma-none">Emilio Barbosa</h4>
      </div>

    </div>



  </div>
</template>

<script>
export default {
  name: "userInfo"
}
</script>

<style scoped>

</style>
