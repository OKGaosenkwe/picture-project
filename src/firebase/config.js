import firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBAB3FY_jCUS72YL-_P38sH2D02M-PX6E",
  authDomain: "picture-project-fdbfe.firebaseapp.com",
  projectId: "picture-project-fdbfe",
  storageBucket: "picture-project-fdbfe.appspot.com",
  messagingSenderId: "974867403948",
  appId: "1:974867403948:web:361d895bc7f44a0751bb09"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

export const auth = firebaseApp.auth();
export const storage = firebaseApp.storage();
export const db = firebaseApp.firestore();