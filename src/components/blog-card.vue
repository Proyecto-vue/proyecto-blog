<template>
  <div class="cardstyle">
    <div class="posts col mb-4">
      <div class="card">
        <div class="card-header">
          {{ title }}
        </div>
        <div class="card-body">
          <p class="card-text">{{ details }}</p>
           <router-link :to="/view/ + id" class="btn btn-primary"
        >Ver Blog</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogCard",
  props: ["title", "details", "id"]
};
</script>

<style lang="scss" scoped>
.card {
  .card-header {
    background: linear-gradient(to right, #71eeb8, teal);
    color: #000;
    font-weight: 700;
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
</style>
