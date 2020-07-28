<template>
  <div>
    <div v-for="blog in blogs" :key="blog.id">
      <div id="principal">
        <div class="liston"></div>

        <h1 class="fuente2">{{ blog.Title }}</h1>
        <div class="content">
          <p class="fuente1">{{blog.Content }}</p>
        </div>
        <br />
        <div>
          <img src="../assets/tape.png" id="tape" />
          <img src id="image" width="50%" class="foto" />
        </div>
      </div>
      <div id="caja1" class="comments">
        <ul id="ulcom">
          <li id="licom">
            <a id="acom" @click="masLikes">LIKES {{ blog.Likes }}</a>
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
      limit: 1
    };
  },
  created() {
    this.getUsuario();
    this.getBlogs();
    console.log(this.blogs.Title);
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
        this.user.uid = user.uid; // The user's ID, unique to the Firebase project. Do NOT use
        // this value to authenticate with your backend server, if
        // you have one. Use User.getToken() instead.
      }
    },
    /*blogUnicox() {
      return this.limit ? this.blogs.slice(0, this.limit) : this.blog;
    }, */

    masLikes() {
      this.blogs.Likes = this.$store.getters.likeUpdate;
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
          console.log(blog.id);
          r.id = blog.id;
          this.getImage(blog.id);
          this.blogs.push(r);
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

#contenedor {
  min-height: 100%;
}

#principal {
  position: absolute;
  width: 79%;
  height: 80%;
  left: 10%;
  top: 9%;
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
  top: 0%;
  background-image: url("../assets/rect833.png");
  position: sticky;
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
  top: 92%;
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
  z-index: 3;
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
  position: relative;
  bottom: 33%;
  left: 800%;
  font-size: 1.5rem;
  width: 100%;
  height: 100%;
  color: black;
}
</style>
