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