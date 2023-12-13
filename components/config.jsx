// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAilwlzOpOlOEQ_r6O1IFI4FHsmJKOOMDw",
  authDomain: "orange-detect-1bebc.firebaseapp.com",
  projectId: "orange-detect-1bebc",
  storageBucket: "orange-detect-1bebc.appspot.com",
  messagingSenderId: "765247505593",
  appId: "1:765247505593:web:e2b4653aee8aed2c354768",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

//initizle database
export const storage = getStorage(app);
export const Auth = getAuth(app);
export const db = getDatabase(app);
export const store = getFirestore(app);
