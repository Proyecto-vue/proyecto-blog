<template>
  <div>
    <div id="nav">
      <nav>
        <a id="nombre">Andrea</a>
        <a class="fotoperfil"></a>
        <a id="mas">+</a>
        <a id="home">Home</a>
        <a id="blogs">Blogs</a>
      </nav>
    </div>

    <div class="aside">
      <div class="asidebox">
        <a class="fotoaside"></a>
        <a class="textoaside">Carla</a>
        <p class="textoaside2">Lorem ipsum dolor sit amet, consectetur adipiscing</p>
      </div>
      <div class="asidebox"></div>
      <div class="asidebox"></div>
      <div class="asidebox"></div>
      <div class="asidebox"></div>
    </div>

    <div id="principal"></div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#principal[data-v-469af010] {
  position: absolute;
  width: 82%;
  height: 100%;
  left: 1%;
  top: 13%;
  margin: auto;
  background: #000000;
  mix-blend-mode: normal;
  border-radius: 15px;
  box-shadow: 4px 4px 18px rgba(0, 0, 0, 0.5);
}

/* Rectangle 1 */
#nav[data-v-469af010] {
  position: absolute;
  width: 100%;
  height: 1%;
  left: 0px;
  top: 0px;
  margin: auto;
  background: #000000;
  mix-blend-mode: normal;
}
.aside[data-v-469af010] {
  position: absolute;
  width: 15%;
  height: 100%;
  left: 84%;
  top: 13%;
  margin: auto;
  background: #ffffff;
  mix-blend-mode: normal;
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  box-shadow: 8px 8px 18px #c4c4c4, -8px -8px 16px #ffffff;
}
.asidebox {
  width: 84%;
  height: 30%;
  position: relative;
  margin-top: 10%;
  left: 6.5%;
  margin-bottom: 3%;
  background: #ffffff;
  border-style: solid;
  mix-blend-mode: normal;
  border-radius: 15px;
}

/* Home */
#home[data-v-469af010] {
  position: absolute;
  width: 2%;
  height: 1%;
  left: 87%;
  top: 5%;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 1.5rem;
  line-height: 3rem;

  color: #ffffff;
}

/* Andrea */
#nombre[data-v-469af010] {
  position: absolute;
  width: 2%;
  height: 1%;
  left: 6%;
  top: 5%;

  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 2rem;
  line-height: 3.5rem;

  color: #ffffff;
}
.fotoperfil {
  position: absolute;
  width: 4%;
  height: 75%;
  left: 1%;
  top: 8%;

  background: #ffde22;
  border-radius: 360px;
}

.fotoaside {
  position: absolute;
  width: 23%;
  height: 35%;
  left: 4%;
  top: 8%;

  background: #ffde22;
  border-radius: 360px;
}
/* Blogs */
#blogs[data-v-469af010] {
  position: absolute;
  width: 2%;
  height: 1%;
  left: 81%;
  top: 5%;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 1.5rem;
  line-height: 3rem;

  color: #ffffff;
}

/* + */
#mas[data-v-469af010] {
  position: absolute;
  width: 2%;
  height: 1%;
  left: 77%;
  top: 5%;

  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  font-size: 1.5rem;
  line-height: 3rem;

  color: #ffed48;

  mix-blend-mode: normal;
}
.textoaside[data-v-469af010] {
  position: absolute;
  width: 2%;
  height: 1%;
  left: 40%;
  top: 8%;

  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 1rem;
  line-height: 2rem;
  text-align: center;

  color: #000000;
}

.textoaside2[data-v-469af010] {
  position: absolute;
  width: 2%;
  height: 1%;
  left: 40%;
  top: 8%;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 0.5rem;
  line-height: 1rem;
  text-align: center;

  color: #000000;
}
</style>

