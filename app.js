
// for Login page

let login = document.getElementById("login");
let signUp = document.getElementById("signup");
let errorsAlert = document.getElementById("alert");
let alertText = document.getElementById("alert-text");
let userInNav = document.getElementById("user-in-nav");


let email = document.getElementById("exampleInputEmail1");
let password = document.getElementById("exampleInputPassword1");
let firstName = document.getElementById("firsNameInput1");
let lastName = document.getElementById("lastNameInput4");
let email2 = document.getElementById("exampleInputEmail2");
let confirmPassword = document.getElementById("confirminputPassword4");
let passwordCA = document.getElementById("exampleInputPassword2");



const changePagetoCA = (e) => {
    e.preventDefault()
    console.log(login);
    login.style.display = "none";
    signUp.style.display = "block";
}

const changePagetoLogin = (e) => {
    e.preventDefault()
    signUp.style.display = "none";
    login.style.display = "block";
}

let usersData = JSON.parse(localStorage.getItem('usersData')) || [];



if(login){
login.addEventListener("submit", (event) => {
    event.preventDefault();
    validateInputs();
})};

if(signUp){
signUp.addEventListener("submit", (event) => {
    event.preventDefault();
    validateInputs();
})};




var messages = [];
var currentUser = localStorage.getItem("currentUser") || null;
var userId = 1000;
var finalUserId;
var userFound;





const validateInputs = () => {
    const emailValue = email.value;
    const passwordValue = password.value;
    const firstNameValue = firstName.value;
    const lastNameValue = lastName.value;
    const emailValue2 = email2.value;
    const confirmValue = confirmPassword.value;
    const passwordCa = passwordCA.value;

    // console.log(emailValue, passwordValue,);
    // if()

    // if(login.style.display === "block" ){
    if (emailValue === "" || emailValue === null) {
        msg = "Email Cant be Blank!"
        messages.push(msg);
        console.log(messages.length)
        errorsM();
        console.log(email)
    }
    else if (passwordValue.length < 8 || passwordValue.length === 0) {
        msg = "Password Should contain atleast 8 characters";
        messages.push(msg);
        errorsM();
        login.reset();
        console.log("password checked")
    }
    else {
        const isRegistered = (emailValue, passwordValue) => {
            return usersData.find(user => user.email2 === emailValue && user.passwordCA === passwordValue);
        }
        userFound = isRegistered(emailValue, passwordValue)
        if (userFound) {
            msg = "Successfully Login!"
            messages.push(msg);
            login.reset();
            errorsM();
            console.log(emailValue, passwordValue, userFound)
            const currenUserfn =  () => {
                localStorage.setItem('currentUser', JSON.stringify(userFound));
                window.location.href = 'home.html';
            };
            currenUserfn();
        }
        else {
            msg = "Your are not registered. Create account to get registered!"
            messages.push(msg);
            errorsM();
        }
    }

   

    if (signUp.style.display === "block") {

        if (firstNameValue === "" || firstNameValue === null) {
            msg = "First Name must be fill!";
            messages.push(msg);
            errorsM();
            signUp.reset();
            console.log("first name checked")
        }

        if (emailValue2 == "" || emailValue2 == null) {
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

            const postData = () => {
                if (usersData && Array.isArray(usersData) && usersData.length > 0) {
                    lastUserId = (usersData[usersData.length - 1]).userId + 1;
                    finalUserId = lastUserId;
                }else{
                    finalUserId = userId;
                }

                const userData = {
                    email2: emailValue2,
                    passwordCA: passwordCa,
                    firstName: firstNameValue,
                    userId: finalUserId
                }
                usersData.push(userData)
                localStorage.setItem('usersData', JSON.stringify(usersData));
                //   console.log(JSON.stringify(localStorage.getItem("userData")));
                const currenUserfn = () => {
                    localStorage.setItem('currentUser', JSON.stringify(userData));
                    window.location.href = 'home.html';
                };
            currenUserfn();
            }
            postData();
            
            window.location.href = 'home.html';
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

// redirecting to Dashboard 
// TODO SECTION

if(userInNav){
    let userInNav = document.getElementById("user-in-nav");
  
    if (currentUser) {
      userInNav.innerText = "Welcome " + JSON.parse(currentUser).firstName;
    } else {
      userInNav.innerText = "User";
    }}

        let ulElem = document.getElementsByClassName("ul");
        let inputValue = document.getElementById("input");
        var todoId;
        let todoList = document.getElementById("todoList");

    let todoItems = JSON.parse(localStorage.getItem('todoItems')) || [];

    function updateTodoList() {
        todoList.innerHTML = "";
        todoItems.forEach((todo, index) => {
            const li = document.createElement("button");
            li.setAttribute("class", "btn btn-success")
            li.textContent = todo.todoItem;

            const deleteButton = document.createElement("span");
                deleteButton.innerHTML = '<i class="fa-solid fa-trash" style="color: #ed3838;"></i>'
                deleteButton.onclick = () => deleteTodo(index);
            
                li.appendChild(deleteButton);
                todoList.appendChild(li);
        });
    }

    function addTodo() {
        const todoItem = inputValue.value.trim();
        todoId = 100;
        
        
        if (todoItem !== "") {
            if(Array.isArray(todoItems) && todoItems.length > 0){
                todoId = todoItems[todoItems.length - 1].todoId + 1;
        }
        const newTodo = {
            todoItem,
            todoId,
            userId: JSON.parse(currentUser).userId
        }
        console.log();
            todoItems.push(newTodo);
            localStorage.setItem("todoItems", JSON.stringify(todoItems));
            inputValue.value = "";
            updateTodoList();
        }
    }
    function deleteTodo(index) {
        todoItems.splice(index, 1);
        localStorage.setItem("todoItems", JSON.stringify(todoItems));
        updateTodoList();
    }

    function deleteAll (){
        todoItems.length = 0;
        localStorage.removeItem("todoItems")
        updateTodoList();
        }

    // todoItems? todoItems.map(item, (item) => {
    //     console.log(item);
    // })