<template>
  <div id="app">
<!-- NAV-ANON -->
  <div class="d-flex justify-content-between divNAV" id="navAnon" v-if="isAuth!=true">
      <div class="wp-title pl-2">
        <h3>Blog-Vue</h3>
      </div>
      <div class="nav-wrap">
      <ul class="nav nav-pills">
        <li class="nav-item">
          <router-link class="nav-link" to="/">Inicio</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/blog/show">Blogs</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/login">LOG-IN</router-link>
        </li>
        
      </ul>
      </div>
  </div>
<!-- NAV-USER -->
    <div class="d-flex justify-content-between divNAV" id="navUser" v-if="isAuth==true">
      <div class=" wp-title pl-2 mt-1">
        <h4>{{username}}</h4>
        <p></p>
      </div>
      <div class="nav-wrap">
    <ul class="nav nav-pills">
  <li class="nav-item">
    <router-link class="nav-link" to="/">Inicio</router-link>
  </li>
   <li class="nav-item">
          <router-link class="nav-link" to="/blog/show">Blogs</router-link>
  </li>
  <li class="nav-item">
    <router-link class="nav-link" to="/blog/create">Crear Blog</router-link>
  </li>
  <li class="nav-item">
     <button class="btn btn-link" @click="logOut">Log Out</button>
  </li>
  
 
</ul>
      </div>
    </div>
    
    <router-view :key="$route.fullPath" />

  </div>
</template>



<script>
import  bsCustomFileInput from 'bs-custom-file-input'
import firebase from "./common/firebase_setup";
export default {
  data(){
    return{
      isAuth: false,
      username:'Blog-Vue',

    }
  },
  updated(){
    bsCustomFileInput.init();

    firebase.auth().onAuthStateChanged((user)=>{
      if(user){
        this.$store.commit("setUser",{ uid:user.uid})
        this.$store.commit("setUserName",{ username:user.displayName})
        this.username = firebase.auth().currentUser.displayName;
        this.isAuth=true;
      }else{
        this.$store.commit("setUser",null)
      }
    })
 },
  created(){
    firebase.auth().onAuthStateChanged((user)=>{
      if(user){
        this.$store.commit("setUser",{ uid:user.uid})
        this.$store.commit("setUserName",{ username:user.displayName})
        this.username = firebase.auth().currentUser.displayName;
        this.isAuth=true;
      }else{
        this.$store.commit("setUser",null)
      }
    })
    
  },
 
  methods: {
    async logOut() {
      try {
        await firebase.auth().signOut();
        this.$store.commit("setUser",null);
        this.isAuth=false;
        this.$router.push({ name: "UserLogIn" });
      } catch (error) {
        console.log(error);
      }
    },
    
  }

}
</script>


<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #f5f5f5;
  min-height: 100vh;
}

.divNAV{
  box-shadow: 0 2px 4px #bbbbbb50;
}

@media(max-width:450px){
  .divNAV{
  flex-direction: column;
  justify-content: center;

  .wp-title{
    margin: 0 auto;
    padding-bottom: 0;
    .h4{
      padding: 0;
      margin: 0;
    }
  }

  .nav-wrap{
    margin: 0 auto;
  }
}
}


</style>
