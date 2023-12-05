const form = document.querySelector('form');
const calculate = document.querySelector('.calculate');
const clear = document.querySelector('.clear');
const capital = document.querySelector('#capital');
const interest= document.querySelector('#interest');
const years = document.querySelector('#years');
const result = document.querySelector('.result');

form.addEventListener('submit', (e) => {
    e.preventDefault();
})


calculate.addEventListener('click', (e) => {
    console.log(capital.value);
    const ans = capital.value * Math.pow(1+interest.value/100, years.value);
    result.value = Math.floor(ans);    
})

clear.addEventListener('click', (e) => {
    capital.value = 0; 
    interest.value = 0; 
    years.value = 0;
    result.value = 0;
})
