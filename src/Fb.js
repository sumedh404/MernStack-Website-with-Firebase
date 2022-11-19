
/*
import { initializeApp } from "firebase/app";
import {getDatabase} from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSB2-OiUkENlCq-RN8WNKO_I3FWWBwFNU",
  authDomain: "reactproject-2facf.firebaseapp.com",
  projectId: "reactproject-2facf",
  storageBucket: "reactproject-2facf.appspot.com",
  messagingSenderId: "1045393194606",
  appId: "1:1045393194606:web:08a567381c6d6889b9b07f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
*/

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxRj8OHRLyKztG797EroNo6RYRxhGbUnc",
  authDomain: "mernstackproject-8ea8f.firebaseapp.com",
  databaseURL: "https://mernstackproject-8ea8f-default-rtdb.firebaseio.com",
  projectId: "mernstackproject-8ea8f",
  storageBucket: "mernstackproject-8ea8f.appspot.com",
  messagingSenderId: "28618557013",
  appId: "1:28618557013:web:7fac8eea2964d114e2f6dc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
export default db;
