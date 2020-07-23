import Vue from "vue";
import Vuex from "vuex";
import router from "../router/index";
import * as firebase from "..//common/firebase_setup";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userProfile: {},
  },
  mutations: {
    setUser: (state, payload) => {
      if (payload.uid == null) {
        return;
      }

      state.user = payload;
    },
  },
  getters: {
    isAuthenticated(state) {
      return state.user != null;
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

    async fetchUserProfile({ commit }, user) {
      // fetch user profile
      const userProfile = await firebase.usersCollection.doc(user.uid).get();

      // set user profile in state
      commit("setUserProfile", userProfile.data());

      // change route to dashboard
      router.push("/");
    },
  },
  modules: {},
});
