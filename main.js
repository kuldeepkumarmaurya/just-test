const form = document.getElementById("form");
const passWord1 = document.getElementById("password1");
const passWord2 = document.getElementById("password2");
const messageContainer = document.querySelector(".alert-container");
const message = document.getElementById("alert");

let isValid = false;

function validateForm(){
    // usig constriant API
   let isValid = form.checkValidity();
    console.log(isValid);
    console.log(passWord2.value, passWord1.value)
    //Check if password match
    if(passWord1.value === passWord2.value){
        passWordsMatch = true;
        passWord1.style.borderColor = "green";
        passWord2.style.borderColor = "green"
    }else{
        passWordsMatch = false;
        message.textContent = "make sure passwords Match";
        message.style.color = "red";
        messageContainer.style.borderColor = "red";
        passWord1.style.borderColor = "red";
        passWord2.style.borderColor = "red";
    }
    // if forms valid and password match
    if(isValid && passWordsMatch){
        message.textContent = "succesfully Registered"
        message.style.color = 'green';
        messageContainer.style.borderColor = 'green';
    }
}





