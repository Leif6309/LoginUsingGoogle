// JavaScript LOGIN
//-----------OBJECT --------------------
//-----------OBJECT --------------------
// user.email                            Get email     
// user.password                         Get password  
var userDatabase = [
    {
        email: "Leif6309@gmail.com",
        password: "6309",

    },
    {
        email: "Tammy@gmail.com",
        password: "6309",

    },
    {
        email: "Alex@gmail.com",
        password: "6309",

    },
];

var button = document.getElementById("LoginButton");                 // Get the button with ID LoginButton 


function isUserValid(email, password) {
    for (var i = 0; i < userDatabase.length; i++) {
        if (userDatabase[i].email === email &&
            userDatabase[i].password === password) {
            return true;
        }
    }
    return false;
}


function LoginFunction() {

    var email = document.getElementById("inputEmail").value;            // From the html page Signin.html ID =  InputEmail
    var password = document.getElementById("inputPassword").value;      // From the html page Signin.html ID =  InputPassword

    //if (Email === "Leif6309@gmail.com" && Password === "6309") {         // If Email AND Password matches !!!!!!!!!!
    // if (user.email == Email && user.password == Password) {             // Same some above but get data from Objet user

    if (isUserValid(email, password)) {                                     // check username and password via function isUserValid

    alert("Godkänd inloggning !!.");

    document.getElementById("inputEmail").disabled = true;
    document.getElementById("inputPassword").disabled = true;
    document.getElementById("LoginButton").textContent = "Logged In !!";
    document.getElementById("LoginButton").style.backgroundColor = 'red';
    document.getElementById("LoginButton").disabled = true;

   // alert("forwarded to www.tingnet.se")
   window.location.href = "https://www.tingnet.se";
   

}
    else {
        alert("Please try again ?");
       


}

}

button.addEventListener("click", LoginFunction);                             // CALL function LoginFunction when button is clicked

// button.addEventListener("mouseover", LoginFunction);                      // CALL function LoginFunction when button is Mouseover


