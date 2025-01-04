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

/*save the property*/
const button = document.querySelector(".bottom-btn1");
const favorit = document.querySelector(".favorit");
button.addEventListener('click', function(){
    button.classList.toggle('bottom-btn-special');
})

//Slider
const recommendations = document.querySelector('.recommendations');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

const cardWidth = 320; // Approximate width of a single card (adjust as needed)
const visibleCards = Math.floor(window.innerWidth / cardWidth); // Number of visible cards
const maxScroll = recommendations.scrollWidth - cardWidth * visibleCards;

let scrollAmount = 0;

// Scroll to the left
prevButton.addEventListener('click', () => {
    scrollAmount -= cardWidth;

    // Prevent scrolling beyond the first card
    if (scrollAmount < 0) {
        scrollAmount = 0;
    }

    recommendations.style.transform = `translateX(-${scrollAmount}px)`;
});

// Scroll to the right
nextButton.addEventListener('click', () => {
    scrollAmount += cardWidth;

    // Prevent scrolling beyond the last card
    if (scrollAmount > maxScroll) {
        scrollAmount = maxScroll;
    }

    recommendations.style.transform = `translateX(-${scrollAmount}px)`;
});


document.addEventListener('DOMContentLoaded', function() {
    // Step 1: Select all the rows in the table
    const rows = document.querySelectorAll('.room-table tbody tr');
    
    // Step 2: Add event listeners to each row
    rows.forEach(function(row, index) {
        // Allow each row to be dragged
        row.setAttribute('draggable', 'true'); // Mundet edhe pa qet rresht se e kem specifiku ne html dokument
        
        // Step 3: When a row starts being dragged, mark it
        row.addEventListener('dragstart', function() {
            row.classList.add('dragging');  // Add a class to style the dragged row
        });
        //Krijojm klase te re kur bojm drag me u dall rreshti qe po bahet drag -> ne style e kem klasen qe po e krijojm(.dragging)
        
        // Step 4: When a row is dropped, move it to its new place
        row.addEventListener('dragover', function(event) {
            event.preventDefault(); // This is needed for the drop to work
        });
        //preventDeafault metod e gatshme qe na siguron qe rreshti bahet drop.

        row.addEventListener('drop', function() {
            // Move the dragged row to its new position
            const draggedRow = document.querySelector('.dragging');
            if (draggedRow !== row) { // kushti siguron që ne të mos përpiqemi ta zhvendosim rreshtin në të njëjtin pozicion nga ku është tërhequr
                const rowsContainer = row.parentNode; //Variabla prind ruan elementin prind (<tbody>)
                rowsContainer.insertBefore(draggedRow, row); // Reorder rows
                updateRowNumbers();  // Update row numbers after the change
            }
            row.classList.remove('dragging');  // Remove the dragging effect after drop, pra largon efektin qe e kemi caktu ne style
        });

        // Step 5: Clean up the dragging effect when the drag ends
        row.addEventListener('dragend', function() {
            row.classList.remove('dragging');
        });
    });

    // Step 6: Update the numbers after the rows are rearranged
    function updateRowNumbers() {
        const rows = document.querySelectorAll('.room-table tbody tr');
        rows.forEach(function(row, index) {
            // Find the span inside the row where the number is displayed
            const numberSpan = row.querySelector('.expand-icon');
            numberSpan.textContent = index + 1; // Update the number to reflect the row's new position
        });
    }
});