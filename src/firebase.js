import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCbFFCnjh_Udl3rsVbHdgU9EzQTWgRDUlg",
    authDomain: "macmac-88cc4.firebaseapp.com",
    databaseURL: "https://macmac-88cc4-default-rtdb.firebaseio.com",
    projectId: "macmac-88cc4",
    storageBucket: "macmac-88cc4.appspot.com",
    messagingSenderId: "501704330032",
    appId: "1:501704330032:web:5a5e189addeb3838b656f5",
    measurementId: "G-6EM9FFYJVS"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };