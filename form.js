
var firebaseConfig = {
    apiKey: "AIzaSyCllYMiV9aj3HIMF18vk89IGIdCbPLHL_Y",
    authDomain: "in-formula-1.firebaseapp.com",
    databaseURL: "https://in-formula-1-default-rtdb.firebaseio.com",
    projectId: "in-formula-1",
    storageBucket: "in-formula-1.appspot.com",
    messagingSenderId: "68140602458",
    appId: "1:68140602458:web:72ce7bcf5ed39929a93463",
    measurementId: "G-R6NZNG8F1X"
  };

      firebase.initializeApp(firebaseConfig);
      

function signUp(){

    var email = document.getElementById("email");
    var password = document.getElementById("password");

    const promise = firebase.auth().createUserWithEmailAndPassword(email.value, password.value).then(function(user) {
        var user = firebase.auth().currentUser;
        logUser(user); // Optional
    }, function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(error.message)
    });
    
    function logUser(user) {
        var ref = firebase.database().ref("users");
        var obj = {
            name: getId("name"),
            familyName: getId("familyName"),
            emaill: getId("email")
        };
        ref.push(obj);

         function getId(id){
            return document.getElementById(id).value;
        }
        alert("Registration was successful!")
        moveToLogin()
    }

}

function signIn(){
		
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    
    const promise = firebase.auth().signInWithEmailAndPassword(email.value, password.value);
    promise.then((userCredential) => {
        var code = prompt(["If you admin, enter admin code, else enter '0'"], ["Enter code here..."]);
        if(code == '1111'){
            window.location.assign("adminPage.html");
        }
        else if(code == '0'){
            window.location.assign("map.html");
        }
        else{
            alert("Your admin code is incorrect!");
            window.location.replace("login.html");
        }
        
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
      });
    
}

function editData(){
    var trackType = document.getElementById("trackType").value;
    var price = document.getElementById("price").value;
    var morning = document.getElementById("morning").value;
    var noon = document.getElementById("noon").value;
    var evening = document.getElementById("evening").value;

    if(price == "" || morning == "" || noon == "" || evening == ""){
        alert("Please fill all the required fields!");
    } 
    else{
        firebase.database().ref().child(trackType).update({ 
            Price: price,
            HoursMorning: morning,
            HoursNoon: noon,
            HoursEvening: evening
        
        });

        alert("The data was successfully updated!");
    }
}

function moveToMap(){
    window.location.assign("map.html");
}
function moveToSignUp(){
    window.location.assign("register.html");
}
function moveToEdit(){
    window.location.assign("editData.html");
}
function moveToLogin(){
    window.location.replace("Login.html");
}

