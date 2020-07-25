import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home.vue";
//import firebase from "../common/firebase_setup";

const BlogGrid = () => import("@/views/blog-grid.vue");
const BlogCreate = () => import("@/views/blog-create.vue");
const UserLogIn = () => import("@/views/user-login.vue");
const UserReg = () => import("@/views/Registro.vue");

const BlogDetails = () => import("@/views/blog-details.vue");
const BlogEdit = () => import("@/views/blog-edit.vue");
const BlogImgEdit = () => import("@/views/blog-img-update.vue");
const BlogTags = () => import("@/views/blog-tags.vue");

Vue.use(Router);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/login",
    name: "UserLogIn",
    component: UserLogIn,
    meta: {
      requiresAuth: false,
    },
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
    path: "/blog/create",
    name: "BlogCreate",
    component: BlogCreate,
    props: true,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/edit/:id",
    name: "BlogEdit",
    props: true,
    component: BlogEdit,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/imgedit/:id",
    name: "BlogImgEdit",
    props: true,
    component: BlogImgEdit,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/view/:id",
    name: "BlogDetails",
    props: true,
    component: BlogDetails,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/tags/:tagSelected",
    name: "BlogTags",
    props: true,
    component: BlogTags,
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
    path: "/Register",
    name: "UserReg",
    component: UserReg,
    meta: {
      requiresAuth: false,
    },
  },
];

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
