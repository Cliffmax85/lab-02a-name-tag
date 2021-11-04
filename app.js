const inputEl = document.getElementById('input');
const buttonEl = document.getElementById('button');
const boxEl = document.getElementById('box');
const nameEl = document.getElementById('nameColor')

buttonEl.addEventListener('click', () => {
    const theInput = inputEl.value;

    boxEl.textContent = theInput;

    
    inputEl.value = '';
});

buttonEl.addEventListener('click', () => {
   
    nameEl.style.backgroundColor = 'black';

});

