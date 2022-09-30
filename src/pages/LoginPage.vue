<template>
  <div>
    <q-form class="full-width fixed-center" style="max-width: 300px">
      <div class="row flex flex-center q-mb-md">
        <img src="src/assets/seu_novo_amigo_sem_fundo.png" style="width: 250px" alt="Logo da plataforma">
      </div>
      <q-input outlined label="Usuário" class="q-mb-md" bg-color="white"/>
      <q-input outlined type="password" class="q-mb-md" label="Senha" bg-color="white"/>
      <div class="row">
        <a href="http://google.com" target="_blank" class="q-mb-md">Esqueceu sua senha ?</a>
      </div>
      <div class="row flex-center">
        <q-btn color="white" class="text-black q-mb-md" icon-right="pets" label="Entrar" />
        <a href="http://google.com" target="_blank" >Não possui uma conta ? Cadastre-se</a>
      </div>

    </q-form>
  </div>

</template>

<script>
export default {
  name: "LoginPage"
}
</script>

<style scoped>
a{
  text-decoration: none;
  color: white;
}
a:hover{
  text-decoration: underline;
}
</style>
