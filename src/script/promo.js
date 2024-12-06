const getPromo = document.querySelector('.form-promo input');
const getCost = document.querySelector('.cost');
const originalCost = parseFloat(getCost.textContent.slice(1));

getPromo.addEventListener('input',function(){
    const promo = getPromo.value;
    if(promo == "ermir")
    {
        const updateCost = originalCost - originalCost*(30/100);
        getCost.textContent =`$${updateCost}`;
    }
    else{
    getCost.textContent = `$${originalCost}`;
    }
});

const getPromo2 = document.querySelector('#promo2 input');
const getCost2 = document.querySelector('#cost2');
const originalCost2 = parseFloat(getCost2.textContent.slice(1));

getPromo2.addEventListener('input',function(){
    const promo2 = getPromo2.value;
    if(promo2 == "erik")
    {
        const updateCost2 = originalCost2 - originalCost2*(20/100);
        getCost2.textContent =`$${updateCost2}`;
    }
    else{
    getCost2.textContent = `$${originalCost2}`;
    }
});

const getPromo3 = document.querySelector('#promo3 input');
const getCost3 = document.querySelector('#cost3');
const originalCost3 = parseFloat(getCost3.textContent.slice(1));

getPromo3.addEventListener('input',function(){
    const promo3 = getPromo3.value;
    if(promo3 == "blertin")
    {
        const updateCost3 = originalCost3 - originalCost3*(41/100);
        getCost3.textContent =`$${updateCost3}`;
    }
    else{
    getCost3.textContent = `$${originalCost3}`;
    }
});


const getPromo4 = document.querySelector('#promo4 input');
const getCost4 = document.querySelector('#cost4');
const originalCost4 = parseFloat(getCost4.textContent.slice(1));

getPromo4.addEventListener('input',function(){
    const promo4 = getPromo4.value;
    if(promo4 == "enes")
    {
        const updateCost4 = originalCost4 - originalCost4*(15/100);
        getCost4.textContent =`$${updateCost4}`;
    }
    else{
    getCost4.textContent = `$${originalCost4}`;
    }
});