const submit1 = document.querySelector('.submit');

submit1.addEventListener("click", function() {
    const lowest = parseFloat(document.querySelector('.lowest').value);
    const highest = parseFloat(document.querySelector('.highest').value);

    if (isNaN(lowest) || isNaN(highest) || (lowest > highest)) {
        alert("Please enter valid numbers for the price range.");
        return;
    }


    let hotels = document.querySelectorAll('.box');

    hotels.forEach(function(hotel) {
        let currentPrice = hotel.querySelector('.current-price');

        if (currentPrice) {
            let price = parseFloat(currentPrice.textContent.replace('$', '').trim()); 

            if (price >= lowest && price <= highest) {
                hotel.style.display = 'block';
            } else {
                hotel.style.display = 'none';
            }
        }
    });
});


document.addEventListener("DOMContentLoaded", function() {
    // Funksion ndihmes per me ba update stylin e butonave
    function updateButtonStyles(activeButtonId) {
        //Reseton stylin per krejt butonat
        document.querySelectorAll(".page-btn").forEach(function(button) {
            button.style.backgroundColor = "white";
            button.style.color = "black";
        });
        
        // Vendos nje style te caktuar per butonin aktiv
        let activeButton = document.getElementById(activeButtonId);
        if (activeButton) {
            activeButton.style.backgroundColor = "rgb(205,44,34)";
            activeButton.style.color = "white";
        }
    }
    
    
      document.getElementById("page1-btn").addEventListener("click", function() {
        // Fsheh faqet e tjera
        document.querySelectorAll(".hotel-page").forEach(function(page) {
            page.style.display = "none";
        });
        // Shfaq faqen e pare
        document.querySelector(".page1").style.display = "block";
        updateButtonStyles("page1-btn");
        //Scroll ne fillim te faqes
        window.scrollTo(0, 0);
    });
    
    document.getElementById("page2-btn").addEventListener("click", function() {
        // Fsheh faqet e tjera
        document.querySelectorAll(".hotel-page").forEach(function(page) {
            page.style.display = "none";
        });
        // Shfaq faqen e dyte
        document.querySelector(".page2").style.display = "block";
        updateButtonStyles("page2-btn");
        window.scrollTo(0, 0);
    });

    document.getElementById("page3-btn").addEventListener("click", function() {
        // Fsheh faqet e tjera
        document.querySelectorAll(".hotel-page").forEach(function(page) {
            page.style.display = "none";
        });
        // Shfaq faqen e dyte
        document.querySelector(".page3").style.display = "block";
        updateButtonStyles("page3-btn");
        window.scrollTo(0, 0);
    });
});

