<template>
  <div>
    <!--Dados do Animal-->
    <div class="row flex flex-center" >
      <h5 class="text-bold q-ma-none" style="margin: 20px;">Dados do Animal <q-icon size="md" class="icon" name="edit_note"></q-icon></h5>
    </div>
    <div class="row">
      <div class="col-12 col-md-4 flex flex-center">
        <q-input outlined label="Nome" class="inputStyle" dense bg-color="white"/>
        <q-select outlined label="Espécie" class="inputStyle" dense bg-color="white"/>
      </div>
      <div class="col-12 col-md-4 flex flex-center">
        <q-input outlined label="Raça" class="inputStyle" dense bg-color="white"/>
        <q-select outlined label="Sexo" class="inputStyle" dense bg-color="white"/>
      </div>
      <div class="col-12 col-md-4 flex flex-center">
        <q-input outlined label="Peso" type="number" class="inputStyle" dense bg-color="white"/>
        <q-select outlined label="Porte" class="inputStyle" dense bg-color="white"/>
      </div>
    </div>
    <div class="row flex flex-center">
      <div class="col-12 col-md-4 flex flex-center">
        <q-input outlined label="Anos" type="number" class="inputStyle anos" dense bg-color="white"/>
        <q-input outlined label="Meses" type="number" class="inputStyle meses" dense bg-color="white"/>
      </div>
    </div>
    <!--Endereço-->
    <div class="row flex flex-center">
      <h5 class="text-bold q-ma-none" style="margin: 20px;">Endereço <q-icon size="md" class="icon" name="location_on"></q-icon></h5>
    </div>
    <div class="row">
      <div class="col-12 col-md-4 flex flex-center">
        <q-option-group
          :options="options"
          color="primary"
          class="q-mb-md"
        />
      </div>
      <div class="col-12 col-md-4 flex flex-center">
        <q-select outlined label="Estado" class="inputStyle" dense bg-color="white"/>
        <q-select outlined label="Cidade" class="inputStyle" dense bg-color="white"/>
      </div>
      <div class="col-12 col-md-4 flex flex-center">
        <q-input outlined label="Bairro" type="number" class="inputStyle" dense bg-color="white"/>
        <q-input outlined label="Logradouro" class="inputStyle" dense bg-color="white"/>
      </div>
    </div>
    <!--Fotos-->
    <div class="row flex flex-center">
      <div class="col-12 col-md-6 text-center">
        <h5 class="text-bold q-ma-none" style="margin: 20px;">Fotos <q-icon size="md" class="icon" name="image"></q-icon></h5>
        <p class="q-mt-none q-mb-lg">Envie até 2 fotos do animal</p>
        <q-icon name="arrow_upward" size="xl"></q-icon>
      </div>
    </div>
    <!--Cadastrar-->
    <div class="row flex flex-center q-mt-lg">
      <q-btn color="white" class="text-black q-mb-md" icon-right="pets" label="Cadastrar" />
    </div>
  </div>
</template>

<script>
export default {
  name: "AnimalSignUpPage",
  setup(){
    return {
      options: [
        {
          label: 'Utilizar endereço do meu cadastro',
          value: 'op1'
        },
        {
          label: 'Outro endereço',
          value: 'op2'
        },
      ]
    }
  }
}
</script>

<style scoped>
.inputStyle{
width: 80%;
  margin-bottom: 5px;
}
.icon{
  margin-bottom: 4px;
}
.anos{
  width: 30%;
}
.meses{
  width: 50%;
}
</style>
