<template>
    <div class="blogCreate justify-content-center">
<!-- Make Post         -->
        <div class="makePost col-7 mx-auto mt-4">
         <div class="input-group" >
        <div class="input-group-prepend">
            <span class="input-group-text">Title</span>
        </div>
        <input type="text" aria-label="Title" v-model.lazy="titleProp" class="col-8">
        </div>
        <div class="input-group">
        <div class="input-group-prepend">
            <span class="input-group-text">Content</span>
        </div>
        <textarea class="form-control" aria-label="Content" v-model.lazy="contentProp"></textarea>
        </div>
        </div>

<!-- Make Preview -->
        <div class="showPreview col-8 mx-auto">
            <div class="showTitle">
                    <h1>
                        <!-- Lorem, ipsum dolor sit amet consectetur. -->
                        {{titleProp}}
                    </h1>
            </div>
            <div class="showContent">
                <p>
                    <!-- Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae repudiandae consequuntur labore ab obcaecati ut adipisci et, repellat magni qui sit in eaque hic esse blanditiis commodi consectetur delectus saepe. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, ipsa ex quo ullam enim facere! Amet, est unde. Ea quia culpa fugit ut, consequuntur architecto iure. Deserunt nam voluptatem obcaecati? -->
                    {{contentProp}}
                </p> 
            
            </div>
        </div>
    </div>
</template>


<script>
export default {
    name: "BlogCreate",
       props:["titleProp","contentProp"],
}
</script>

<style lang="scss" scoped>

.showPreview{
    background-color: white;
    min-height: 40vh;
    box-shadow: 3px 2px 5px #bbbbbb50;
}
</style>