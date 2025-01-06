/*list show */
const list = document.querySelector(".list");
const sidebar = document.querySelector(".sidebar");

list.addEventListener('click', function(){
    sidebar.classList.toggle("sidebar-special");
});

 // Get the elements
 const contactBtn = document.querySelector('.button-show');
 const show_hide = document.querySelector('.show-hide');
 const closeContactForm = document.querySelector('.close-form');

//toggle show-hide
 contactBtn.addEventListener('click', function() {
    show_hide.classList.add('show-hide-special');
 });

 closeContactForm.addEventListener('click', function(){
    show_hide.classList.remove('show-hide-special');
 })


/*go to top */
const gotopbtn = document.querySelector(".gotopbtn");

window.onscroll = function () {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        gotopbtn.classList.add("gotopbtn-special");
    } else {
        gotopbtn.classList.remove("gotopbtn-special");
    }
};



