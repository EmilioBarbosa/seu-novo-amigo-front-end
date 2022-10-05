<template>
  <div class="container">
    <div class="images">
      <img class="image" src="https://cdn.quasar.dev/img/mountains.jpg">
    </div>
    <div class="galery">
      <img class="galeryImage" src="https://cdn.quasar.dev/img/mountains.jpg">
      <img class="galeryImage" src="https://cdn.quasar.dev/img/mountains.jpg">
    </div>
    <div class="information">
      <div class="title">
        <h3 class="q-ma-none text-bold">LUKE</h3>
        <p class="text-bold q-mt-sm">Cachorro | Macho | 1 ano | Porte Médio</p>
      </div>
      <div class="animalInfo">
        <p class="text-bold q-ma-none">Raça: SRD</p>
        <p class="text-bold q-ma-none">Peso: 10kg</p>
        <p class="text-bold q-ma-none">Se encontra em: Palhoça - Santa Catarina</p>
        <p class="text-bold">Responsável: Emilio Barbosa</p>
        <div class="about">
          <p class="text-bold">Sobre o Luke:</p>
          <span class="text-bold">Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
            Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the
            more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of
            the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
            written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.
            The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
          </span>
        </div>
      </div>
      <div class="flex flex-center">
        <q-btn color="white" class="text-black q-mb-md q-mt-lg" size="lg" icon-right="pets" label="adotar" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AnimalDetailsPage"
}
</script>

<style scoped>
.container{
  padding: 50px;
  display: grid;
  grid-template-areas:
    "images information"
    "galery .";
  grid-template-columns: 50% 50%;
  grid-template-rows: auto 1fr;
  grid-column-gap: 3rem;
  grid-row-gap: .5rem;
  margin-bottom: 30px;
}
.images{
  grid-area: images;
}
.image{
  width: 100%;
  height: 100%;
  border: 3px solid white;
}
.information{
  grid-area: information;
}
.galery{
  grid-area: galery;
}
.galeryImage{
  width: 25%;
  border: 3px solid white;
  margin-right: 5px;
}
h3{
  text-decoration: underline;
  text-decoration-thickness: 1px;
  text-underline-offset: 10px;
}

@media (max-width: 480px) {
  .container{
    padding: 30px;
    display: grid;
    grid-template-areas:
    "images"
    "galery"
    "information";
    grid-template-columns: auto;
    grid-template-rows: auto;
    grid-column-gap: 3rem;
    grid-row-gap: 1rem;
    margin-bottom: 30px;
  }
  .galery{
    display: flex;
    justify-content: center;
  }
}@media (max-width: 768px) {
  .container{
    padding: 30px;
    display: grid;
    grid-template-areas:
    "images"
    "galery"
    "information";
    grid-template-columns: auto;
    grid-template-rows: auto;
    grid-column-gap: 3rem;
    grid-row-gap: 1rem;
    margin-bottom: 30px;
  }
  .galery{
    display: flex;
    justify-content: center;
  }
}
</style>
