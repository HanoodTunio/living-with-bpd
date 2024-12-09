import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your Firebase config object
const firebaseConfig = {
    apiKey: "AIzaSyCAHjiz9FG112HSJITp4GzoqJ7bE8knRLw",
    authDomain: "bpdwithliving.firebaseapp.com",
    projectId: "bpdwithliving",
    storageBucket: "bpdwithliving.firebasestorage.app",
    messagingSenderId: "153379070510",
    appId: "1:153379070510:web:6140e19a1c07e7d08d35bf",
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth and Firestore
export const auth = getAuth(app);  // Pass the initialized app to getAuth
export const db = getFirestore(app);  // Pass the initialized app to getFirestore
