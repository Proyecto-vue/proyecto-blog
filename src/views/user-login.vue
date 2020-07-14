<template>
    <div class="divContainer">
        <form class="col-7 mx-auto">
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
            <button type="button" class="btn btn-primary" @click.prevent="authenticate">LOGIN</button>
        </form>
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
