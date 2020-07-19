import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import BlogGrid from "../views/blog-grid.vue";
import BlogCreate from "../views/blog-create.vue";
import UserLogIn from "@/views/user-login.vue";


const BlogDetails = () => import("@/views/blog-details.vue");

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/login",
    name: "UserLogIn",
    component: UserLogIn
  },
  {
    path:"/blog/show",
    name: "BlogGrid",
    component: BlogGrid,
  },
  {
    path:"/blog/create",
    name: "BlogCreate",
    component: BlogCreate,
    props: true,
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
