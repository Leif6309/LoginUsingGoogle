//
//       This is untested code for Google API
//


var auth2;
var googleUser; // The current user

gapi.load('auth2', function(){
    auth2 = gapi.auth2.init({
        client_id: '48171409640-pp7nd78c5k6fshaui62hseq75ormnvmu.apps.googleusercontent.com'
    });
    auth2.attachClickHandler('signin-button', {}, onSuccess, onFailure);

    auth2.isSignedIn.listen(signinChanged);
    auth2.currentUser.listen(userChanged); // This is what you use to listen for user changes
});  

var signinChanged = function (val) {
    console.log('Signin state changed to ', val);
};

var onSuccess = function(user) {
    console.log('Signed in as ' + user.getBasicProfile().getName());
    // Redirect somewhere
};

var onFailure = function(error) {
    console.log(error);
};

function signOut() {
    auth2.signOut().then(function () {
        console.log('User signed out.');
    });
}        

var userChanged = function (user) {
    if(user.getId()){
      // Do something here
    }
};