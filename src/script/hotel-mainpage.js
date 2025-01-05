//filter-hotels
class PriceFilter {
    constructor(submitSelector, lowestSelector, highestSelector, boxSelector) {
        this.submitButton = document.querySelector(submitSelector);
        this.lowestInput = document.querySelector(lowestSelector);
        this.highestInput = document.querySelector(highestSelector);
        this.hotels = document.querySelectorAll(boxSelector);
        this.init();
    }

    init() {
        if (this.submitButton && this.lowestInput && this.highestInput) {
            this.submitButton.addEventListener('click', () => this.filterHotels());
        } else {
            console.error("One or more elements not found in the DOM.");
        }
    }

    filterHotels() {
        const lowest = parseFloat(this.lowestInput.value);
        const highest = parseFloat(this.highestInput.value);
        let MAX_VALUE = 1000;

        if (isNaN(lowest) || isNaN(highest) || (lowest > highest) || (lowest < 0)) {
            alert("Please enter valid numbers for the price range.");
            return;
        }

        if(highest > MAX_VALUE){
            alert("Max Value is " + MAX_VALUE.toString() + "!");
            return;
        }

        this.hotels.forEach(hotel => {
            const currentPriceElement = hotel.querySelector('.current-price');
            if (currentPriceElement) {
                const price = parseFloat(currentPriceElement.textContent.replace('$', '').trim());
                hotel.style.display = (price >= lowest && price <= highest) ? 'block' : 'none';
            }
        });
    }
}

// Usage
new PriceFilter('.submit', '.lowest', '.highest', '.box');

