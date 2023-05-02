// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyBi494XxixYxyzNnscgfoyr5lBULQ2NXco",

  authDomain: "jobiapp-1f5e5.firebaseapp.com",

  projectId: "jobiapp-1f5e5",

  storageBucket: "jobiapp-1f5e5.appspot.com",

  messagingSenderId: "664220215472",

  appId: "1:664220215472:web:a994f6bdb694d11d667375"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const db = getDatabase(app);

export {app, db};