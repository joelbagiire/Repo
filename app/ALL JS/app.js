const email = document.querySelector("#email")
const password = document.querySelector("#password")
const btn = document.querySelector("#button")
const form = document.querySelector("#form")
const alert = document.querySelector("#information")
const greet = document.querySelector("#greeting")
const visible = document.querySelector("#icon_visible")


var emailValue = email.value
var passwordValue = password.value

btn.addEventListener('click', () =>{
    if(emailValue === "" || passwordValue === ""){
        alert.classList.remove('succuse')
        alert.classList.add('alert')
        alert.innerHTML = "Fill out all FIELDS"
    }else{
        alert.classList.remove('alert')
        alert.classList.add('succuse')
        alert.innerHTML = "SUCCUSE"
    }
})
    //    greetings 
var time = new Date()
var hours = time.getHours()
if(hours < 24 && hours > 15){
    greet.innerHTML = "GOOD EVENING"
}
if(hours < 12 && hours > -1){
    greet.innerHTML = "GOOD MORNING"
}
if(hours < 16 && hours > 11 ){
    greet.innerHTML = "GOOD AFTERNOON"
}
 visible.addEventListener('click', () =>{
     if(password.type === "password"){
        var confirmation = window.confirm('PASSWORD will be visible')
        if(confirmation){
            password.type = "text"
            visible.textContent = "visibility_off"
            visible.style.color = "#249ad1"
        }else{
            password.type = "password"
            visible.textContent = "visibility"
            visible.style.color = "#000"
        }
     }else{
        password.type = "password"
        visible.textContent = "visibility"
        visible.style.color = "#000"
    }
})