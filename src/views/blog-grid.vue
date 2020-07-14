<template>
<div class="fullContainer">
<!-- First Row -->
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 posts-container">
    <!-- First card -->
    <div v-for="blog in blogs" :key="blog.id">
            <blog-card
        :id="blog.id"
        :title="blog.Title"
        :details="blog.Details"/>
    </div>
<!-- End Of Row 1 -->
      </div>
</div>
</template>

<script>
import blogCard from "../components/blog-card.vue"
import firebase from "../common/firebase_setup";
const db = firebase.firestore();

export default {
    data(){
        return{
            blogs: [],
            details:""
        };
    },
    created(){
        this.getBlogs();
        console.log(this.blogs);
    },
    components:{
        "blog-card":blogCard,
    },
    methods:{

        async getBlogs(){
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
        }
    }
}
</script>
<style lang="scss" scoped>
.posts-container{
    width: 95vw;
    margin: 0 auto;
    margin-top: 2em;
}

</style>