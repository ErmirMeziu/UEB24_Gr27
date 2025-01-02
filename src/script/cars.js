const mimshef = document.querySelector('.mimshef');
const viewmore = document.querySelector('.view-more');
const BH = document.querySelector('BH');


viewmore.addEventListener('click', function () {
        mimshef.classList.add('mimshef-special');
        mimshef.classList.add('BH');


});


const sliders = document.querySelectorAll('.slider');
let intervalId = null;

function initializeSlider(sliderIndex) {
        const slides = sliders[sliderIndex].querySelectorAll('.slide');
        let slideIndex = 0;

        function showSlide() {
                slides.forEach(slide => {
                        slide.style.display = 'none';
                });

                slides[slideIndex].style.display = 'block';
        }

        function nextSlide() {
                slideIndex++;
                if (slideIndex >= slides.length) slideIndex = 0;
                showSlide();
        }

        function prevSlide() {
                slideIndex--;
                if (slideIndex < 0) slideIndex = slides.length - 1;
                showSlide();
        }


        sliders[sliderIndex].querySelector('.next').addEventListener('click', function () {
                nextSlide();
        });
        sliders[sliderIndex].querySelector('.prev').addEventListener('click', function () {
                prevSlide();
        });

        showSlide();
}

document.addEventListener("DOMContentLoaded", () => {
        sliders.forEach((slider, index) => {
                initializeSlider(index);
        });
});
