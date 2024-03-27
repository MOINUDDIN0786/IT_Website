import firebase from './firebase'; // Import firebase from 'firebase/app'
import 'firebase/auth'; // Import 'firebase/auth' for authentication

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDWPjn0umhMtEEGZsxzRmLl0qkWDOLZbyY",
  authDomain: "keenable-d76f0.firebaseapp.com",
  projectId: "keenable-d76f0",
  storageBucket: "keenable-d76f0.appspot.com",
  messagingSenderId: "998048817906",
  appId: "1:998048817906:web:41a0364d908bf0c479a66b",
  measurementId: "G-JDCLH5YQ16"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;