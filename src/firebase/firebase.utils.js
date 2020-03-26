import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAeR145JogorOJslrzYuIoB4nYIdxrnUxY",
  authDomain: "react-ecommerce-cf2bb.firebaseapp.com",
  databaseURL: "https://react-ecommerce-cf2bb.firebaseio.com",
  projectId: "react-ecommerce-cf2bb",
  storageBucket: "react-ecommerce-cf2bb.appspot.com",
  messagingSenderId: "417655220349",
  appId: "1:417655220349:web:e9767b6e896b72d5616914",
  measurementId: "G-3DT84CC81R"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;