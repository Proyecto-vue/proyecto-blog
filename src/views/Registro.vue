<template>
<div id="cont">
  <form>
    <div id="caja3" class="comments">
      <div v-if="error" class="alert alert-danger">{{ error }}</div>
      <div v-if="mensaje" class="alert alert-success">{{ mensaje }}</div>
      <h1 class="fuente1">FORMA DE REGISTRO</h1>
      <br />
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span for="nombre" class="input-group-text" id="basic-addon3">Nombre</span>
        </div>
        <input
          type="text"
          class="form-control"
          id="basic-url"
          aria-describedby="basic-addon3"
          v-model.trim="form.name"
        />
      </div>

      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span for="email" class="input-group-text" id="basic-addon3">Email</span>
        </div>
        <input
          type="text"
          class="form-control"
          id="basic-url"
          aria-describedby="basic-addon3"
          v-model.trim="form.email"
        />
      </div>

      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span for="password" class="input-group-text" id="passtext">password</span>
        </div>
        <input
          type="password"
          name="password"
          class="form-control"
          aria-describedby="passtext"
          v-model.trim="form.password"
        />
      </div>
      <br />
      <button type="button" class="btn btn-primary" @click="$router.push('/login')">VOLVER</button>
      &emsp;&emsp;
      <button type="button" class="btn btn-primary" @click="submit()">TODO LISTO</button>
    </div>
  </form>
</div>
</template>

<script>
import firebase from "../common/firebase_setup";
export default {
  name: "UserReg",
  data() {
    return {
      form: {
        email: "",
        password: "",
        nombre: ""
      },
      error: null,
      mensaje: null
    };
  },
  methods: {
    submit() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.form.email, this.form.password)
        .then(data => {
          data.user
            .updateProfile({
              displayName: this.form.name
            })
            .then(() => {});
          this.mensaje = "Registrado exitosamente";
        })
        .catch(err => {
          this.error = err.message;
        });
    }
  }
};
</script>

<style>

#cont{
  min-height: 100vh;
  margin-top: 2px;
  background-image: url('../assets/background-web-6.png');
  background-attachment: fixed;
  
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat; 
}



#caja3 {
  width: 40%;
  height: 50%;
  position: absolute;
  top: 15%;
  left: 33%; 
}


@media (orientation: portrait) {

  #cont{
  background-image: url('../assets/background-phone-6.png');
  background-attachment: fixed;
  
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
}
</style>
