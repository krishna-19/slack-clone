import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";
//api key from firebase
var config = {
  apiKey: "AIzaSyASO8QjKN_Fj-g8k8r1Op8dQDh_n_6LuAw",
  authDomain: "slack-clone-14a84.firebaseapp.com",
  databaseURL: "https://slack-clone-14a84.firebaseio.com",
  projectId: "slack-clone-14a84",
  storageBucket: "slack-clone-14a84.appspot.com",
  messagingSenderId: "641584774472",
  appId: "1:641584774472:web:52e12d3941ba0053ab477d",
  measurementId: "G-596B9NP75N"
};
firebase.initializeApp(config);

export default firebase;
