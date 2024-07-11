// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
 
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// import firebase from "firebase"
import firebase from 'firebase/compat/app';
// TODO: Add SDKs for Firebase products that you want to use
//  https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0ejR_X_y2ihrVSnhDjdpRKpR7ejYa_tY",
  authDomain: "linkedin-clone-yt-2dde4.firebaseapp.com",
  projectId: "linkedin-clone-yt-2dde4",
  storageBucket: "linkedin-clone-yt-2dde4.appspot.com",
  messagingSenderId: "667282949713",
  appId: "1:667282949713:web:24c455bada1b3ad6861a70",
  measurementId: "G-9MC1NSVMKQ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const analytics = getAnalytics(firebaseApp);
const auth = firebase.auth();

export {db,auth};