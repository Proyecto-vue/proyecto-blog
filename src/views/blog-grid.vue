<template>
<div class="fullContainer">
<!-- First Row -->
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 posts-container">
    <!-- First card -->
            <div class="posts col mb-4"><div class="card">
            <div class="card-header">
                Title
            </div>
            <div class="card-body">
                <p class="card-text">A short summary of the post</p>
                <a href="#" class="btn">See blog</a>
            </div>
            </div></div>
    <!-- 2nd card -->
            <div class="posts col mb-4"><div class="card">
            <div class="card-header">
                Title
            </div>
            <div class="card-body">
                <p class="card-text">A short summary of the post</p>
                <a href="#" class="btn">See blog</a>
            </div>
            </div></div>
    <!-- 3rd card -->
            <div class="posts col mb-4"><div class="card">
            <div class="card-header">
                Title
            </div>
            <div class="card-body">
                <p class="card-text">A short summary of the post</p>
                <a href="#" class="btn">See blog</a>
            </div>
            </div></div>
    <!-- 4th card -->
            <div class="posts col mb-4"><div class="card">
            <div class="card-header">
                Title
            </div>
            <div class="card-body">
                <p class="card-text">A short summary of the post</p>
                <a href="#" class="btn">See blog</a>
            </div>
            </div></div>
    <!-- 5th card -->
            <div class="posts col mb-4"><div class="card">
            <div class="card-header">
                Title
            </div>
            <div class="card-body">
                <p class="card-text">A short summary of the post</p>
                <a href="#" class="btn">See blog</a>
            </div>
            </div></div>
    <!-- 6th card -->
            <div class="posts col mb-4"><div class="card">
            <div class="card-header">
                Title
            </div>
            <div class="card-body">
                <p class="card-text">A short summary of the post</p>
                <a href="#" class="btn">See blog</a>
            </div>
            </div></div>
    <!-- 7th card -->
            <div class="posts col mb-4"><div class="card">
            <div class="card-header">
                Title
            </div>
            <div class="card-body">
                <p class="card-text">A short summary of the post</p>
                <a href="#" class="btn">See blog</a>
            </div>
            </div></div>
    <!-- 8th card -->
            <div class="posts col mb-4"><div class="card">
            <div class="card-header">
                Title
            </div>
            <div class="card-body">
                <p class="card-text">A short summary of the post</p>
                <a href="#" class="btn">See blog</a>
            </div>
            </div></div>
     <!-- 9th card -->
            <div class="posts col mb-4"><div class="card">
            <div class="card-header">
                Title
            </div>
            <div class="card-body">
                <p class="card-text">A short summary of the post</p>
                <a href="#" class="btn">See blog</a>
            </div>
            </div></div>
<!-- End Of Row 1 -->
      </div>
</div>
</template>

<style lang="scss" scoped>
.posts-container{
    width: 95vw;
    margin: 0 auto;
    margin-top: 2em;
}

.card{
    .card-header{
        background: linear-gradient(to right, #71eeb8,teal);
        color:#000;
        font-weight: 700;
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