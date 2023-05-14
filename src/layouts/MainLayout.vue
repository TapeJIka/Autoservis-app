<template>
  <nav class="navbar navbar-expand-lg navbar-dark" style="background-color: #2C3333;">
    <a class="navbar-brand" href="/" style="padding-left: 20px" >Autoserviss</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="/category">Pakalpojumi</a>
        </li>
        <li class="nav-item" >
          <a v-if="userData" class="nav-link" href="/contact_form">Pieteikt remontdarbus</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Kontakti</a>
        </li>
      </ul>
    </div>
    <div>
      <div v-if="!userData" class="d-flex align-items-center justify-content-center" style="padding-right: 20px">
        <div class="Register-button d-flex align-items-center justify-content-center">
          <hr>
          <ul class="nav nav-pills flex-column mb-auto">
            <li>
              <router-link to="/register" class="nav-link text-white" >Reģistreties</router-link>
            </li>
          </ul>
        </div>
      </div>

      <div v-if="userData" class="dropdown d-flex align-items-center" style="">
        <ul class="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
          <li><a @click="logout()" class="dropdown-item" href="#">Iziet</a></li>
        </ul>
        <a href="#" class="d-flex dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="true" style="padding: 4px">
        </a>
        <div class="d-flex align-items-center text-decoration-none" style="padding-right: 50px">
          <strong class="text-white" style="padding: 10px">{{userData.first_name}} {{userData.last_name}}</strong>
          <img src="public/img/Deault_pfp.png" alt="" width="40" height="38" class="rounded-circle me-2">
        </div>
      </div>
    </div>
  </nav>

</template>
<script>
import {getUserData} from "../helpers/auth.js";

export default {

  data() {
    return {
      categories:[],
      userData:[],
    }
  },
  methods: {
    logout(){
      const token = window.localStorage.getItem('access_token')
      if (!token){
        console.log('A gde ?')
      }else {
        this.axios.get('/logout',{
          headers:{
            Authorization: `Bearer ${token}`
          }
        }).then(data => {
          window.localStorage.removeItem('access_token')
          window.localStorage.removeItem('user')
          window.location.href = '/'
        })
      }
    }
  },
  mounted() {
    this.userData = getUserData();
  },
  created() {
    this.axios.get('/categories').then(response => {
      this.categories = response.data.data
    })
  }
}
</script>

<style>

.Register-button{
  border: 1px solid white;
  border-radius: 5px;
  transition: .3s;
}

.Register-button:hover{
  transform: scale(1.1);
}


@media only screen and (max-width: 600px) {
  #sidebar {
    display: none;
    position:fixed;
    width: 200px;
    z-index: 1000;
    left: 0;
    top: 0;
    height: 100%;
  }
}

#sidebar {
  position:fixed;
  width: 200px;
  z-index: 1000;
  left: 0;
  top: 0;
  height: 100%;
}
</style>
