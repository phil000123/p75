import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyArrMkOunFeSl-9GE_ms1kmWcq3N1hRlUQ",
  authDomain: "qr-scanner-74fe8.firebaseapp.com",
  projectId: "qr-scanner-74fe8",
  storageBucket: "qr-scanner-74fe8.appspot.com",
  messagingSenderId: "126511881456",
  appId: "1:126511881456:web:f74e231e03c2e3f00cf635"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
