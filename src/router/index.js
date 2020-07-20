import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
//import firebase from "../common/firebase_setup";

const BlogGrid = () => import("@/views/blog-grid.vue");
const BlogCreate = () => import("@/views/blog-create.vue");
const UserLogIn = () => import("@/views/user-login.vue");

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "UserLogIn",
    component: UserLogIn,
  },
  {
    path: "/blog/show",
    name: "BlogGrid",
    component: BlogGrid,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/blog/create",
    name: "BlogCreate",
    component: BlogCreate,
    props: true,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

/*router.beforeEach((to, from, next) => {
  const isAuth = firebase.auth().currentUser != null;
  // Revisar que permisos necesita cada ruta
  if (!isAuth && to.meta.requiresAuth) {
    next({
      name: "user-login",
    });
  } else if (isAuth && !to.meta.requiresAuth) {
    next({
      name: "Home",
    });
  } else {
    // si no tiene ninguna regla solo pasar a la ruta
    next();
  }
}); */

const router = new VueRouter({
  routes,
});

export default router;
