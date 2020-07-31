import firebase from 'firebase'
import firestore from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyD0_pIqwBMkwYJJ_SruA3nrKpIpq7u3PYY",
  authDomain: "shipping-company-68b50.firebaseapp.com",
  databaseURL: "https://shipping-company-68b50.firebaseio.com",
  projectId: "shipping-company-68b50",
  storageBucket: "shipping-company-68b50.appspot.com",
  messagingSenderId: "344034697812",
  appId: "1:344034697812:web:ab840529063d86fa4003c1",
  measurementId: "G-ZRSZC0V4PG"
};
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  export default firebaseApp.firestore()