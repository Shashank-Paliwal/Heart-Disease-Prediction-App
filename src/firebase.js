// firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {

    apiKey: "AIzaSyBZ3UbI5UUi4cJDPrZ1bz-J1g0Giqp875I",
  
    authDomain: "heart-disease-prediction-b8439.firebaseapp.com",
  
    projectId: "heart-disease-prediction-b8439",
  
    storageBucket: "heart-disease-prediction-b8439.appspot.com",
  
    messagingSenderId: "820421817757",
  
    appId: "1:820421817757:web:10653a44de866d1df62b74"
  
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
