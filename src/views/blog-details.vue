<template>
  <div>
    <div class="container text-left">
      <router-link to="/" class="btn btn-primary">Back</router-link>
       <router-link v-if="sameuser" :to="/edit/ + id" class="btn btn-primary">Edit</router-link>
    </div>

    <div class="container d-flex justify-content-between">
<!-- Post -->
      <div class="main col-7">
      <h1>{{ blogSelected.Title }}</h1>
      <br />
      <div class="imageDiv">
        <img id="blogImg" class="col-12">
      </div>
      <p>{{ blogSelected.Content }}</p>
      <br />
      <div class="d-flex flex-row justify-content-center">
          <div class="tagList m-1" v-for="tagSelected in blogSelected.Tags" :key="tagSelected.id">
            <router-link :to="/tags/ + tagSelected" class="btn btn-primary">{{tagSelected}}</router-link>
          </div> 
      </div>      </div>

<!-- Sidebar -->
      <div class="sidebar col-4">
        <div class="sidebarcont" v-for="blog in blogs" :key="blog.id">
        <div class="innerSidebarDiv py-2">
        <h3>{{blog.Title}}</h3>
        <router-link :to="/view/ + blog.id" class="btn btn-primary"
        >Ver Blog</router-link>
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
      blogs:[],
      category:"",
      sameuser: false,
    }
  },
  created() {
   
    this.getblog();
    
  },
  
  methods: {
    async getblog() {
      try {
       
        const result = await db.doc(`blogs/${this.id}`).get();
        this.blogSelected = result.data();
        this.category = result.data().Category;
        
        
        // Image
          var pathReference = storage.ref(`images/${this.id}.jpg`);
       pathReference.getDownloadURL().then(function(url) {
      var img = document.getElementById('blogImg');
      img.src = url;
      }).catch(function(error) {
        console.log(error);
      });

          if(firebase.auth().currentUser.uid == this.blogSelected.userId){
              this.sameuser= true;
          }

        this.getSimilarBlogs();
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
        result.forEach((doc) => {
          const r = doc.data();
          r.id = doc.id;
          if(r.id!=this.id){
              this.blogs.push(r);
          }else{
            return;
          }
        });
      } catch (error) {
        console.log(error);
      }
    },
    // goToPage(link){
    // this.$router.push({ name: 'BlogDetails', params: link });
     
    // }
    
}
}
</script>

<style lang="scss" scoped>
.main{
  background-color: #fff;
   box-shadow: 1px 3px 5px #bbb;
}
.sidebar{
  background-color: #f5f5f5;
  .h2{
    text-shadow: 1px 2px 5px #bbb;
  }
  .innerSidebarDiv{
    background-color: #fff;
    margin: 0.5em;
    border-radius: 5px;
   box-shadow: 1px 3px 5px #bbb;
  }

  .btn{
        background-color: white;
        color:teal;
        border: solid 1.2px teal;

        &:hover,&:focus{
        background-color: teal;
        color:white;
        border: solid 0.5px white;
        }
    }
}
</style>