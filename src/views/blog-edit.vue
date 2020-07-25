<template>
    <div class="blogEdit">
        <div class="editCont mt-4">
<!-- Make Post         -->
        <div class="makePost col-7" v-if="this.Pshown!=true">
         <div class="input-group">
        <div class="input-group-prepend">
            <span class="input-group-text">Title</span>
        </div>
        <input type="text"  aria-label="Title" v-model.lazy="title">
        </div>
        <div class="input-group">
        <div class="input-group-prepend">
            <span class="input-group-text">Content</span>
        </div>
        <textarea class="form-control" aria-label="Content" v-model.lazy="content"></textarea>
        </div>
        <div class="input-group">
        <div class="input-group-prepend">
            <span class="input-group-text">Tags:</span>
        </div>
        <input type="text" class="col-8" aria-label="Tags" placeholder="Separar, con, comas, cada, tag" v-model.lazy="tagsList"/>
        </div>   
        <div class="input-group" >
        <div class="input-group-prepend">
            <span class="input-group-text">Category</span>
        </div>
        <select class="custom-select" aria-label="Category" v-model="category">
        <option selected>Select A Category</option>
        <option value="Food">Food</option>
        <option value="Technology">Technology</option>
        <option value="Daily Life">Daily Life</option>
        <option value="Other">Other</option>
        </select>
        </div>
        
        
        <!--End of Create Blog -->
        </div>



        <div class="showPreview d-flex flex-column justify-content-center col-7" v-if="this.Pshown!=false">
         <div class="title">
          <h1>{{title}}</h1>
         </div>
         <div class="content">
          <p>{{content}}</p>
         </div>
         <div class="tags">
          <p>{{tagsList}}</p>
         </div>
         <div class="category">
          <p>{{category}}</p>
         </div>
      </div>
        <!-- Options  -->
        <div class="btngroup col" role="group" aria-label="Options">
        <button type="button" class="vue-btn-five" @click.prevent="showPreview"  v-if="this.Pshown!=true">Preview</button>
        <button type="button" class="vue-btn-five"  @click.prevent="showEdit"  v-if="this.Pshown!=false">Edit</button>
        <button type="button" class="vue-btn-five" @click.prevent="updateToDB">Post</button>
        </div>
        </div>
     

      
</div>

</template>


<script>

import firebase from "@/common/firebase_setup";
const db = firebase.firestore();

export default {
    props:{
        id:{
            type:String,
        }
    },
    name: "BlogCreate",
    data(){
        return{
            title:'',
            content:'',
            tagsList:'',
            tags:[],
            category:'',
            Pshown: false,
            Eshown:true,
        }
    },


    created(){
    this.getblog();
    
    },   

    methods:{
        async getblog() {
      try {
       const t = new Date();
        const result = await db.doc(`blogs/${this.id}`).get();
        const useres = result.data();
        this.title = useres.Title;
        this.category = useres.Category;
        this.content= useres.Content;
        this.tags= useres.Tags;
        this.tagsList = this.tags.toString()
        db.doc(`blogs/${this.id}`).update({
         modified: t.toLocaleTimeString(),
        });
      } catch (error) {
        console.log(error);
      }
      
    },

    showPreview(){
            if(this.title!='' && this.content!='' && this.tagsList!='' && this.category!=""){
            
            let array = this.tagsList.split(',');
            this.tags= array;
        
            this.Pshown = true;
            }else{
                alert("Please fill everything.")
            }
        },
        showEdit(){
                this.Eshown = true;
                this.Pshown = false;
        },

        async updateToDB(){
            try {
            let array = this.tagsList.split(',');
            this.tags= array;
        
                console.log( db.collection("blogs"));
              await db.collection("blogs").doc(this.id).update({
                    Title: this.title,
                    Content: this.content,
                    Tags: this.tags,
                    Category: this.category,
                    userId: firebase.auth().currentUser.uid
                });
            this.$router.push({name:"BlogDetails", props:{id:this.id}})
            } catch (error) {
                console.log(error);
            }
        }
         
    }
}
</script>

<style lang="scss" scoped>
.editCont{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin: 0 auto;
}
.showPreview{
    background-color: white;
    min-height: 40vh;
    box-shadow: 3px 2px 5px #bbbbbb50;


}
.file-div{
.file-input{
    opacity: 0;
    visibility: hidden;
}

#inputGroupFile01{
    opacity:0;
    content: "ffff";
}

.custom-file-label{
   overflow: hidden;
}
}

.vue-btn-five{
    width: 25vw;
    margin: 1em 0;
    padding: 1em 0;
}

.btn-group{
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: 0 auto;
        max-width: 20vw;
    }

@media(max-width: 550px){
    .editCont{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    }

    .btn-group{
        display: flex;
        justify-content: space-around;
        margin: 0 auto;
    }

    .vue-btn-five{
    width: 50vw;
    padding: 1em 0;
}
}
</style>