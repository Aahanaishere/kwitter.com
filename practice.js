var firebaseConfig = {
    apiKey: "AIzaSyAYfl51Ve64MRmb92E0RtpQI_r_VDG2wUs",
    authDomain: "kwitter-f85f5.firebaseapp.com",
    databaseURL: "https://kwitter-f85f5-default-rtdb.firebaseio.com",
    projectId: "kwitter-f85f5",
    storageBucket: "kwitter-f85f5.appspot.com",
    messagingSenderId: "339516320007",
    appId: "1:339516320007:web:91eacb98ab9e1f35e87da2"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

function addUser(){
    user_name=document.getElementById("user_name").value;

    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
}
