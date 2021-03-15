import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA8r_avl1ad8CK-YQDbw-Gz5T10n88Otog",
  authDomain: "app-restaurants-7d5ca.firebaseapp.com",
  projectId: "app-restaurants-7d5ca",
  storageBucket: "app-restaurants-7d5ca.appspot.com",
  messagingSenderId: "116812346657",
  appId: "1:116812346657:web:7fcdb1111cf08e2afbba60",
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
