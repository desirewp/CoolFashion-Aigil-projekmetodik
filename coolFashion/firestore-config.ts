import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDv7e7AUiVSJxiD3d7nbzptKyCBl96IyYs",
  authDomain: "coolfashion-9fd35.firebaseapp.com",
  projectId: "coolfashion-9fd35",
  storageBucket: "coolfashion-9fd35.appspot.com",
  messagingSenderId: "309179090182",
  appId: "1:309179090182:web:687dad4c430b91b0d64a87",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Ropa på db för att få rätt "databasadress"
export const db = getFirestore(app);
export const storage = getStorage(app);
