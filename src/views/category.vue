<template>
  <MainLayout>
  </MainLayout>
  <section id="about" style="height: 10vh">
    <div class="container justify-content-center align-items-center text-align-center" style="width: 100%; height: 600px; color: white; justify-content: center; align-items: center">
      <div class="text" style="margin-top: 7%;">
        <h3 class="mb-4">
          Automobiļu remonts
        </h3>
        <h5 class="mb-4 text-center">
          Mūsu autoserviss Rīgā piedāvā iepazīsties ar mūsu piedāvāto darbu klāstu un cenām - būsi patīkami pārsteigts.
          Ja neatrodi Tev vēlamo darbu zemāk redzamajā sarakstā, zvani mums vai brauc ciemos uz mūsu autoservisu Sarkandaugavā Ganību dambī 45
        </h5>
      </div>
    </div>
  </section>
  <div class="body-div d-flex justify-content-center" style="width: 100%; height: 100%; margin-top: 2%;">
    <div class="d-flex flex-wrap justify-content-center" style="width: 60%;gap: 20px;">
      <div v-for="category in categories" :key="category.id" class="card text-white bg-dark" style="width: 18rem;height: fit-content">
        <img v-if="category.id === 1" class="card-img-top" src="public/img/Screenshot_81.png" alt="Card image cap">
        <img v-if="category.id === 2" class="card-img-top" src="public/img/download (1).jpeg" alt="Card image cap">
        <img v-if="category.id === 3" class="card-img-top" src="public/img/transmisiji2.jpeg" alt="Card image cap">
        <img v-if="category.id === 4" class="card-img-top" src="public/img/img_7535-e1668779744392.jpg" alt="Card image cap">
        <img v-if="category.id === 6" class="card-img-top" src="public/img/metin.jpg" alt="Card image cap">
        <img v-if="category.id === 7" class="card-img-top" src="public/img/dzesesanas-sistema.jpg" alt="Card image cap">
        <img v-if="category.id === 8" class="card-img-top" src="public/img/ritošaa.jpg" alt="Card image cap">
        <img v-if="category.id === 9" class="card-img-top" src="public/img/bremžu.png" alt="Card image cap">
        <img v-if="category.id === 11" class="card-img-top" src="public/img/1000x620.jpg" alt="Card image cap">
        <img v-if="category.id === 13" class="card-img-top" src="public/img/download.jpeg" alt="Card image cap">
        <img v-if="category.id === 14" class="card-img-top" src="public/img/transport-service-centers-and-checkup-cars-lights-plant-repair-43222.800.jpg" alt="Card image cap">
        <img v-if="category.id === 15" class="card-img-top" src="public/img/virsbuve.jpg" alt="Card image cap">
        <img v-if="category.id === 16" class="card-img-top" src="public/img/krasošana.jpg" alt="Card image cap">
        <div class="card-body" style="height: fit-content">
          <router-link :to="`/services/${category.id}`" class="nav-link text-white" style="font-weight: bolder; font-size: 18px">{{category.name}}</router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import MainLayout from "../layouts/MainLayout.vue";

export default {
  components: {MainLayout},

  layout: 'MainLayout',
  data() {
    return {
      categories: [],
    }
  },
  created() {
    this.axios.get('/categories').then(response => {
      this.categories = response.data.data
    });
  }
}

</script>
<style>
body{
  background-color: #1A1E21;
}
.body-div{
  z-index: 1000;
  left: 0;
  top: 0;
  height: 80%;
}
</style>