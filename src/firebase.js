import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/database";
import "firebase/storage";


var firebaseConfig = {
    apiKey: "AIzaSyCdBOfWUZObKh2lUjEoOoxZQL_y1mgxJ-A",
    authDomain: "buzzchat-8e1d4.firebaseapp.com",
    databaseURL: "https://buzzchat-8e1d4.firebaseio.com",
    projectId: "buzzchat-8e1d4",
    storageBucket: "buzzchat-8e1d4.appspot.com",
    messagingSenderId: "337428207797",
    appId: "1:337428207797:web:1e27b0cd373c32bcd746fc"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
