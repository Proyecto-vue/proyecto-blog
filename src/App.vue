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
  <li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#">User</a>
    <div class="dropdown-menu">
     <router-link class="dropdown-item" to="/login">
               <!-- Door Opening for LOGIN -->
                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-door-open" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M1 15.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5zM11.5 2H11V1h.5A1.5 1.5 0 0 1 13 2.5V15h-1V2.5a.5.5 0 0 0-.5-.5z"/>
                  <path fill-rule="evenodd" d="M10.828.122A.5.5 0 0 1 11 .5V15h-1V1.077l-6 .857V15H3V1.5a.5.5 0 0 1 .43-.495l7-1a.5.5 0 0 1 .398.117z"/>
                  <path d="M8 9c0 .552.224 1 .5 1s.5-.448.5-1-.224-1-.5-1-.5.448-.5 1z"/>
                </svg>
     </router-link>
     
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
