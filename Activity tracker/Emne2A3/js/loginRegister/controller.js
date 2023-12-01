//verify username and password and send the user to the dashboard
let wrongpasswordCounter = 0;
function login() {
    let storedUserName = model.data.user.userName;
    let storedPassword = model.data.user.password;

    let username = document.getElementById('uNameIn').value;
    let password = document.getElementById('pWordIn').value;

    if (username == storedUserName && password == storedPassword) {
        dashView();
    }
    if(username === '') {
        document.getElementById("userField").style.display = 'block';
    }
    else if(username != storedUserName) {
        document.getElementById("userField").style.display = 'block';
        document.getElementById("userField").innerHTML= `Wrong username`;
    }
    if(password === '') {
        document.getElementById("passField").style.display = 'block'; 
    }
    else if(password != storedPassword) {
        document.getElementById("passField").style.display = 'block'; 
        document.getElementById("passField").innerHTML= `Wrong password`;
        wrongpasswordCounter++;
    }
    setTimeout(function() {
        document.getElementById("userField").style.display = 'none';
        document.getElementById("passField").style.display = 'none';
    },2000);
    if(wrongpasswordCounter === 4) {
        document.getElementById("loginbutton").disabled = true;
        document.getElementById("passField").innerHTML= `Wait 3 minutes`;
        document.getElementById("userField").style.display = 'none';
        setTimeout(function() {
            document.getElementById("loginbutton").disabled = false;
            wrongpasswordCounter = 0;
        },30000);
    }
}

//send user to register page
function sendToRegisterUser() {
    registerUserView();
}

//send user back to login page
function backToLogin() {
    loginView();
}

//function to create user account
function createUser() {
    let username = document.getElementById('usernameInput').value;
    let email = document.getElementById('emailInput').value;
    let password = document.getElementById('passwordInput').value;
    let passwordRepeat = document.getElementById('passwordInputRepeat').value;

    if (password === passwordRepeat && username != '' && email != '') {
        model.data.user.userName = username;
        model.data.user.password = password;
        model.data.user.email = email;

        document.getElementById('usernameInput').value = '';
        document.getElementById('emailInput').value = '';
        document.getElementById('passwordInput').value = '';
        document.getElementById('passwordInputRepeat').value = '';

        saveLocalStorage();
    
        loginView();
    }
    if(username == '') {
        document.getElementById("regiUserField").style.display = 'block';
    }
    if(email == '') {
        document.getElementById("regiEmailField").style.display = 'block';
    }
    if(password == '') {
        document.getElementById("regiPassField").style.display = 'block';
    }
    if(passwordRepeat != password) {
        document.getElementById("repeatPassField").style.display = 'block';
        document.getElementById("repeatPassField").innerHTML = `Does not match`;
    }
    else if(passwordRepeat == '') {
        document.getElementById("repeatPassField").style.display = 'block';
    }
    setTimeout(function() {
        document.getElementById("regiUserField").style.display = 'none';
        document.getElementById("regiEmailField").style.display = 'none';
        document.getElementById("regiPassField").style.display = 'none';
        document.getElementById("repeatPassField").style.display = 'none';
    },5000);
}