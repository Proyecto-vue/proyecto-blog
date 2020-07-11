<template>
  <div id="app">
    <div class="d-flex justify-content-between divNAV">
      <div class="wp-title pl-2">
        <h3>BlogName</h3>
      </div>
      <div class="nav-wrap">
    <ul class="nav nav-pills">
  <li class="nav-item">
    <router-link class="nav-link" to="/">Home</router-link>
  </li>
  <li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#">Pages</a>
    <div class="dropdown-menu">
     <router-link class="dropdown-item" to="/blog/create">Blog Create</router-link>
     <router-link class="dropdown-item" to="/blog/show">Blog Grid</router-link>
    </div>
  </li>
  <li class="nav-item">
     <router-link class="nav-link" to="/about">About</router-link>
  </li>
 
</ul>
      </div>
    </div>
    
    <router-view />

  </div>
</template>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #f5f5f5;
  min-height: 100vh;
}

.divNAV{
  box-shadow: 0 2px 4px #bbbbbb50;
}

@media(max-width:450px){
  .divNAV{
  flex-direction: column;
  justify-content: center;

  .wp-title{
    margin: 0 auto;
  }

  .nav-wrap{
    margin: 0 auto;
  }
}
}


</style>
