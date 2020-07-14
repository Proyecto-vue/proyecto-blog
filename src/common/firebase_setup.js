import * as firebase from "firebase";
import "firebase/auth";
import "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyCzg64NNzxQS0Fs5eSxUNPIZnvHxweNPyY",
  authDomain: "blog-vue-2020.firebaseapp.com",
  databaseURL: "https://blog-vue-2020.firebaseio.com",
  projectId: "blog-vue-2020",
  storageBucket: "blog-vue-2020.appspot.com",
  messagingSenderId: "958733559978",
  appId: "1:958733559978:web:59daf93bd453ec100988d3"
};

  export default firebase.initializeApp(firebaseConfig)