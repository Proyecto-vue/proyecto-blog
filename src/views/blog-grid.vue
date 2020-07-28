<template>
  <div class="fullContainer mt-2" id="app">
    <div class="d-flex justify-content-space-around mx-auto col-10">
      <input
        type="text"
        v-model="searchString"
        class="form-control"
        placeholder="Buscar..."
        aria-label="Buscar.."
        aria-describedby="addon-wrapping"
      />
      <button @click="search">
        <svg
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
          class="bi bi-search"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"
          />
          <path
            fill-rule="evenodd"
            d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"
          />
        </svg>
      </button>
      <select class="custom-select" v-model="queryselector">
        <option selected>Open this select menu</option>
        <option value="Title">Title</option>
        <option value="Content">Content</option>
        <option value="Category">Category</option>
      </select>
    </div>
    <!-- First Row -->
    <!-- Filtered -->
    <div
      class="row row-cols-1 row-cols-sm-2 row-cols-md-3 posts-container"
      id="non-filtered"
      v-if="this.searchEnabled!=true"
    >
      <div v-for="blog in blogs" :key="blog.id">
        <blog-card :id="blog.id" :title="blog.Title" :details="blog.Details" />
      </div>
    </div>
    <!-- Filtered -->
    <div
      class="row row-cols-1 row-cols-sm-2 row-cols-md-3 posts-container"
      id="filtered"
      v-if="this.searchEnabled==true"
    >
      <div v-for="blog in filteredBlogs" :key="blog.id">
        <blog-card :id="blog.id" :title="blog.Title" :details="blog.Details" />
      </div>
    </div>
    <!-- End Of Row 1 -->
  </div>
</template>

<script>
import blogCard from "../components/blog-card.vue";
import firebase from "../common/firebase_setup";
const db = firebase.firestore();
export default {
  data() {
    return {
      blogs: [],
      details: "",
      searchString: "",
      searchEnabled: false,
      queryselector: "Title"
    };
  },
  created() {
    this.getBlogs();
    console.log(this.blogs);
  },
  computed: {
    filteredBlogs: function() {
      return this.blogs.filter(blog => {
        if (this.queryselector == "Title") {
          return blog.Title.match(this.searchString);
        }
        if (this.queryselector == "Content") {
          return blog.Content.match(this.searchString);
        }
        if (this.queryselector == "Category") {
          return blog.Category.match(this.searchString);
        } else return;
      });
    }
  },

  components: {
    "blog-card": blogCard
  },
  methods: {
    async getBlogs() {
      try {
        const res = await db.collection("blogs").get();
        res.forEach(blog => {
          const p = blog.data();
          p.id = blog.id;
          this.blogs.push(p);
        });
      } catch (error) {
        console.log(error);
      }
    },
    search() {
      if (this.searchString == "") {
        console.log(this.searchString);
      } else {
        this.searchEnabled = true;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.posts-container {
  width: 95vw;
  margin: 0 auto;
  margin-top: 2em;
}

#app{
  background-image: url('../assets/background-web-3.png');
  background-attachment: fixed;
  
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100vw;
}

@media (max-width: 768px){
#app{
  width:100vw;
  background-image: url('../assets/background-tablet-3.png');
  background-attachment: fixed;
  
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
}

@media (max-width: 400px) {

  #app{
  background-image: url('../assets/background-phone-3.png');
  background-attachment: fixed;
  
  
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
}
</style>