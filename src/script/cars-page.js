let next = document.querySelector('.next2')
let prev = document.querySelector('.prev2')

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide20').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide20').prepend(items[items.length - 1]) 
})
function rezervo() {
    document.getElementById("modal").style.display = "block";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

setTimeout(function() {
    document.getElementById("modal").style.display = "none";
});


function formatDate(date) {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return date.toLocaleDateString('en-GB', options); 
}

function updateDates() {
   
    const pickupInput = document.getElementById('pickup-input').value;
    const dropoffInput = document.getElementById('dropoff-input').value;

  
    if (pickupInput && dropoffInput) {
        const pickupDate = new Date(pickupInput);
        const dropoffDate = new Date(dropoffInput);

       
        if (dropoffDate < pickupDate) {
            alert("Ke selektuar daten gabim!");
            return; 
        }

      
        document.getElementById('pickup-date').textContent = formatDate(pickupDate);
        document.getElementById('dropoff-date').textContent = formatDate(dropoffDate);

        const durationInMillis = dropoffDate - pickupDate;
        const durationInDays = durationInMillis / (1000 * 60 * 60 * 24); 

        document.getElementById('duration').textContent = `${durationInDays} Day(s)`;

        const dailyCost = 64;
        const totalCost = durationInDays * dailyCost; 
      
        document.getElementById('total-cost').textContent = `${totalCost.toFixed(2)} €`;
    }
}

document.getElementById('pickup-input').addEventListener('change', updateDates);
document.getElementById('dropoff-input').addEventListener('change', updateDates);

