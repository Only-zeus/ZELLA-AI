import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyCQfmnqIL4_FlfDVGPl0o_oLdDQK4fUjeo",
  authDomain: "zella-424f2.firebaseapp.com",
  projectId: "zella-424f2",
  storageBucket: "zella-424f2.firebasestorage.app",
  messagingSenderId: "1008967672362",
  appId: "1:1008967672362:web:20cdc14e463c1e81949953",
  databaseURL: "https://zella-424f2-default-rtdb.firebaseio.com"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const realtimeDB = getDatabase(app);