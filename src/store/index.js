import Vue from "vue";
import Vuex from "vuex";
//import router from "../router/index";
import firebase from "../common/firebase_setup";
//import { firestore } from "firebase";
const db = firebase.firestore();

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
    updateLikeMu(state, payload) {
      const update = {};
      update[`favorites.${payload.idblog}`] = payload.idusu;

      if (payload == null) {
        return;
      } else state.likes += 1;
      console.log("cautnos", state.likes);

      db.collection("blogs")
        .doc(payload.idblog)
        .update({ Likes: state.likes });

      let likeado = db
        .collection("users")
        .where("user", "==", payload.idusu)
        .get()
        .then((snapshot) => {
          if (snapshot.empty) {
            db.collection("users")
              .doc(payload.idusu)
              .set({
                update,
                user: payload.idusu,
              });

            console.log("No matching documents.");
            return;
          } else
            db.collection("users")
              .doc(payload.idusu)

              .update(update)
              .catch((err) => {
                console.log("Error getting documents", err, likeado);
              });
        });
    },
    getLikesMu(state, payload) {
      db.collection("blogs")
        .doc(payload.idblog)
        .get()
        .then((doc) => {
          if (!doc.exists) {
            console.log("No such document!");
          } else {
            console.log("Document data:", doc.data().Likes);
            state.likes = doc.data().Likes;
            console.log("state likess:", payload.idblog, payload.idusu);
          }
        })
        .catch((err) => {
          console.log("Error getting document", err);
        });

      /*  db.collection('users').doc('id').get()
  .then((docSnapshot) => {
    if (docSnapshot.exists) {
        db.collection("users")

          .add({ likedBlogs: payload.idblog, userId: payload.idusu })
          .catch((err) => {
            console.log("Error getting document", err);
          });
        }else{}

  } */
    },
  },
  getters: {
    likeCount() {
      return this.state.likes;
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
    updateLike({ commit }, payload) {
      commit("updateLikeMu", payload);
    },

    getLikes({ commit }, payload) {
      commit("getLikesMu", payload);
    },

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
      router.push("/"); */
  },
  modules: {},
});
