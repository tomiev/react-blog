import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"

// App's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQGNJKNc7hJQjOuSeh2iILNlOmjvdM1ks",
  authDomain: "react-blog-67183.firebaseapp.com",
  projectId: "react-blog-67183",
  storageBucket: "react-blog-67183.appspot.com",
  messagingSenderId: "472134577877",
  appId: "1:472134577877:web:0925ecc50dcfb357287c5c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
