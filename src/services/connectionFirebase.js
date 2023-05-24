import firebase from 'firebase/compat/app';


const firebaseConfig = {
    apiKey: "AIzaSyD_6bRhd5IdzZVRfy9aYZtb0QDVSkxf3_E",
    authDomain: "purple-crudfirebase.firebaseapp.com",
    projectId: "purple-crudfirebase",
    storageBucket: "purple-crudfirebase.appspot.com",
    messagingSenderId: "611393485362",
    appId: "1:611393485362:web:8afd6e919c2cb9f5241a2b"
  };

  if(!firebase.app){
    firebase.initializeApp(firebaseConfig);
  }

export default firebase;