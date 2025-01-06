/*list show */
const list = document.querySelector(".list");
const sidebar = document.querySelector(".sidebar");

list.addEventListener('click', function(){
    sidebar.classList.toggle("sidebar-special");
});

 // Get the elements
 const contactBtn = document.getElementById('contact-btn');
 const contactFormModal = document.getElementById('contact-form-modal');
 const closeContactForm = document.getElementById('close-contact-form');

 // Show the contact form when "Contact Us" button is clicked
 contactBtn.addEventListener('click', function() {
     contactFormModal.style.display = 'block';
 });

 // Close the contact form when the close button (×) is clicked
 closeContactForm.addEventListener('click', function() {
     contactFormModal.style.display = 'none';
 });

 // Close the contact form if the user clicks outside the modal
 window.addEventListener('click', function(event) {
     if (event.target === contactFormModal) {
         contactFormModal.style.display = 'none';
     }
 });