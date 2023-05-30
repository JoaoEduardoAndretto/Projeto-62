import firebase from "firebase";

//inicialize seu banco de dados
const firebaseConfig = {
  apiKey: "AIzaSyAoKkYesK0NMNJD116nWA9dNtdCcSE_Ry8",
  authDomain: "presenca-nas-aulas.firebaseapp.com",
  databaseURL: "https://presenca-nas-aulas-default-rtdb.firebaseio.com",
  projectId: "presenca-nas-aulas",
  storageBucket: "presenca-nas-aulas.appspot.com",
  messagingSenderId: "476412607254",
  appId: "1:476412607254:web:3915cecb810a2108c0ae37",
  measurementId: "G-5CY6K8QKEG"
};

// Initialize Firebase
if(!firebase.apps.length)
{ firebase.initializeApp(firebaseConfig); }

  export default firebase.database()
 

  