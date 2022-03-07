
var firebaseConfig = {
      apiKey: "AIzaSyDFha9G35bPxVtXA_fhHMLCNCjOyUCx0bA",
      authDomain: "kwitterqwerty.firebaseapp.com",
      projectId: "kwitterqwerty",
      storageBucket: "kwitterqwerty.appspot.com",
      messagingSenderId: "552329122316",
      appId: "1:552329122316:web:d668f515c338cae0839429"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
