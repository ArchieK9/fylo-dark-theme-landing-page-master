'use strict'
let email = document.getElementById("email")
let dangerText = document.querySelector(".error")
let submitBtn = document.querySelector(".btn")

submitBtn.addEventListener( "click" ,(e)=>{

    email.validity.typeMismatch ?
    (e.preventDefault(),
    dangerText.style.opacity = 1):
    (dangerText.style.opacity = 0);
    // if (email.validity.typeMismatch) {
    //     e.preventDefault();
    //     dangerText.style.opacity = 1;

    // } else {
    //     dangerText.style.opacity = 0;
    // }
})