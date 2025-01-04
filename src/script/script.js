/*register-form*/
const submit = document.getElementById('register-submit')
submit.addEventListener('click', function validate(event) {
    var isValid = true;
    var isValid1 = true;
    var name = document.getElementById('register-name').value;
    var surname = document.getElementById('register-surname').value;
    var email = document.getElementById('register-email').value;
    var password = document.getElementById('register-password').value;
    var confirmPassword = document.getElementById('confirm-password').value;
    var mesazhi = document.getElementById('message');
    var text = '';

    if (name.length == 0 || surname.length == 0 || email.length == 0 || password.length == 0 || confirmPassword == 0) {
        isValid = false;
        isValid1 = false;
        text = 'One of the required fields isn\'t filled.';
    }
    if (email.length > 0 && !email.includes('@') && isValid1) {
        text = text.concat(' ', 'Email doesn\'t contain \'@\'.');
        isValid = false;
    }
    if (email.length > 0 && email.includes('@') && isValid1) {
        var position = email.indexOf('@');
        var textAfter = email.substring(position + 1);
        var contains = textAfter.split('.');
        if (position == 0) {
            isValid = false;
            text = text.concat(' ', '\' @ \' - is used at wrong position.');
        } else if (contains.length == 1) {
            isValid = false;
            text = text.concat(' ', 'Email doesnt contain \' . \'.');
        }
        else if (email[position + 1] == '.') {
            isValid = false;
            text = text.concat(' ', '\' . \' - is used at wrong position.');
        }
    }

    if (password !== confirmPassword && isValid1) {
        isValid = false;
        text = text.concat(' ', 'Passwords don\'t match.');
    }

    if (isValid) {
        mesazhi.style.color = 'green';
        mesazhi.innerHTML = 'You have successfully signed up.';
        alert('You have successfully signed up.');
    } else {
        mesazhi.style.color = 'red';
        mesazhi.innerHTML = text;
    }
    event.preventDefault();
    return isValid;
});

/*login-form*/
var login_submit = document.getElementById("login-submit");

login_submit.addEventListener('click', function (event) {
    var login_email = document.getElementById("login-email").value;
    var login_password = document.getElementById("login-password").value;
    var valid = true;

    if (login_email.length === 0 || !login_email.includes('@') || login_password.length === 0) {
        valid = false;
    } else {
        var position1 = login_email.indexOf('@');
        var textAfter1 = login_email.substring(position1 + 1);
        var contains1 = textAfter1.split('.');

        if (contains1.length < 2 || login_email[position1 + 1] === '.' || textAfter1.endsWith('.') || position1 === 0) {
            valid = false;
        }
    }

    if (valid) {
        event.preventDefault();
        alert("You have successfully logged in.");
    }
});


/* login/register */
const sign = document.querySelector('.login-register');
const iks = document.querySelector('.iks');
const iks1 = document.querySelector('.iks1');
const loginall = document.querySelector('.login-all');
const login = document.querySelector('.login');
const sregister = document.querySelector('.sregister');
const register = document.querySelector('.register');
const signbutton = document.querySelector('.signbutton');
const body = document.querySelector('body');


sign.addEventListener('click', function () {
    login.classList.add('login-special');
    loginall.classList.add('login-special');
    body.classList.add('body-special');
});

iks.addEventListener('click', function () {
    login.classList.remove('login-special');
    loginall.classList.remove('login-special');
    body.classList.remove('body-special');
});


iks1.addEventListener('click', function () {
    register.classList.remove('register-special');
    loginall.classList.remove('login-special');
    body.classList.remove('body-special');
});

sregister.addEventListener('click', function () {
    login.classList.remove('login-special');
    register.classList.add('register-special');
});


signbutton.addEventListener('click', function () {
    login.classList.add('login-special');
    register.classList.remove('register-special');
});


loginall.addEventListener('click', function () {
    login.classList.remove('login-special');
    register.classList.remove('register-special');
    loginall.classList.remove('login-special');
    body.classList.remove('body-special');
});


login.addEventListener('click', function (event) {
    event.stopPropagation();
});

register.addEventListener('click', function (event) {
    event.stopPropagation();
});

/* backgroud-slideshow */
var i = 0;
var images = [
    'images/home-background/first.jpg',
    'images/home-background/second.jpg',
    'images/home-background/third.jpg',
    'images/home-background/fourth.jpg',
    'images/home-background/fifth.jpg'
];

var time = 5000;
const home = document.querySelector(".home");


function changeImg() {
    home.style.backgroundImage = `url(${images[i]})`;

    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }

    setTimeout(changeImg, time);
}

changeImg();


/* header */
const header = document.querySelector("header");
const gotopbtn = document.querySelector(".gotopbtn");

window.onscroll = function () {

    if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
        header.style.backgroundColor = "rgb(4,22,37)";
    } else {
        header.style.backgroundColor = "transparent";
    }

    if (document.body.scrollTop > 900 || document.documentElement.scrollTop > 900) {
        gotopbtn.classList.add("gotopbtn-special");
    } else {
        gotopbtn.classList.remove("gotopbtn-special");
    }
};

//Audio
const audio = document.getElementById("audio");
const audioIcon = document.getElementById("audio-icon");

audioIcon.addEventListener("click", function() {
    audio.play();
});

