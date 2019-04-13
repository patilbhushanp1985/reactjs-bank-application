
export function validateUser() {
    var usernameElement = document.getElementById('username');
    var passwordElement = document.getElementById('password');
    if(usernameElement == null || usernameElement == undefined || usernameElement == ''){
        //new registration
    } else if(passwordElement == null || passwordElement == undefined || passwordElement == '') {
        //Show password not entered error
    } else if(usernameElement.nodeValue == 'admin' && passwordElement.nodeValue == 'admin') {
        //show home page
        document.remove(this)
    } else {
        // show login failure page
    }
}
