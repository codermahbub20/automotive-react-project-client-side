// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdxHyWuRra931Rcgu3bqr8Fv7Oa1eOaEU",
  authDomain: "automotive-react-auth.firebaseapp.com",
  projectId: "automotive-react-auth",
  storageBucket: "automotive-react-auth.appspot.com",
  messagingSenderId: "769285301953",
  appId: "1:769285301953:web:61c59185e799049e295640"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;