import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCzg64NNzxQS0Fs5eSxUNPIZnvHxweNPyY",
  authDomain: "blog-vue-2020.firebaseapp.com",
  databaseURL: "https://blog-vue-2020.firebaseio.com",
  projectId: "blog-vue-2020",
  storageBucket: "blog-vue-2020.appspot.com",
  messagingSenderId: "958733559978",
  appId: "1:958733559978:web:59daf93bd453ec100988d3"
};

export default firebase.initializeApp(firebaseConfig);

// utils
const db = firebase.firestore();
const auth = firebase.auth();

// collection references
const usersCollection = db.collection("users");
const postsCollection = db.collection("posts");
const commentsCollection = db.collection("comments");
const likesCollection = db.collection("likes");

// export utils/refs
export {
  db,
  auth,
  usersCollection,
  postsCollection,
  commentsCollection,
  likesCollection
};
