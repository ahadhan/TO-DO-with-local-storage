
// for Login page

let login = document.getElementById("login");
let signUp = document.getElementById("signup");
let errorsAlert = document.getElementById("alert");
let alertText = document.getElementById("alert-text")

let email = document.getElementById("exampleInputEmail1");
let password = document.getElementById("exampleInputPassword1");
let firstName = document.getElementById("firsNameInput1");
let lastName = document.getElementById("lastNameInput4");
let email2 = document.getElementById("exampleInputEmail2");
let confirmPassword = document.getElementById("confirminputPassword4");
let passwordCA = document.getElementById("exampleInputPassword2");



const changePagetoCA = () => {
    event.preventDefault()
    // console.log(login);
    login.style.display = "none";
    signUp.style.display = "block";
}

const changePagetoLogin = () => {
    event.preventDefault()
    signUp.style.display = "none";
    login.style.display = "block";
}

login.addEventListener("submit", (event) => {
    event.preventDefault();
    validateInputs();
    // if(messages <= 0){
    //     msg= "Successfully Login!.";
    //     messages.push(msg);
    //     errorsM();
    // // event.reset();
    //     }
});

signUp.addEventListener("submit", (event) => {
    event.preventDefault();
    validateInputs();
    // if(messages <= 0){
    //     msg= "Successfully Create Account!";
    //     messages.push(msg);
    //     errorsM();
    // // event.reset();
    //     }
});

var messages = [];


const validateInputs = () => {
    const emailValue = email.value;
    const passwordValue = password.value;
    const firstNameValue = firstName.value;
    const lastNameValue = lastName.value;
    const emailValue2 = email2.value;
    const confirmValue = confirmPassword.value;
    const passwordCa = passwordCA.value;
    console.log(emailValue, passwordValue,);
    // if()

    // if(login.style.display === "block" ){
    if (emailValue === "" || emailValue === null) {
        msg = "Email Cant be Blank!"
        messages.push(msg);
        console.log(messages.length)
        errorsM();
        console.log("email checked")
    }
    else if (passwordValue.length < 8 || passwordValue.length === 0) {
        msg = "Password Should contain atleast 8 characters";
        messages.push(msg);
        errorsM();
        login.reset();
        console.log("password checked")
    }
    else {
        msg = "Successfully Login!"
        messages.push(msg);
        login.reset();
        errorsM();
    }

    if (signUp.style.display === "block") {

        if (firstNameValue === "" || firstNameValue === null) {
            msg = "First Name must be fill!";
            messages.push(msg);
            errorsM();
            signUp.reset();
            console.log("first name checked")
        }

        else if (emailValue2 === "" || emailValue2 === null) {
            msg = "Email Cant be Blank!"
            messages.push(msg);
            console.log(messages.length)
            errorsM();
            signUp.reset();
            console.log("email checked")
        }
        else if (passwordCa.length < 8 || passwordCa.length === 0) {
            msg = "Password Should contain atleast 8 characters";
            messages.push(msg);
            signUp.reset();
            errorsM();
        }

        else if (passwordCa !== confirmValue) {
            msg = "Confirm Password does not match!";
            messages.push(msg);
            signUp.reset();
            errorsM();
        }
        else {
            msg = "Successfully Registered!"
            messages.push(msg);
            signUp.reset();
            errorsM();
        }
    }
}

const errorsM = () => {
    if (messages.length > 0) {
        errorsAlert.style.display = "block";
        alertText.innerText = messages;
        messages = [];
    }
}

const showPassword = () => {
    console.log(password);
    if (password.type === "password") {
        password.type = "text";
    }
    else {
        password.type = "password";
    }
}

// const submitFunc = () => {
//     event.preventDefault();
//     validateInputs();
//     if(messages <= 0){
//     msg= "Successfully Login!.";
//     messages.push(msg);
//     errorsM();
//     // login.reset();
//     // event.default();
//     }
// }