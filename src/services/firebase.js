import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDtg_De0Y43KPYY4KWfMYUUvm5zkTUnPig",
  authDomain: "onlineapp-cbe9e.firebaseapp.com",
  databaseURL: "https://onlineapp-cbe9e.firebaseio.com",
  projectId: "onlineapp-cbe9e",
  storageBucket: "onlineapp-cbe9e.appspot.com",
  messagingSenderId: "299877956065",
  appId: "1:299877956065:web:f6c46626a80457bc37faa0"
};

firebase.initializeApp(firebaseConfig);

export default firebase;