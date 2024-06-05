
// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
//auth
import { getAuth } from "firebase/auth";
import "firebase/compat/auth";
//firestore
import "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCG1-SMFQeEd7t7bfg_WdnSVnPDoohOhJI",
  authDomain: "clone-ad54e.firebaseapp.com",
  projectId: "clone-ad54e",
  storageBucket: "clone-ad54e.appspot.com",
  messagingSenderId: "817059665120",
  appId: "1:817059665120:web:bd7136311ef082ce22ac85",
};
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();


/////////////////////////////////////////////////
