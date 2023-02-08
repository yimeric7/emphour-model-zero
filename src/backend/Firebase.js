// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCgITBAK2oSHkSlnjANAhCxfhEQn_PhyZA",
    authDomain: "emphour-2acdc.firebaseapp.com",
    databaseURL: "https://emphour-2acdc-default-rtdb.firebaseio.com",
    projectId: "emphour-2acdc",
    storageBucket: "emphour-2acdc.appspot.com",
    messagingSenderId: "211768946621",
    appId: "1:211768946621:web:32a8858a644477cb592cd4",
    measurementId: "G-BMYK06ZL13"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db }

export const auth = getAuth(app)

export default app