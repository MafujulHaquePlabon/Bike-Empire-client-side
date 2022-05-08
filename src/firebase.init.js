// Import the functions you need from the SDKs you need
import { getAuth } from "@firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrt18DCY7fZW0XEMIRRYt1K6PaVCSiFSk",
  authDomain: "warehouse-management-9612f.firebaseapp.com",
  projectId: "warehouse-management-9612f",
  storageBucket: "warehouse-management-9612f.appspot.com",
  messagingSenderId: "311634851700",
  appId: "1:311634851700:web:38d5810c6066febba29e21"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;