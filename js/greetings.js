const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME ="hidden";
const USERNAME_KEY = "username";


function onLoginSubmit(tomato){
   tomato.preventDefault();//브라우저가 하려고 하는 행동을 막아줌.
   loginForm.classList.add(HIDDEN_CLASSNAME); //필요x
   const username = loginInput.value;
   localStorage.setItem(USERNAME_KEY, username);
   paintGreeting(username);
}

function paintGreeting(username){
   greeting.innerText = `Hello ${username}`;
   greeting.classList.remove(HIDDEN_CLASSNAME);
}


const savedUsername =  localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
   loginForm.classList.remove(HIDDEN_CLASSNAME);
   loginForm.addEventListener("submit", onLoginSubmit);
}else{
   paintGreeting(savedUsername);
}