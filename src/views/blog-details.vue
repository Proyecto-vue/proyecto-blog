<template>
  <div id="app" class="mt-1">
    <div class="container text-left btnCont pt-3 mb-2">
      <button
        type="button"
        @click="hasHistory() 
        ? $router.go(-1) 
        : $router.push('/')"
        class="vue-btn-one"
      >
        &laquo;
        Back
      </button>
      <router-link v-if="sameuser" :to="/edit/ + id" class="vue-btn-one m-2" >Editar</router-link>
      <router-link
        v-if="sameuser"
        :to="/imgedit/ + id"
        class="vue-btn-one"
      >Cambiar Imagen</router-link>
    </div>

    <div class=" mainContainer">
      <!-- Post -->
  <div class="blogCont">
      <div class="main">
        <h1>{{ blogSelected.Title }}</h1>
        <br />
        <div class="imageDiv">
          <img id="blogImg" class="col-12 mb-1" />
        </div>
        <div id="blogContents"></div>
        <br />
        <div class="d-flex flex-row justify-content-center">
          <div class="tagList m-1" v-for="tagSelected in blogSelected.Tags" :key="tagSelected.id">
            <router-link :to="/tags/ + tagSelected" class="vue-link">{{tagSelected}}</router-link>
          </div>
        </div>
      </div>
  </div>
      <!-- Sidebar -->
      <div class="sidebar">
        <div class="sidebarcont" v-for="blog in blogs" :key="blog.id">
          <div class="innerSidebarDiv py-2">
            <h3>{{blog.Title}}</h3>
            <router-link :to="/view/ + blog.id" class="btn btn-primary">Ver Blog</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "../common/firebase_setup";
const storage = firebase.storage();
const db = firebase.firestore();
export default {
  name: "blogDetails",
  props: ["id"],
  data() {
    return {
      blogSelected: {},
      blogs: [],
      category: "",
      sameuser: false
    };
  },
  created() {
    this.getblog();
  },

  methods: {
    hasHistory() {
      return window.history.length > 2;
    },
    async getblog() {
      try {
        const result = await db.doc(`blogs/${this.id}`).get();
        this.blogSelected = result.data();
        this.category = result.data().Category;

        // Image
        var pathReference = storage.ref(`images/${this.id}.jpg`);
        console.log(pathReference);
        pathReference
          .getDownloadURL()
          .then(function(url) {
            var img = document.getElementById("blogImg");
            img.src = url;
          })
          .catch(function() {
            console.log("No image");
          });

            var selectedContent = this.blogSelected.Content;
            var divcont =  document.getElementById('blogContents');
            divcont.innerHTML = selectedContent;
            
           this.getSimilarBlogs();
        if (firebase.auth().currentUser.uid == this.blogSelected.userId) {
          this.sameuser = true;
        }
       
      } catch (error) {
        console.log(error);
      }
    },
    async getSimilarBlogs() {
      try {
        const result = await db
          .collection("blogs")
          .where("Category", "==", this.blogSelected.Category)
          .get();
        result.forEach(doc => {
          const r = doc.data();
          r.id = doc.id;
          if (r.id != this.id) {
            this.blogs.push(r);
          } else {
            return;
          }
        });
      } catch (error) {
        console.log(error);
      }
    }
    // goToPage(link){
    // this.$router.push({ name: 'BlogDetails', params: link });

    // }
  }
};
</script>

<style lang="scss" scoped>
#app{
  background-image: url('../assets/background-web-2.png');
  background-attachment: fixed;
  
  
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.mainContainer {
  display: flex;
  justify-content: center;
  .main{
    width:60vw;
    background-color: #fff;
   box-shadow: 1px 3px 5px #bbb;
   height: auto;
   border-radius: 1em;

  .blogContents{
    margin-top: 2em;
    margin: 0 auto;
     width: 90%;
  }
  p{
    margin-top: 1em;
  }
  }
}

.sidebar {
  width: 15vw;
  margin-left: 5vw;
  .h2 {
    text-shadow: 1px 2px 5px #bbb;
  }
  .innerSidebarDiv {
    background-color: #fff;
    margin: 0.5em;
    border-radius: 5px;
    box-shadow: 1px 3px 5px #bbb;
    h3 {
      flex-wrap: wrap;
      overflow-wrap: break-word;
    }
  }
  .btn {
    background-color: white;
    color: teal;
    border: solid 1.2px teal;
    &:hover,
    &:focus {
      background-color: teal;
      color: white;
      border: solid 0.5px white;
    }
  }
}


@media (orientation: portrait) {

  #app{
  background-image: url('../assets/background-phone-2.png');
  background-attachment: fixed;
  
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

  .btnCont {
    display: flex;
    justify-content: center;
  }
  .mainContainer {
    flex-direction: column;
    justify-content: center;
    margin-left: 0;
    .main {
      width: 95vw;
      margin-left: 0;
      margin: 0 auto;
    }
    .sidebar {
      margin: 1em auto;
      width: 80vw;
    }
  }
}
</style>