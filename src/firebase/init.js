import firebase from 'firebase'
 import firestore from 'firebase/firestore'
var firebaseConfig = {
    apiKey: "AIzaSyDs9oQXWyzIWq_i7kVrtSsBmDxESXaXcdg",
    authDomain: "tajaltechnology.firebaseapp.com",
    databaseURL: "https://tajaltechnology.firebaseio.com",
    projectId: "tajaltechnology",
    storageBucket: "tajaltechnology.appspot.com",
    messagingSenderId: "561200287135",
    appId: "1:561200287135:web:1af93aa3f4e7e53ecbc1aa",
    measurementId: "G-FNCBLRSX16"
  };
const firebaseApp= firebase.initializeApp(firebaseConfig);
//firebaseApp.firestore().settings( {timestampsInSnapshots: true} )
   //firebase.analytics();
export default firebaseApp.firestore()
