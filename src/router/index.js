import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home.vue";
//import firebase from "../common/firebase_setup";

const BlogGrid = () => import("@/views/blog-grid.vue");
const BlogCreate = () => import("@/views/blog-create.vue");
const UserLogIn = () => import("@/views/user-login.vue");
const Registro = () => import("@/views/Registro.vue");

Vue.use(Router);

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
  {
    path: "/Registro",
    name: "Registro",
    component: Registro,
  },
];

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
