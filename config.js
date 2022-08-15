import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyB5PSwM-gg7opc24TSKjl7PFsqbRIZMuzk",
  authDomain: "proyectoclima3-f8a85.firebaseapp.com",
  databaseURL: "https://proyectoclima3-f8a85-default-rtdb.firebaseio.com",
  projectId: "proyectoclima3-f8a85",
  storageBucket: "proyectoclima3-f8a85.appspot.com",
  messagingSenderId: "178063022583",
  appId: "1:178063022583:web:34ac8bac852fbbb3b036f2"
};

firebase.initializeApp(firebaseConfig);

export default firebase.database();