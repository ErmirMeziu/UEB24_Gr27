const toggleButton = document.getElementById('toggle-btn');
const extraText = document.getElementById('extra-text');

toggleButton.addEventListener('click', () => {
    if (extraText.classList.contains('hidden')) {
        extraText.classList.remove('hidden');
        toggleButton.textContent = 'Show Less';
    } else {
        extraText.classList.add('hidden');
        toggleButton.textContent = 'Show More';
    }
});

const showPriceButton = document.getElementsByClassName('btn btn-primary');
for (let button of showPriceButton) {
    button.addEventListener('click', function () {
        alert("To see available rooms and prices, please enter your check-in and check-out dates.");
    });
}

//photo part
document.querySelectorAll('.photo, .bottom-pht').forEach(photo => {
    photo.addEventListener('click', () => {
        const lightbox = document.createElement('div');
        lightbox.id = 'lightbox';
        document.body.appendChild(lightbox);

        const img = document.createElement('img');
        img.src = photo.src;
        lightbox.appendChild(img);

        lightbox.addEventListener('click', () => {
            lightbox.remove();
        });
    });
})

//answer part
document.querySelectorAll('.arrow').forEach(arrow => {
    arrow.addEventListener('click', function () {
        const answer = this.nextElementSibling;
        if (answer.style.display === 'block') {
            answer.style.display = 'none';
            this.innerHTML = '&#x25BC;'; // Down arrow
        } else {
            answer.style.display = 'block';
            this.innerHTML = '&#x25B2;'; // Up arrow
        }
    });
});
