<template>
  <div class="container">
    <div class="titulo">
      <h4 class="text-bold">Dados do Animal</h4>
    </div>
    <div class="input1">
      <q-input outlined label="Usuário" class="q-mb-md" bg-color="white"/>
    </div>
    <div class="input2">
      <q-input outlined label="Usuário" class="q-mb-md" bg-color="white"/>
    </div>
    <div class="input3">
      <q-input outlined label="Usuário" class="q-mb-md" bg-color="white"/>
    </div>


  </div>
</template>

<script>
export default {
  name: "AnimalSignUpPage"
}
</script>

<style scoped>
.container{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin: 50px;
}
.input1{
  width: 80%;
  grid-column: 1;
}
.input2{
  width: 80%;
  grid-column: 2;
}
.input3{
  width: 80%;
  grid-column: 3;
}
</style>
