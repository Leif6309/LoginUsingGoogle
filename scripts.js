
var SignOut = document.getElementById("SignOutLink");                     // Get the Href with ID SignOutLink 

function onSignIn(googleUser) {                       // Login with Google user

    var profile = googleUser.getBasicProfile();



    console.log('ID: ' + profile.getId()) // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName())
    console.log('Image URL: ' + profile.getImageUrl())
    console.log('Email: ' + profile.getEmail())// This is null if the 'email' scope is not present.

    document.getElementById('LoggedInAs').innerHTML = "Signed in as : " + profile.getEmail()     // write the signed in User to index.html

    // Saves the email in a session
    // var loggedInSession = sessionStorage.setItem("Session", profile.getEmail());
    // document.getElementById("session").innerHTML = "Session:  " + sessionStorage.getItem("Session");    // write the session (email)


    CreateSessionId(profile.getEmail());
    // Call function "CreateSessionId"  passing the variable profile.getEmail

}


function signOut() {                             // This will sign you out and clear all sessions
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {

        console.log('User signed out.');
        document.getElementById('LoggedInAs').innerHTML = "";
        document.getElementById('session').innerHTML = "";

        sessionStorage.clear();   // Clear all stored sessions

        CheckSession();                                      // Run function 


    });
}

function validateForm() {                       // Not used  !!
    var x = document.forms["myForm"]["fname"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
}

function CreateSessionId(email) {        // Saves the email in a session

    var loggedInSession = sessionStorage.setItem("Session", email);
    document.getElementById("session").innerHTML = "Session:  " + sessionStorage.getItem("Session");
    // write the session (email) to id=session in index.html

}

function CheckSession() {                // Check if session is empty

    if (sessionStorage.length === 0) {             // chech that the session is clear
        alert("You are signed out !!!");

    }

}

SignOut.addEventListener("click", signOut);                             // CALL function signOut when Href is clicked