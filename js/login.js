const $loginForm = document.querySelector(".nav-login");
const $profile = document.querySelector(".nav-profile");
const $navID = document.querySelector(".login-id");
const $id = document.querySelector(".nav-login input:first-child");
const $userinfo_ID = document.querySelector(".profile-userInfo__text__ID > span");

$loginForm.addEventListener("submit",onLoginSubmit);

function onLoginSubmit(event){

    event.preventDefault();
    let idInput=$id.value;

    
    localStorage.setItem("ID",idInput);
    
    
    $navID.innerText = idInput;
    $loginForm.classList.add("hidden");
    $profile.classList.remove("hidden");
}

const loggedID = localStorage.getItem("ID");

if(loggedID){

    $profile.classList.remove("hidden");
    $loginForm.classList.add("hidden");
    $navID.innerText = loggedID;
   

}
else{
    $loginForm.classList.remove("hidden");
    $profile.classList.add("hidden");
}