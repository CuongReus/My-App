import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyDwqX_C5C9RRU6uTbwCh6KKSXrZkE2QdLw",
    authDomain: "my-app-reactjs-7b091.firebaseapp.com",
    databaseURL: "https://my-app-reactjs-7b091.firebaseio.com",
    projectId: "my-app-reactjs-7b091",
    storageBucket: "my-app-reactjs-7b091.appspot.com",
    messagingSenderId: "39168901255",
    appId: "1:39168901255:web:37e4ef057a422d6d817822",
    measurementId: "G-HRQSGR11PX",
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({timestampsInSnapshots: true});
//   firebase.analytics();

  export default firebase;