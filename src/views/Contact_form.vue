<template>
  <MainLayout>
  </MainLayout>

  <section class="text-center text-lg-start text-white justify-content-center align-items-center" style="display: flex; justify-content: center; align-items: center ;width: 100%; height: 90vh">
    <div class="container py-4">
      <div class="row g-0 justify-content-center align-items-center">
        <div class="col-lg-6 mb-5 mb-lg-0">
          <div class="card cascading-right" style="
            background: hsla(0,0%,14%,0.55);
            backdrop-filter: blur(30px);
            ">
            <div class="card-body p-5 shadow-5 text-center ">
              <h2 class="fw-bold mb-5">Contact us</h2>
              <form @submit.prevent="ContactFormSubmit()">
                <div class="row ">
                  <div class="col-md-6 mb-4">
                    <div class="form-outline d-flex flex-column align-items-start">
                      <label class="form-label" for="form3Example1">Vāŗds</label>
                      <input v-model="ContactForm.first_name" type="text" id="form3Example1" class="form-control text-white" style="background: transparent;" />
                      <p v-for="error in formErrors.first_name" style="color: red">{{error}}</p>
                    </div>
                  </div>
                  <div class="col-md-6 mb-4">
                    <div class="form-outline d-flex flex-column align-items-start">
                      <label class="form-label" for="form3Example2">Uzvārds</label>
                      <input v-model="ContactForm.last_name" type="text" id="form3Example2" class="form-control text-white" style="background: transparent;"/>
                      <p v-for="error in formErrors.last_name" style="color: red">{{error}}</p>
                    </div>
                  </div>
                </div>

                <div class="form-outline mb-4 d-flex flex-column align-items-start">
                  <label class="form-label" for="form3Example4">Telefona numurs</label>
                  <input v-model="ContactForm.phone_number" type="tel" id="form3Example4" class="form-control text-white" style="background: transparent;" />
                  <p v-for="error in formErrors.phone_number" style="color: red">{{error}}</p>
                </div>

                <div class="form-outline mb-4 d-flex flex-column align-items-start">
                  <label class="form-label" for="form3Example3">E-pasts</label>
                  <input v-model="ContactForm.email" type="email" id="form3Example3" class="form-control text-white" style="background: transparent;"/>
                  <p v-for="error in formErrors.email" style="color: red">{{error}}</p>
                </div>

                <div class="form-outline mb-4 d-flex flex-column align-items-start text-white">
                  <label class="form-label" for="form6Example3">Datums</label>
                  <input v-model="ContactForm.date" type="date" id="form6Example3" class="form-control text-white" style="background: transparent;"/>
                  <p v-for="error in formErrors.date" style="color: red">{{error}}</p>
                </div>

                <div class="col-md-6 mb-4">
                  <div class="form-outline d-flex flex-column align-items-start">
                    <label class="form-label" for="form3Example2">Auto(Marka/modelis)</label>
                    <input v-model="ContactForm.auto" type="text" id="form3Example2" class="form-control text-white" style="background: transparent;"/>
                    <p v-for="error in formErrors.auto" style="color: red">{{error}}</p>
                  </div>
                </div>

                <div class="form-outline mb-4 d-flex flex-column align-items-start text-white">
                  <label class="form-label" for="form6Example7">Papildus info :</label>
                  <textarea v-model="ContactForm.text" class="form-control text-white" id="form6Example7" rows="4" style="background: transparent;"></textarea>
                  <p v-for="error in formErrors.text" style="color: red">{{error}}</p>
                </div>

                <button class="btn btn-primary btn-block mb-4">
                  Pieteikties
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import MainLayout from "../layouts/MainLayout.vue";

import router from "../router";

export default {
  data() {
    return {
      ContactForm: {
        first_name: null,
        last_name: null,
        phone_number: null,
        email: null,
        date: null,
        auto: null,
        text: null,
      },
      formErrors:{
        first_name: null,
        last_name: null,
        phone_number: null,
        email: null,
        date: null,
        auto: null,
        text: null,
      },
    }
  },
  methods: {
    ContactFormSubmit(){
      this.formErrors = {
        first_name: null,
        last_name: null,
        phone_number: null,
        email: null,
        date: null,
        auto: null,
        text: null,
      }
      this.axios.post('/contact_message', this.ContactForm).then(response => {
        console.log(response.data.data)
        this.$router.push('/');
      }).catch(e => {
        Object.keys(e.response.data.errors).forEach((key) => {
          this.formErrors[key] = e.response.data.errors[key]
        })
      })
    }
  },
}

</script>

<style scoped>

</style>