import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import firebase from "./common/firebase_setup";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
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

/*set up the Firebase method onAuthStateChanged. 
This ensures Firebase initializes before loading the app when a user refreshes a page. */

/*let app;
auth.onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: (h) => h(App),
    }).$mount("#app");
  }
}); */

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
