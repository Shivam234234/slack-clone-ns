import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBmye0yV0Ch7b0BQfuK50FfnbZ54-KWbMk",
    authDomain: "slack-clone-30041999.firebaseapp.com",
    projectId: "slack-clone-30041999",
    storageBucket: "slack-clone-30041999.appspot.com",
    messagingSenderId: "606977030046",
    appId: "1:606977030046:web:4afd471cdf81631b82088f",
    measurementId: "G-DPN91C51MR"
  };


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider(); 

export { auth, provider };
export default db;