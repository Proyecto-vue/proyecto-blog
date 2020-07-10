<template>
  <div id="nav">
    <nav>
      <a id="nombre">Andrea</a>
      <a id="fotoperfil"></a>
      <a id="mas">+</a>
      <a id="home">Home</a>
      <a id="blogs">Blogs</a>
    </nav>
    <br />

    <aside id="aside">
      <nav>
        <a id="asideblog1"></a>
      </nav>
    </aside>
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
#principal {
  position: absolute;
  width: 1121px;
  height: 659px;
  left: 24px;
  top: 105px;
  margin: auto;
  background: #000000;
  mix-blend-mode: normal;
  border-radius: 15px;
}

/* Rectangle 1 */
#nav {
  position: absolute;
  width: 100%;
  height: 22px;
  left: 0px;
  top: 0px;
  margin: auto;
  background: #000000;
  mix-blend-mode: normal;
}

#aside {
  position: absolute;
  width: 231px;
  height: 853px;
  left: 1188px;
  top: 105px;
  margin: auto;
  background: #000000;
  mix-blend-mode: normal;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
}

/* Home */
#home {
  position: absolute;
  width: 97px;
  height: 42px;
  left: 1205px;
  top: 21px;

  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 42px;

  color: #ffed48;
}

/* Andrea */
#nombre {
  position: absolute;
  width: 116px;
  height: 42px;
  left: 39px;
  top: 21px;

  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 42px;

  color: #ffffff;
}
#fotoperfil {
  position: absolute;
  width: 74px;
  height: 69px;
  left: 170px;
  top: 8px;

  background: #ffed48;
  border-radius: 360px;
}
/* Blogs */
#blogs {
  position: absolute;
  width: 91px;
  height: 84px;
  left: 1337px;
  top: 21px;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 42px;

  color: #ffed48;
}

/* + */
#mas {
  position: absolute;
  width: 34px;
  height: 39px;
  left: 1145px;
  top: 15px;

  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  font-size: 48px;
  line-height: 56px;

  color: #ffed48;

  mix-blend-mode: normal;
}

#asideblog1 {
  position: absolute;
  width: 208px;
  height: 187px;
  left: 1200px;
  top: 117px;

  background: #ffffff;
  mix-blend-mode: normal;
  border-radius: 15px;
}
</style>

