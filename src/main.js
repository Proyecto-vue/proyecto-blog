import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import firebase from "./common/firebase_setup";
import './styles/vue-global.scss'

Vue.config.productionTip = false;


router.beforeEach((to, from, next) => {
  // obtener estado de usuario (logueado o no)
  const isAuth = firebase.auth().currentUser != null;

  // Revisar que permisos necesita cada ruta
  if (!isAuth && to.meta.requiresAuth) {
    next({
      name: "UserLogIn",
    });
  } else if (isAuth && !to.meta.requiresAuth) {
    next({
      name: "Home",
    });
  } else {
    // si no tiene ninguna regla solo pasar a la ruta
    next();
  }
});


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
