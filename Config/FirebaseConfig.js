// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY,
    authDomain: "pet-adopt-c2776.firebaseapp.com",
    projectId: "pet-adopt-c2776",
    storageBucket: "pet-adopt-c2776.appspot.com",
    messagingSenderId: "390642768314",
    appId: "1:390642768314:web:9ea97fe37d4bdd2018e583",
    measurementId: "G-NS68448ZTL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
