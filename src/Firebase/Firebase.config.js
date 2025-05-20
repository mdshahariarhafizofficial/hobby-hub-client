// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,

//   apiKey: "AIzaSyDbo7Z0P--8ZnDZONFXdfFgykV9ChtJLz4",
//   authDomain: "hobby-hub-acab3.firebaseapp.com",
//   projectId: "hobby-hub-acab3",
//   storageBucket: "hobby-hub-acab3.firebasestorage.app",
//   messagingSenderId: "98349167696",
//   appId: "1:98349167696:web:b760df5d196c225b540d55"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);