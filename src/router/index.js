import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import BlogGrid from "../views/blog-grid.vue";
import BlogCreate from "../views/blog-create.vue";
import UserLogIn from "@/views/user-login.vue";
import UserReg from "@/views/Registro.vue";

const BlogDetails = () => import("@/views/blog-details.vue");
const BlogEdit = () => import("@/views/blog-edit.vue");
const BlogImgEdit = () => import("@/views/blog-img-update.vue");
const BlogTags = () => import("@/views/blog-tags.vue");

Vue.use(VueRouter);

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
    path: "/register",
    name: "UserReg",
    component: UserReg,
    meta: {
      requiresAuth: false,
    },
  },
  {
    path:"/blog/show",
    name: "BlogGrid",
    component: BlogGrid,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path:"/blog/create",
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
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
