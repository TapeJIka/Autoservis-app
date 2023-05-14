<template>
  <MainLayout>
  </MainLayout>
  <section id="intro">
    <div class="d-flex flex-wrap" style="width: 100%">
      <h1 style="margin-left: 5%; padding-top: 10px; color: white ; height: fit-content; width: 100%">{{category.name}}</h1>
      <div class="d-flex" style="width: 50%; margin-top: 6%;margin-left: 3%; justify-content: center; align-items: center; vertical-align: center;">
        <div class="d-flex">
          <h5 style="margin-top: -5%; padding-bottom: 40px; color: white">{{category.description}}</h5>
        </div>
      </div>
    </div>

  </section>

  <section id="services">
    <div class="d-flex text-white" style="width: 100%;">
      <h3 style="padding-left: 5%">Remonts ietver:</h3>
      <div class="d-flex flex-wrap" style="width:510px; margin-top: 2%; margin-left: -6%">
        <h5 v-for="service in services" :key="service.id">{{service.name}} - {{service.price}}€<br></h5>
      </div>
    </div>
  </section>

<!--  <secction>-->
<!--    <div class="body-div d-flex justify-content-center" style="width: 100%; height: 100%; margin-top: 2%;">-->
<!--      <div class="d-flex flex-wrap justify-content-center" style="width: 60%;gap: 20px;">-->
<!--        <div v-for="service in services" :key="service.id" class="card text-white bg-dark" style="width: 18rem;">-->
<!--          <img class="card-img-top" src="public/img/market-place-logo-white.png" alt="Card image cap">-->
<!--          <div class="card-body" style="height: fit-content">-->
<!--            <hr>-->
<!--            <h5 class="card-title">{{service.name}}</h5>-->
<!--            <p class="card-text">{{service.price}} €</p>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--  </secction>-->


</template>
<script>
import MainLayout from "../layouts/MainLayout.vue";

export default {
  components: {MainLayout},

  layout: 'MainLayout',

  data() {
    return {
      services: [],
      category: [],
    }
  },
  created() {
    this.axios.get(`/service?category_id=${this.$route.params.id}`).then(response => {
      this.services = response.data.data
    });
    this.axios.get(`/categories/${this.$route.params.id}`).then(response => {
      this.category = response.data.data
    });
  }
}

</script>
<style>
#intro{
  width: 100%;
  height: auto;
  background-color:#414747;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  min-height: 20vh;

  margin: 0px;
}
#services{
  width: 100%;
  height: auto;
  background-color: #2C3333;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  min-height: 40vh;

  margin: 0px;
}

body{
  background-color: #2C3333;
}
.body-div{
  z-index: 1000;
  left: 0;
  top: 0;
  height: 80%;
}
</style>