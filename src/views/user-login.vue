<template>
  <form>
    <div id="caja2" class="comments">
      <div v-if="error" class="alert alert-danger">{{error}}</div>

      <h1 class="fuente2">Login</h1>
      <br />
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon3">Email</span>
        </div>
        <input
          type="text"
          class="form-control"
          id="basic-url"
          aria-describedby="basic-addon3"
          v-model="email"
        />
      </div>
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="passtext">Password</span>
        </div>
        <input
          type="password"
          name="password"
          id="password"
          class="form-control"
          aria-describedby="passtext"
          v-model="password"
        />
      </div>
      <br />
      <button type="button" class="btn btn-primary" @click.prevent="authenticate">LOGIN</button>
      <br />
      <br />
      <button
        type="button"
        id="boton-registro"
        class="btn btn-primary"
        @click="$router.push('Registro')"
      >REGISTRARSE</button>
    </div>
  </form>
</template>

<script>
import firebase from "../common/firebase_setup";
export default {
  name: "UserLogIn",
  data() {
    return {
      email: "",
      password: "",
      error: null
    };
  },
  methods: {
    async authenticate() {
      try {
        await firebase
          .auth()
          .signInWithEmailAndPassword(this.email, this.password);
        this.$router.push("/");
      } catch (error) {
        console.log(error);
        this.error = error.message;
      }
    }
  }
};
</script>

<style>
#caja2 {
  position: absolute;
  top: 15%;
  left: 37%;
  width: 30%;
  height: 50%;
}

.input-group-text {
  background-color: rgb(169, 196, 255);
  margin-left: 14%;
}

.form-control {
  margin-right: 4%;
  left: 1.8%;
}

#boton-registro {
  background-color: rgb(79, 158, 0);
}
</style>
