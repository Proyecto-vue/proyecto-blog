<template>
    <div class="app">
        <div class="mainDiv col-10 mx-auto">
            <div class="current-img col-7 mx-auto my-2" >
                <img id="blogImg" class="col-12">
            </div>
           <div class="custom-file">
                <input id="inputGroupFile01" type="file" class="custom-file-input " ref="blogPic" />
                <label class="custom-file-label col-12 mr-2" for="inputGroupFile01"></label>
           </div>
           <div class="upload">
             <button class="vue-btn-four" @click="uploadChanges">Subir</button>
           </div>
           <div class="showProcess">
               <p id="delprocess"></p>
               <p id="uploaded"></p>
           </div>
        </div>
    </div>
</template>

<script>
import firebase from "../common/firebase_setup";
const storage = firebase.storage();

export default {
    props: ["id"],
    data(){
        return{
            previmage:false,
        }
    },
    created(){
        this.getImage();
    },
    methods:{
       getImage(){
            var pathReference = storage.ref(`images/${this.id}.jpg`);
            pathReference.getDownloadURL().then(function(url) {
            var img = document.getElementById('blogImg');
            img.src = url;
            this.previmage= true;
            }).catch(function(error) {
                console.log(error);
            });
        },
        async addNewImage(){
            const imgFile = this.$refs.blogPic.files[0];
            await storage.ref(`images/${this.id}.jpg`).put(imgFile);
            var uploaded = document.getElementById('uploaded');
            uploaded.innerText = "Uploaded new image";
        },
        deletePreviousImage(){
            var delRef = storage.ref(`images/${this.id}.jpg`);
            delRef.delete().then(function() {
            var delprocess = document.getElementById('uploaded');
            delprocess.innerText = "Deleted previous image";
            }).catch(function(error) {
            console.log(error);
            });
        },
       async uploadChanges(){
          if(this.previmage!=false)
            {await  this.deletePreviousImage();}
          await  this.addNewImage();
          this.$router.push({name:"BlogDetails", props:{id:this.id}})
        }
    }
}
</script>