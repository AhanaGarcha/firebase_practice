
//ADD YOUR FIREBASE LINKS
 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyB9X1tLrW9q7t-5px5TyX66QugZOEuFDuI",
    authDomain: "kwitter-78b24.firebaseapp.com",
    databaseURL: "https://kwitter-78b24-default-rtdb.firebaseio.com",
    projectId: "kwitter-78b24",
    storageBucket: "kwitter-78b24.appspot.com",
    messagingSenderId: "927370511143",
    appId: "1:927370511143:web:d86880d44c67cfbc231f02"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function addUser(){
     user_name =  document.getElementById("user_name").value;
     firebase.database().ref("/").child(user_name).update({
         purpose:"adding user"
     });
  }