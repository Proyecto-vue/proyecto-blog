<template>
  <div id="caja3" class="comments">
    <h1 class="fuente1">FORMA DE REGISTRO</h1>
    <br />
    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text" id="basic-addon3">Nombre</span>
      </div>
      <input
        type="text"
        class="form-control"
        id="basic-url"
        aria-describedby="basic-addon3"
        v-model="nombre"
      />
    </div>

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
        <span class="input-group-text" id="passtext">password</span>
      </div>
      <input
        type="password"
        name="password"
        class="form-control"
        aria-describedby="passtext"
        v-model="password"
      />
    </div>
    <button type="button" class="btn btn-primary" @click.prevent="authenticate">LOGIN</button>
    <button type="button" class="btn btn-primary" @click="$router.push('Registro')">REGISTRARSE</button>
  </div>
</template>

<script>
//import firebase from "../common/firebase_setup";
export default {
  name: "Registro",
  data() {
    return {
      email: "",
      password: "",
      nombre: ""
    };
  }
};
</script>

<style>
#caja3 {
  position: absolute;
  width: 40%;
  height: 60%;
  top: 15%;
  left: 33%;
}
</style>