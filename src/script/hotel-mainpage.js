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
