<template>
    <div class="divContainer">
        <div class="login py-1">
        <form class="lg-inside mx-auto">
            <h1>Log-In</h1>
            <div class="input-group mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon3">Email</span>
            </div>
            <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" v-model="email">
            </div>
            <div class="input-group mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text" id="passtext">password</span>
            </div>
            <input type="password" name="password" id="password" aria-describedby="passtext" v-model="password">
            </div>
            <button type="button" class="btn btn-primary mx-1" @click.prevent="authenticate">LOGIN</button>
            <router-link to="/register" class="btn btn-primary mx-1">Registrarse</router-link>
        </form>
        </div>
    </div>
</template>

<script>
import firebase from "../common/firebase_setup";
export default {
    name:"UserLogIn",
    data(){
        return{
            email:"",
            password:""
        }
    },
    methods:{
       async authenticate(){
           try {
               await  firebase.auth().signInWithEmailAndPassword(this.email,this.password);
               this.$router.push({name:"Home"})
           } catch (error) {
               console.log(error);
           }
        }
    }
}
</script>

<style lang="scss" scoped>
.divContainer{
    margin-top: 10vw;
}
.login{
    background-color: #ffffff;
    box-shadow: 1px 5px 5px #bbbbbb50;
    max-width: 600px;
    width: 80vw;
    margin: 0 auto;
    border-radius: 2em;

    .lg-inside{
        max-width: 500px;
        width: 70vw;
        
    }

    #password{
        width:30vw;
    }
}
</style>