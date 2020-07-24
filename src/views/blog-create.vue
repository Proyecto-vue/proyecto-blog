<template>
  <div class="blogCreate mt-4">
    <div class="d-flex flex-row justify-content-center">
      <!-- Make Post         -->
      <div class="makePost col-7 mt-4" v-if="this.Pshown != true">
        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">Title</span>
          </div>
          <input type="text" aria-label="Title" v-model.lazy="title" />
        </div>
        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">Content</span>
          </div>
          <textarea
            class="form-control"
            aria-label="Content"
            v-model.lazy="content"
          ></textarea>
        </div>
        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">Tags:</span>
          </div>
          <input
            type="text"
            class="col-10"
            aria-label="Tags"
            v-model.lazy="tagsList"
          />
        </div>
        <div class="input-group file-div">
          <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroupFileAddon03"
              >Imagen</span
            >
          </div>
          <div class="custom-file">
            <input
              id="inputGroupFile01"
              type="file"
              class="custom-file-input "
              ref="blogPic"
            />
            <label
              class="custom-file-label col-12 mr-2"
              for="inputGroupFile01"
            ></label>
          </div>
        </div>
        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">Category</span>
          </div>
          <select
            class="custom-select"
            aria-label="Category"
            v-model="category"
          >
            <option selected>Select A Category</option>
            <option value="Food">Food</option>
            <option value="Technology">Technology</option>
            <option value="Daily Life">Daily Life</option>
            <option value="Other">Other</option>
            <option value="Other">Test</option>
          </select>
        </div>

        <!--End of Create Blog -->
      </div>

      <div
        class="showPreview d-flex flex-column justify-content-center col-7"
        v-if="this.Pshown != false"
      >
        <div class="title">
          <h1>{{ title }}</h1>
        </div>
        <div class="imageDiv">
          <img id="blogImg" class="col-12" />
        </div>
        <div class="content">
          <p>{{ content }}</p>
        </div>
        <div class="tags">
          <p>{{ tagsList }}</p>
        </div>
        <div class="category">
          <p>{{ category }}</p>
        </div>
      </div>
      <!-- Options  -->
      <div class="btn-group-vertical col-2" role="group" aria-label="Options">
        <button
          type="button"
          class="vue-btn-five"
          @click.prevent="showPreview"
          v-if="this.Pshown != true"
        >
          Preview
        </button>
        <button
          type="button"
          class="vue-btn-five"
          @click.prevent="showEdit"
          v-if="this.Pshown != false"
        >
          Edit
        </button>
        <button type="button" class="vue-btn-five" @click.prevent="addToDB">
          Post
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "@/common/firebase_setup";
const storage = firebase.storage().ref();
const db = firebase.firestore();
export default {
  name: "BlogCreate",
  data() {
    return {
      title: "",
      content: "",
      tagsList: "",
      id: "",
      tags: [],
      category: "",
      Pshown: false,
      Eshown: true,
    };
  },

  methods: {
    showPreview() {
      if (
        this.title != "" &&
        this.content != "" &&
        this.tagsList != "" &&
        this.category != ""
      ) {
        let array = this.tagsList.split(",");
        this.tags = array;

        this.Pshown = true;
      } else {
        alert("Please fill everything.");
      }
    },
    showEdit() {
      this.Eshown = true;
      this.Pshown = false;
    },
    async addToDB() {
      try {
        console.log(db.collection("blogs"));
        let array = this.tagsList.split(",");
        this.tags = array;
        const data = await db.collection("blogs").add({
          createdOn: new Date(),
          Title: this.title,
          Content: this.content,
          Tags: this.tags,
          Category: this.category,
          userId: firebase.auth().currentUser.uid,
        });
        this.id = data.id;
        const imgFile = this.$refs.blogPic.files[0];
        await storage.child("images/" + data.id + ".jpg").put(imgFile);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.showPreview {
  background-color: white;
  min-height: 40vh;
  box-shadow: 3px 2px 5px #bbbbbb50;
}
.vue-btn-five {
  margin-top: 1em;
  margin-left: 1em;
  width: 15vw;
}
</style>
