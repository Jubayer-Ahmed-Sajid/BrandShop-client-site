// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDw17GQMaP50ZRXWPYAhEyFsv9VjxEqZVs",
  authDomain: "assignment-10-e2f24.firebaseapp.com",
  projectId: "assignment-10-e2f24",
  storageBucket: "assignment-10-e2f24.appspot.com",
  messagingSenderId: "56731638234",
  appId: "1:56731638234:web:eac7b7903e1a6efa8348e3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth