import firebase from 'firebase'


const firebaseConfig = {
    apiKey: "AIzaSyAuVLzDY8InKS7B-Fxcb7S-ZXIcboelRLc",  
    authDomain: "uber-eat-clone-9f5ee.firebaseapp.com", 
    projectId: "uber-eat-clone-9f5ee",
    storageBucket: "uber-eat-clone-9f5ee.appspot.com",
    messagingSenderId: "310238800781",
    appId: "1:310238800781:web:f54d5d683a9f2df827abc4"
};
  
!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;

