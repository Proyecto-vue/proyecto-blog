
<template>
  <div id="cont">
    <div class="comments" id="bienve">
      <H1 class="fuente3">Bienvenido/a {{ this.user.name }}</H1>
    </div>
    <br />

    <div v-for="blog in blogs" :key="blog.id">
      <div id="principal">
        <div id="ribbon">
          <p class="fuente4">ULTIMO POST</p>
        </div>
        <div class="liston"></div>

        <h1 class="fuente2">{{ blog.Title }}</h1>
        <div class="content">
          <div id="blogContents"></div>
        </div>
        <br />
        <div>
          <img v-if="image == true" src="../assets/tape.png" id="tape" />
          <img src id="image" width="50%" class="foto" />
        </div>
      </div>
      <div id="caja1" class="comments">
        <ul id="ulcom">
          <li id="licom">
            <a id="acom" @click="masLikes">LIKES {{ $store.state.likes }}</a>

            <button id="acom2" type="button" class="btn btn-outline-warning" @click="masLikes">LIKE</button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "../common/firebase_setup";
const db = firebase.firestore();
const storage = firebase.storage().ref();
//import { mapS } from "vuex";
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",

  data() {
    return {
      user: {
        name: "",
        email: "",
        uid: ""
      },
      blogs: [],
      limit: 1,
      likes: 0,
      id: null,
      image: false
    };
  },
  created() {
    this.getBlogs();
  },

  updated() {
    var selectedContent = this.blogs[0].Content;
    var divcont = document.getElementById("blogContents");
    divcont.innerHTML = selectedContent;
    this.getUsuario();
    this.getLikes();
    console.log("uhuuu", this.id, this.user.uid);
  },
  computed: {
    blogUnico() {
      return this.limit ? this.blogs.slice(0, this.limit) : this.blog;
    }
  },
  methods: {
    getUsuario() {
      var user = firebase.auth().currentUser;
      if (user != null) {
        this.user.name = user.displayName;
        this.user.email = user.email;
        this.user.uid = user.uid;
      }
    },
    /*blogUnicox() {
      return this.limit ? this.blogs.slice(0, this.limit) : this.blog;
    }, */
    masLikes() {
      console.log("helem", this.id);
      const usuLike = { idblog: this.id, idusu: this.user.uid };
      this.$store.dispatch("updateLike", usuLike);
      document.getElementById("acom2").disabled = true;
    },
    async getLikes() {
      await (this.id != null);
      const usuLike = { idblog: this.id, idusu: this.user.uid };
      this.$store.dispatch("getLikes", usuLike);
      console.log("el de getlikes", this.id);
    },

    async getBlogs() {
      try {
        // Obtener la lista de documentos.

        const result = await db
          .collection("blogs")
          .orderBy("createdOn", "desc")

          .limit(1)
          .get();

        // Reiniciar arreglo de recetas.

        // Recorrer la lista para agregar la data
        // al arreglo local de recetas.
        result.forEach(blog => {
          const r = blog.data();

          r.id = blog.id;
          this.getImage(blog.id);
          this.getLikes(blog.id);
          console.log("el id es", blog.id, this.user.uid);
          this.id = blog.id;
          this.blogs.push(r);
          return r.id;
        });
      } catch (error) {
        console.log(error);
      }
    },
    async getImage(id) {
      try {
        const url = await storage
          .child("images/" + id + ".jpg")
          .getDownloadURL();
        this.image = true;
        const image = document.getElementById("image");
        image.src = url;
        console.log(url);
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Sora:wght@300&display=swap");

#cont {
  min-height: 100vh;
  margin-top: 2px;
  background-image: url("../assets/inicio-2-web.png");
  background-attachment: fixed;

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

#bienve {
  position: absolute;
  top: 6%;
  left: 25%;
  width: 50%;
  background-color: rgb(64, 189, 178);
  text-align: top;
  padding: 2%;
}

#contenedor {
  min-height: 100%;
}

#principal {
  position: absolute;
  width: 79%;
  height: 80%;
  left: 10%;
  top: 17%;
  margin: auto;
  background: #ffffff;
  mix-blend-mode: normal;
  /*border-radius: 15px; */
  box-shadow: 4px 4px 18px rgba(0, 0, 0, 0.5);
  overflow-y: scroll;
}
.liston {
  background: #ecececff;
  width: 100%;
  height: 5%;

  background-image: url("../assets/rect833.png");
  position: sticky;
  z-index: 3;
}

.content {
  text-align: left;
  padding: 2%;
}

.comments {
  margin: auto;
  background: #ffffff;
  mix-blend-mode: normal;
  /*border-radius: 15px; */
  box-shadow: 2px 2px 9px rgba(0, 0, 0, 0.3);
}

#caja1 {
  position: absolute;
  left: 10%;
  top: 99%;
  width: 79%;
  height: 5%;
}

/* Rectangle 1 */

.fuente1 {
  font-family: "Sora", sans-serif;
  font-size: 1.5rem;
}
.fuente2 {
  font-family: "Sora", sans-serif;
  font-size: 2rem;
}

.fuente3 {
  font-family: "Sora", sans-serif;
  font-size: 4rem;
}

.fuente4 {
  font-family: "Sora", sans-serif;
  font-size: 1.5rem;
  color: #333;
  text-align: center;
  position: relative;
  top: 50%;
}

#fuenteFav {
  text-align: left;
  margin-left: 2%;
}

#numeroFav {
  position: absolute;
  top: 5%;
  right: 3%;
}

.foto {
  position: absolute;
  left: 27%;
}

#tape {
  position: absolute;
  left: 46%;
  width: 10%;
  height: 7%;
  z-index: 2;
  transform: rotate(90deg);
}

#ulcom {
  list-style: none;
  margin: 1rem;
  padding: 0;
}
#licom {
  display: inline-block;
  font-size: 1rem;
  font-weight: bold;
}

#acom {
  position: absolute;
  top: 2%;
  left: 5%;
  font-size: 2rem;
}

#acom2 {
  position: absolute;
  bottom: 38%;
  left: 85%;
  font-size: 1.5rem;
  bottom: 0%;
  height: 100%;
  color: black;
}

@media (orientation: portrait) {
  #cont {
    background-image: url("../assets/inicio-2-phone.png");
    background-attachment: fixed;

    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
}

#ribbon {
  font: bold 15px sans-serif;
  color: #333;
  text-align: center;
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  position: absolute;
  padding: 7px 0;
  top: 34px;
  left: -68px;
  width: 250px;
  height: 60px;
  background-color: #ebb134;
  color: #fff;
  z-index: 4;
}
</style>

