// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCllYMiV9aj3HIMF18vk89IGIdCbPLHL_Y",
  authDomain: "in-formula-1.firebaseapp.com",
  databaseURL: "https://in-formula-1-default-rtdb.firebaseio.com",
  projectId: "in-formula-1",
  storageBucket: "in-formula-1.appspot.com",
  messagingSenderId: "68140602458",
  appId: "1:68140602458:web:72ce7bcf5ed39929a93463",
  measurementId: "G-R6NZNG8F1X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// const db = getFirestore();

// import { collection, addDoc } from "firebase/firestore"; 

// try {
//   const docRef = await addDoc(collection(db, "users"), {
//     first: "Ada",
//     last: "Lovelace",
//     born: 1815
//   });
//   console.log("Document written with ID: ", docRef.id);
// } catch (e) {
//   console.error("Error adding document: ", e);
