 // * Firebase Config
 const firebaseConfig = {
  apiKey: "AIzaSyCjevr64ueQTgYHrbu0nWm3e7GHqD9C8cA",
  authDomain: "juncture-book-c0ebf.firebaseapp.com",
  databaseURL: "https://juncture-book-c0ebf.firebaseio.com",
  projectId: "juncture-book-c0ebf",
  storageBucket: "juncture-book-c0ebf.appspot.com",
  messagingSenderId: "455333212304",
  appId: "1:455333212304:web:dcf4cf7a7e7c2ff7a02815",
  measurementId: "G-D4Y088FR28"
}; 


// * Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// * Refrence messeages collection
var messagesRef = firebase.database().ref("messages");

// * Listen for form submit
document.getElementById("contactForm").addEventListener("submit", submitForm);
// submit form
function submitForm(e){
   e.preventDefault();
   //* Get values
  var name = getInputVal('name');
  var email = getInputVal('email');
  var message = getInputVal('message');
  
  saveMessage(name, email, message);
  }

//* Function to get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// * Save a message

function saveMessage(name,email,message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
   name: name,
   email: email,
   message : message
  });
}

// Smooth scroll

	const scroll = new SmoothScroll('.menu a[href*="#"]',{
    speed:900
  });
