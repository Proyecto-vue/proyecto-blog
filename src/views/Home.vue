<template>
  <div>
    <!--  <div id="nav">
      <nav> 
        <a id="nombre">Andrea</a>
        <a class="fotoperfil"></a>
        <a id="mas">+</a>
        <a id="home">Home</a>
        <a id="blogs">Blogs</a>
      </nav>
    </div>-->

    <!-- <div class="aside"> 
      <div v-for="blog in blogs" :key="blog.Aside">
        <div class="asidebox">
         <a class="fotoaside"></a> 
          <a class="textoaside">{{blog.Title}}</a>
        </div>
      </div>
    </div>-->

    <div id="principal">
      <div class="liston"></div>
      <div v-for="blog in blogUnico" :key="blog.id">
        <h1 class="fuente2">{{ blog.Title }}</h1>
      </div>
      <div v-for="blog in blogUnico" :key="blog.id+1" class="content">
        <p class="fuente1">{{ blog.Content }}</p>
      </div>
    </div>
    <div id="caja1" class="comments">
      <h1 id="fuenteFav">LIKES</h1>
      <h1 id="numeroFav">4</h1>
    </div>
  </div>
</template>

<script>
import firebase from "../common/firebase_setup";
const db = firebase.firestore();
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

    async getBlogs() {
      try {
        // Obtener la lista de documentos.

        const result = await db
          .collection("blogs")
          .where("userId", "==", this.user.uid)
          .get();

        // Reiniciar arreglo de recetas.
        this.blogs = [];

        // Recorrer la lista para agregar la data
        // al arreglo local de recetas.
        result.forEach(blog => {
          const r = blog.data();
          r.id = blog.id;

          this.blogs.push(r);
        });
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
#nav {
  position: absolute;
  width: 100%;
  height: 1%;
  left: 0px;
  top: 0px;
  margin: auto;
  background: #000000;
  mix-blend-mode: normal;
}
.aside {
  position: absolute;
  width: 13%;
  height: 100%;
  left: 86%;
  top: 13%;
  margin: auto;
  background: #ffffff;
  mix-blend-mode: normal;
  display: flex;
  flex-direction: column;
  /* border-radius: 15px; */
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
  /*border-radius: 15px; */
}
/* Home */
#home {
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
#nombre {
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
#blogs {
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
#mas {
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
.textoaside {
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
.textoaside2 {
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
</style>
