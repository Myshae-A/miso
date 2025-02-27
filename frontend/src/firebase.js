// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore"
// import { getAuth } from "firebase/auth";
// import admin from 'firebase-admin';

// import dotenv from 'dotenv';
// dotenv.config();

// const firebaseConfig = {
//   apiKey: "AIzaSyCagIPnhrvn2sPYcwMtdKnGNjNZYVeZLZ4",
//   authDomain: "ut-seller.firebaseapp.com",
//   projectId: "ut-seller",
//   storageBucket: "ut-seller.firebasestorage.app",
//   messagingSenderId: "526548334991",
//   appId: "1:526548334991:web:4b39e533714d71d5f0f3fa",
//   measurementId: "G-WWWX3QW98K"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);
// export { firebaseConfig };

// export default db;
// export const auth = getAuth(app);

import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { firebaseConfig };
export { db };
export const auth = getAuth(app);
export default app;