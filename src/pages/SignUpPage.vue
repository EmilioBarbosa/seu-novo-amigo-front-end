<template>
  <div class="row teste" style="height: 80vh;">
    <div class="col-12 col-md-6 flex justify-center items-center" >
      <div class="text-center">
        <img src="src/assets/seu_novo_amigo_sem_fundo.png" style="width: 300px" alt="Logo da plataforma">
        <h5 class="text-bold">CADASTRE-SE E ADOTE SEU NOVO AMIGO</h5>
      </div>
    </div>
    <div class="col-12 col-md-6 flex justify-center items-center" >
      <q-form class="full-width text-center" style="max-width: 300px">
        <q-input outlined label="Nome" class="q-mb-md" bg-color="white"/>
        <q-input outlined type="email" class="q-mb-md" label="E-mail" bg-color="white"/>
        <q-input outlined label="Usuário" class="q-mb-md" bg-color="white"/>
        <q-input outlined type="password" class="q-mb-md" label="Senha" bg-color="white"/>
        <q-input outlined type="password" class="q-mb-md" label="Confirme sua senha" bg-color="white"/>
        <q-btn color="white" class="text-black q-mb-md" icon="fa-solid fa-dog" label="Cadastrar" />
      </q-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignUpPage"
}
</script>

<style scoped>
@media (max-width: 600px) {
  .teste{
    margin-bottom: 400px;
  }
}
@media (max-width: 768px) {
  .teste{
    margin-bottom: 400px;
  }
}
</style>
