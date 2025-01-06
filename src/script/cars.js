class ViewMoreToggle {
        constructor(toggleSelector, viewMoreSelector, goTopSelector) {
                this.toggleElement = document.querySelector(toggleSelector);
                this.viewMoreButton = document.querySelector(viewMoreSelector);
                this.goTopElement = document.querySelector(goTopSelector);
                this.isExpanded = false;
                this.init();
        }

        init() {
                if (this.toggleElement && this.viewMoreButton && this.goTopElement) {
                        this.viewMoreButton.addEventListener('click', () => this.toggleView());
                } else {
                        console.error("One or more elements not found in the DOM.");
                }
        }

        toggleView() {
                this.toggleElement.classList.toggle('BH');
                this.toggleElement.classList.toggle('mimshef-special');

                if (!this.isExpanded) {
                        this.viewMoreButton.textContent = "VIEW LESS";
                        this.toggleElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                } else {
                        this.viewMoreButton.textContent = "VIEW MORE";
                        this.goTopElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }

                this.isExpanded = !this.isExpanded;
        }
}

new ViewMoreToggle('.mimshef', '.view-more', '.goTop');




/*slider*/
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

    sliders[sliderIndex].querySelector('.next').addEventListener('click', function() {
        nextSlide();
    });

    sliders[sliderIndex].querySelector('.prev').addEventListener('click', function() {
        prevSlide();
    });

    showSlide();
}

sliders.forEach((slider, index) => {
    initializeSlider(index);
});

///Fade
$(document).ready(function() {
        $('#filterAvailableBtn').click(function() {
            var buttonText = $(this).text();
            if (buttonText === "Show Available Cars") {
                $(this).text("Show All Cars");
                $('.card5').each(function() {
                    var status = $(this).data('status');
                    if (status === "reserved") {
                        $(this).fadeOut("slow");
                    }
                });
            } else {
                $(this).text("Show Available Cars");
                $('.card5').each(function() {
                    $(this).fadeIn("slow");
                });
            }
        });
});


/*go to top */
const gotopbtn = document.querySelector(".gotopbtn");

window.onscroll = function () {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        gotopbtn.classList.add("gotopbtn-special");
    } else {
        gotopbtn.classList.remove("gotopbtn-special");
    }
};
