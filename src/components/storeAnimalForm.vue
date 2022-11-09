<template>
  <q-form class="q-px-lg q-pb-lg" @submit.prevent="submit">
    <q-card>
      <div class="form">
        <div class="name">
          <q-input
            outlined
            bg-color="white"
            v-model="form.name"
            dense
            label="Nome"
            :rules="[value => !!value || 'Campo obrigatório', value => !!value && value.length <= 15 || 'O nome pode ter no máximo 15 caracteres']"
          />
        </div>
        <div class="breed">
          <q-input
            outlined
            bg-color="white"
            v-model="form.breed"
            dense
            label="Raça"
            :rules="[value => !!value || 'Campo obrigatório']"
          />
        </div>
        <div class="weight">
          <q-input
            v-model="form.weight"
            outlined
            bg-color="white"
            dense
            label="Peso(em quilos)"
            :rules="[value => !!value || 'Campo obrigatório']"
            type="number"
          />
        </div>
        <div class="sex">
          <q-select
            label="Sexo"
            color="q-pa-none"
            v-model="sex"
            bg-color="white"
            dense
            :options="[{value: 'M', name: 'Macho'}, {value: 'F', name: 'Fêmea'}]"
            option-label="name"
            outlined
            :rules="[value => !!value || 'Campo obrigatório']"
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
        <div class="animal-size">
          <q-select
            v-model="animalSize"
            label="Porte"
            color="q-pa-none"
            bg-color="white"
            dense
            :options="[{value: 1, name: 'Pequeno'}, {value: 2, name: 'Médio'}, {value: 3, name: 'Grande'}]"
            option-label="name"
            outlined
            :rules="[value => !!value || 'Campo obrigatório']"
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
        <div class="species">
          <q-select
            v-model="species"
            label="Espécie"
            color="q-pa-none"
            bg-color="white"
            dense
            :options="[{value: 1, name: 'Cachorro'}, {value: 2, name: 'Gato'}]"
            option-label="name"
            option-value="value"
            outlined
            :rules="[value => !!value || 'Campo obrigatório']"
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
        <div class="age">
          <div class="number-age">
            <q-input
              outlined
              bg-color="white"
              dense
              label="Idade"
              :rules="[value => !!value || 'Campo obrigatório']"
              type="number"
              v-model="ageNumber"
            />
          </div>
          <div class="select-age">
            <q-select
              v-model="ageMonthYear"
              label="Meses/Anos"
              color="q-pa-none"
              bg-color="white"
              dense
              :options="[{value: 'Meses', name: 'Meses'}, {value: 'Anos', name: 'Anos'}]"
              option-label="name"
              outlined
              :rules="[value => !!value || 'Campo obrigatório']"
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
        </div>
        <div class="pictures">
          <q-file
            v-model="images"
            color="purple"
            outlined
            dense
            multiple
            max-files="2"
            label="Fotos (máximo 2)"
            :rules="[value => !!value || 'Campo obrigatório']"
          >
            <template v-slot:prepend class="text-black">
              <q-icon name="cloud_upload"/>
            </template>
          </q-file>
        </div>
        <div class="description">
          <q-input
            v-model="form.description"
            type="textarea"
            outlined
            bg-color="white"
            dense
            label="Descrição:"
          />
        </div>

      </div>
      <div class="text-center">
        <q-btn
          type="submit"
          :loading="loading"
          color="black"
          class="q-mb-md"
          icon-right="pets"
          label="Cadastrar Animal"
        />
      </div>
    </q-card>

  </q-form>
</template>

<script>
export default {
  name: "storeAnimalForm"
}
</script>

<script setup>
import useNotify from "src/composables/UseNotify";
import {computed, ref} from "vue";
import Cookies from 'js-cookie';
import {api} from "boot/axios";

const { notifyError, notifySuccess } = useNotify();
const emit = defineEmits(['refreshComponent'])

const myForm = ref(null);
const ageNumber = ref(null);
const ageMonthYear = ref(null)
const sex = ref(null);
const animalSize = ref(null);
const species = ref(null);
const loading = ref(false);

const ageCombine = computed(() => {
  if (ageNumber.value && ageMonthYear.value.value) {
    return ageNumber.value + ' ' + ageMonthYear.value.value
  }
});

const sexComputed = computed(() => {
  if (sex.value) {
    return sex.value.value
  }
});

const animalSizeComputed = computed(() => {
  if (animalSize.value) {
    return animalSize.value.value
  }
});

const speciesComputed = computed(() => {
  if (species.value) {
    return species.value.value
  }
});

const images = ref(null);

const form = ref({
  name: null,
  breed: null,
  weight: null,
  description: null,
  adopted: 0, // false
  user_id: Cookies.get('user_id'),
  sex: sexComputed,
  animalSize: animalSizeComputed,
  species: speciesComputed,
  age: ageCombine
})

function formData() {
  let formData = new FormData();
  formData.append('images[]', images.value[0])
  formData.append('images[]', images.value[1])
  formData.append('name', form.value.name)
  formData.append('breed', form.value.breed)
  formData.append('weight', form.value.weight)
  formData.append('description', form.value.description)
  formData.append('adopted', form.value.adopted)
  formData.append('user_id', form.value.user_id)
  formData.append('sex', form.value.sex)
  formData.append('animal_size_id', form.value.animalSize)
  formData.append('species_id', form.value.species)
  formData.append('age', form.value.age)
  return formData;
}


function submit() {
  loading.value = true
  api.post('/animals', formData(), {
    headers: {
      "Content-Type": "multipart/form-data"
    },
   })
    .then(response => {
      loading.value = false
      emit('refreshComponent')
      notifySuccess('Animal cadastrado com sucesso !')
    })
    .catch(response => {
      loading.value = false
      notifyError('Ocorreu um erro ao cadastrar o animal')
    })
}
</script>

<style scoped>
.form {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
  'name breed'
  'weight sex'
  'animal-size species'
  'age pictures'
  'description description';
  gap: 15px;
  padding: 20px;
}

.name {
  grid-area: name;
}

.breed {
  grid-area: breed;
}

.weight {
  grid-area: weight;
}

.sex {
  grid-area: sex;
}

.animal-size {
  grid-area: animal-size;
}

.species {
  grid-area: species;
}

.age {
  display: flex;
  grid-area: age;
}

.pictures {
  grid-area: pictures;
}

.description {
  grid-area: description;
}

.number-age {
  width: 40%;
  margin-right: 5px;
}

.select-age {
  width: 60%;
}

@media (max-width: 480px) {
  .form {
    display: block;
  }

}

</style>
