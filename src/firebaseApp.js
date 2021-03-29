import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyBzhHKLgKIgX6VA_wqV7B7ShZ81RGJKIME",
  authDomain: "pratica-react-firebase.firebaseapp.com",
  projectId: "pratica-react-firebase",
  storageBucket: "pratica-react-firebase.appspot.com",
  messagingSenderId: "514798336990",
  appId: "1:514798336990:web:99fa5d83fa69205c847b4f"
};

firebase.initializeApp(firebaseConfig)

export const firestore = firebase.firestore()
