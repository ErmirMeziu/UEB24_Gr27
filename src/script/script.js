const sign = document.querySelector('.login-register');
const iks = document.querySelector('.iks');
const iks1 = document.querySelector('.iks1');
const login = document.querySelector('.login');
const sregister = document.querySelector('.sregister');
const register = document.querySelector('.register');
const signbutton = document.querySelector('.signbutton');
const body = document.querySelector('body');
const all = document.querySelector('.all');
sign.addEventListener('click', function(){
    login.classList.add('login-special');
    body.classList.add('body-special');
    all.classList.add('all-special');
})
iks.addEventListener('click', function(){
    login.classList.remove('login-special');
    body.classList.remove('body-special');
    all.classList.remove('all-special');
})
iks1.addEventListener('click', function(){
    register.classList.remove('register-special');
    body.classList.remove('body-special');
    all.classList.remove('all-special');
})
sregister.addEventListener('click', function(){
    login.classList.remove('login-special');
    register.classList.add('register-special');
})
signbutton.addEventListener('click', function(){
    login.classList.add('login-special');
    register.classList.remove('register-special');
})

