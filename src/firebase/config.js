import * as firebase from 'firebase';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAN38D1AV6tK9FO_KEy3jPPbcB0GkgTAI8",
    authDomain: "picture-project-c45f4.firebaseapp.com",
    projectId: "picture-project-c45f4",
    storageBucket: "picture-project-c45f4.appspot.com",
    messagingSenderId: "998843603389",
    appId: "1:998843603389:web:381bd3c783e4748d7d9ad4",
    measurementId: "G-1ZKGYZV76G"
  };
// Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  //Initializing
  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export { projectStorage, projectFirestore, timestamp};