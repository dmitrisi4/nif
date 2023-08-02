// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC3cT8bQm4V4F-3Y5Ef53mI5DzEbgbT4ps",
    authDomain: "nif-fullstack-e9d47.firebaseapp.com",
    projectId: "nif-fullstack-e9d47",
    storageBucket: "nif-fullstack-e9d47.appspot.com",
    messagingSenderId: "1041975127216",
    appId: "1:1041975127216:web:dac420ba43f0fc12165f75",
    measurementId: "G-CSDM3XQPB0"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
const analytics = getAnalytics(appFirebase);