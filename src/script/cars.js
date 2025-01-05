const mimshef = document.querySelector('.mimshef');
const viewmore = document.querySelector('.view-more');
 let a = 0;

viewmore.addEventListener('click', function () {
        mimshef.classList.toggle('BH');
        mimshef.classList.toggle('mimshef-special');
    if (a == 0) {
        viewmore.textContent = "view less";
        mimshef.scrollIntoView({ behavior: 'smooth', block: 'start' });
        a = 1;
    } else {
        viewmore.textContent = "view more";
        document.querySelector('.goTop').scrollIntoView({ behavior: 'smooth', block: 'start' });
        a = 0;
    }
    
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
//Filtrimi i veturave
$(document).ready(function() {
        $('#filterAvailableBtn').click(function() {
            var buttonText = $(this).text();
            if (buttonText === "Show Available Cars") {
                $(this).text("Show All Cars");
                $('.card5').each(function() {
                    var status = $(this).data('status');
                    if (status === "reserved") {
                        $(this).hide(); 
                    }
                });
            } else {
                $(this).text("Show Available Cars");
                $('.card5').show(); 
            }
        });
    });