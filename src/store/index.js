import Vue from "vue";
import Vuex from "vuex";
//import router from "../router/index";
//import * as firebase from "..//common/firebase_setup";
//const db = firebase.firestore();

//import { firestore } from "firebase";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    username: null,
    user: {
      data: null,
      name: "",
      email: "",
      password: "",
    },
    blogs: [],
    likes: 0,
  },
  mutations: {
    setBlogs(state, val) {
      state.blogs = val;
    },

    setUser: (state, payload) => {
      if (payload.uid == null) {
        return;
      }
      state.user = payload;
      state.user.data = payload;
    },
    setUserName: (state, payload) => {
      state.username = payload;
    },
  },
  getters: {
    likeUpdate(state) {
      return (state.blogs.likes += 1);
    },

    isAuthenticated(state) {
      state.user.data = state.user;
      return state.user != null;
    },

    user(state) {
      return state.user;
    },
    setUserProfile(state, val) {
      state.userProfile = val;
    },
  },
  actions: {
    /* async signup({ dispatch }, form) {
      // sign user up
      const { user } = await firebase.auth.createUserWithEmailAndPassword(
        form.email,
        form.password
      );

      // create user profile object in userCollections
      await firebase.usersCollection.doc(user.uid).set({
        name: form.name
      });

      // fetch user profile and set in state
      dispatch("fetchUserProfile", user);
    }, */

    fetchUser({ commit }, user) {
      if (user) {
        commit("setUser", {
          displayName: user.displayName,
          email: user.email,
        });
      } else {
        commit("setUser", null);
      }
    },

    /* async fetchUserProfile({ commit }, user) {
      // fetch user profile
      const userProfile = await firebase.usersCollection.doc(user.uid).get();

      // set user profile in state
      commit("setUserProfile", userProfile.data());

      // change route to dashboard
      router.push("/");
    }, */
  },
  modules: {},
});
