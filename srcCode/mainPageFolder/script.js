

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyC4jsvf0PsZvYTH_25jXLAdLXpDVFg1uhw",
    authDomain: "cinegearsuserslist.firebaseapp.com",
    databaseURL: "https://cinegearsuserslist.firebaseio.com",
    projectId: "cinegearsuserslist",
    storageBucket: "cinegearsuserslist.appspot.com",
    messagingSenderId: "934939093990"
  };
  firebase.initializeApp(config);

alert('tst');

function signInAction(){
    var userNameValue = document.getElementById('userNameId').value
    var passwordValue = document.getElementById('passwordId').value

    try {
    firebase.auth().signInWithEmailAndPassword(userNameValue, passwordValue).then((user) =>{

        alert(
            // 'Welcome ' +  userNameValue + ', you are now logged in!'
            user.email 
            )
            window.open("localhost:3000/about");
            // localhost:3000/about
            })}
    catch (error)
        {
          console.log(error)
        }

        }


