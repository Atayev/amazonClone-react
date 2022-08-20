import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDgnfcH4qpD4VvhE1jJ4nJ8iY3Pxp4Xgeg",
    authDomain: "clone-d7aeb.firebaseapp.com",
    projectId: "clone-d7aeb",
    storageBucket: "clone-d7aeb.appspot.com",
    messagingSenderId: "461635152697",
    appId: "1:461635152697:web:c6f7fea0180482c6bfd6e8"
};
  
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();


export { db, auth };