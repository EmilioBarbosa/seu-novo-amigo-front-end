<template>
  <q-form>
    <div class="form">
      <div class="name">
        <q-input outlined bg-color="white" dense label="Nome"/>
      </div>
      <div class="phone flex flex-center">
        <div class="input-phone">
          <q-input outlined bg-color="white" dense label="Telefone"/>
        </div>
        <div class="phone-wpp text-center">
          <q-checkbox  left-label label="Telefone com Whatsapp ?" />
        </div>
      </div>
      <div class="email">
        <q-input outlined bg-color="white" dense label="E-mail"/>
      </div>
      <div class="email-confirm">
        <q-input outlined bg-color="white" dense label="Confirme seu e-mail"/>
      </div>
      <div class="password">
        <q-input outlined type="password" bg-color="white" dense label="Senha"/>
      </div>
      <div class="password-confirm">
        <q-input outlined type="password" bg-color="white" dense label="Confirme sua senha"/>
      </div>
      <div class="state">
        <q-select
          label="Estado"
          color="q-pa-none"
          v-model="stateSelected"
          bg-color="white"
          dense
          :options="states"
          option-label="name"
          option-value="id"
          @change="clearCitySelected"
        >
          <template v-slot:option="scope">
            <q-item v-bind="scope.itemProps">
              <q-item-section class="text-black">
                <q-item-label>{{ scope.opt.name }}</q-item-label>
              </q-item-section>
            </q-item>
          </template>
        </q-select>
      </div>
      <div class="city">
        <q-select label="Cidade" color="q-pa-none" v-model="citySelected" bg-color="white" dense :options="citiesOfSelectedState" option-label="name" option-value="id">
          <template v-slot:option="scope">
            <q-item v-bind="scope.itemProps">
              <q-item-section class="text-black">
                <q-item-label>{{ scope.opt.name }}</q-item-label>
              </q-item-section>
            </q-item>
          </template>
        </q-select>
      </div>
      <div class="neighborhood">
        <q-input outlined bg-color="white" dense label="Bairro"/>
      </div>
      <div class="street">
        <q-input outlined bg-color="white" dense label="Logradouro"/>
      </div>
      <div class="about">
        <q-input type="textarea" outlined bg-color="white" dense label="Sobre você"/>
      </div>
    </div>
    <div class="text-center">
      <q-btn type="submit" color="white" class="text-black q-mb-md" icon-right="pets" label="Cadastrar-se"/>
    </div>
  </q-form>
</template>

<script>
import { NSelect } from 'naive-ui'

export default {
  name: "storeUserForm",
  components:{
    NSelect
  }
}
</script>

<script setup>
import { api } from "boot/axios";
import {computed, onMounted, ref} from "vue";

const stateSelected = ref(null);
const citySelected = ref(null);
const states = ref(null);
const cities = ref(null);

const citiesOfSelectedState = computed(() => {
   if (stateSelected.value && cities){
     return cities.value.filter((item) => {
       return item.state_id === stateSelected.value.id
     })
   }
})

function clearCitySelected() {
  alert('mudou')
}
function getStates() {
  api.get('/states').then(response => {
    states.value = response.data
  })
}
function getCities() {
  api.get('/cities').then(response => {
    cities.value = response.data
  })
}

onMounted(() => {
  getStates()
  getCities()
})
</script>

<style scoped>
.form{
  display: grid;
  grid-template-columns: 1fr 1fr ;
  grid-template-areas:
  'name phone'
  'email email-confirm'
  'password password-confirm'
  'state city'
  'neighborhood street'
  'about about';
  gap: 5px;
  padding: 20px;
  color: black;
}
.name{
  grid-area: name;
}
.email{
  grid-area: email;
}
.email-confirm{
  grid-area: email-confirm;
}
.phone{
  grid-area: phone;
}
.state{
  grid-area: state;
}
.city{
  grid-area: city;
}
.neighborhood{
  grid-area: neighborhood;
}
.street{
  grid-area: street;
}
.about{
  grid-area: about;
}
.password{
  grid-area: password;
}
.password-confirm{
  grid-area: password-confirm;
}
.input-phone{
  width: 50%;
}
.phone-wpp{
  width: 50%;
}
@media (max-width: 480px) {
  .form {
    display: block;
  }
  .name,
  .email,
  .email-confirm,
  .password,
  .password-confirm,
  .state,
  .city,
  .phone,
  .about,
  .neighborhood,
  .street{
    margin-bottom: 5px;
  }
}

</style>
