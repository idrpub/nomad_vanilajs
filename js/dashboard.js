
'use strict'

function getClock() {
  const clockBx = document.querySelector(".clock-bx");
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clockBx.innerText = `${hours}:${minutes}:${seconds}`;
}

const loginForm = document.querySelector("#loginForm");
const loginInput = document.querySelector("#loginForm input");
const todoBx = document.querySelector(".todo-bx");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function paintGreetings(username) {
  todoBx.innerText = `Hello ${username}`;
  todoBx.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}

function docInit(){
  getClock();
  setInterval(getClock, 1000);
}

document.addEventListener('load', docInit, true);
