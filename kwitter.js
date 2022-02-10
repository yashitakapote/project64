const firebaseConfig = {
    apiKey: "AIzaSyB2W1gPanS6Av4qTaZk3VXxytLLSH4ZZdo",
    authDomain: "project94-f426f.firebaseapp.com",
    projectId: "project94-f426f",
    storageBucket: "project94-f426f.appspot.com",
    messagingSenderId: "475152293669",
    appId: "1:475152293669:web:6c4fe9f590a0502c6944cc",
    measurementId: "G-1RZ6NY7MP9"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);



function addUser(){
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name", user_name);
    window.location = "kwitter_room.html"
}