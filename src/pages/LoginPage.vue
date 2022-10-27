<template>
  <div class="flex flex-center">
    <q-form class="full-width  q-mt-lg" style="max-width: 300px" @submit.prevent="submit">
      <div class="row flex flex-center q-mb-md">
        <img src="src/assets/Seu_novo_amigo_sem_fundo.png" style="width: 250px" alt="Logo da plataforma">
      </div>
      <div>
        <q-input outlined v-model="email" label="Usuário" class="q-mb-md" bg-color="white"/>
        <q-input outlined v-model="password" type="password" class="q-mb-md" label="Senha" bg-color="white"/>
        <div class="error-message">
          <p v-if="error" class="q-ma-none q-mb-sm q-ml-sm text-red-8 text-bold">Credênciais inválidas</p>
        </div>
      </div>

      <div class="row">
        <router-link :to="{name: 'signUp'}">
          <p class="q-mb-md">Esqueceu sua senha ?</p>
        </router-link>
      </div>
      <div class="row flex-center">
        <q-btn type="submite" color="white" class="text-black q-mb-md" icon-right="pets" label="Entrar"/>

        <router-link :to="{name: 'signUp'}">
          <p>Não possui uma conta ? Cadastre-se</p>
        </router-link>
      </div>

    </q-form>
  </div>

</template>

<script>
export default {
  name: "LoginPage",
}
</script>

<script setup>
import {ref} from "vue";
import {api} from 'boot/axios';
import Cookies from 'js-cookie';
import {useRouter} from 'vue-router'
import { useUserInfo } from "stores/user_store";

const email = ref('');
const password = ref('');
const error = ref(null);
const router = useRouter();
const userStore = useUserInfo();

function submit() {
  api.post('/login', {
    'email': email.value,
    'password': password.value
  })
    .then((response) => {
      Cookies.set('sna_token', response.data.token)
      Cookies.set('user_id', response.data.id)
      router.push({name: 'home'})
      userStore.getUserInfo()
    })
    .catch((response) => {
      error.value = true
    })
}
</script>

<style scoped>
a {
  text-decoration: none;
  color: white;
}

a:hover {
  text-decoration: underline;
}

.error-message {
  background-color: white;
  border-radius: 10px 2px;
}
</style>
