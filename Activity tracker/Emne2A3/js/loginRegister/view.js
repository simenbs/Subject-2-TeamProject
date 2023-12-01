let view = document.getElementById('app');
loginView()
function loginView(){
    view.innerHTML = /*HTML*/`
        <div class="wrapper transform">
            <div class="innerWrapper loginbackground textaligncenter transform">
                <h1>Welcome to the activity tracker</h1>
                <div><input class="login" type="text" placeholder="Username" id="uNameIn"></div>
                <div id="userField">Required Field</div>
                <div><input class="login" type="password" placeholder="Password" id="pWordIn"></div>
                <div id="passField">Required Field</div>
                <p class="forgotPW">Forgot Password?</p>
                <div>
                    <button class="login" onclick="login()" id="loginbutton">Login</button>
                </div>
            </div>
            <div class="signuptextlocation transform center">
                <div>Create account</div>
            </div>
            <div class="signuplocation transform center">
                <button class="signUp" onclick="sendToRegisterUser()">Sign up</button>
            </div>
        </div>
    `;

    loadLocalStorage();
}

function registerUserView(){
    view.innerHTML = /*HTML*/`
    <div class="signUpWrapper transform">
        <div class="innersignUpWrapper textaligncenter transform">
            <h1>Sign up</h1>
            <div><input class="login background" type="text" placeholder="Username" id="usernameInput"> </div>
            <div id="regiUserField">Required Field</div>
            <div><input class="login background" type="text" placeholder="Email" id="emailInput"></div>
            <div id="regiEmailField">Required Field</div>
            <div><input class="login background" type="password" placeholder="Password" id="passwordInput"></div>
            <div id="regiPassField">Required Field</div>
            <div><input class="login background" type="password" placeholder="Repeat Password" id="passwordInputRepeat"></div>
            <div id="repeatPassField">Required Field</div>
            <div>
                <button class="login" onclick="createUser()">Register</button>
            </div>
        </div>
        <div class="signuptextlocation transform center">
            <div>Already have a user?</div>
        </div>
        <div class="signuplocation transform center">
            <button class="signUp" onclick="backToLogin()">Login</button>
        </div>
    </div>
    `;
}
