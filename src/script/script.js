const sign = document.querySelector('.login-register');
const iks = document.querySelector('.iks');
const login = document.querySelector('.login');
sign.addEventListener('click', function(){
    login.classList.add('login-special');
})
iks.addEventListener('click', function(){
    login.classList.remove('login-special');
})