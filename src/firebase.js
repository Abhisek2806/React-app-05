import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQM6Vt9wMzkgae8Q6TAkPmoJYN7XkgBAs",
  authDomain: "react-abhisek.firebaseapp.com",
  projectId: "react-abhisek",
  storageBucket: "react-abhisek.appspot.com",
  messagingSenderId: "983792873830",
  appId: "1:983792873830:web:180fa426198231ab2358a7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db=getFirestore()