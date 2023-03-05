var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;
var botaoIncrement = document.getElementById('botao2');
var botaoDecrement = document.getElementById('botao1');

function increment() {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
    if (currentNumber >= 10) {
        botaoIncrement.style.display = 'none';
    } 
}

function decrement() {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
    if (currentNumber < 10) {
        botaoIncrement.style.display = 'block';
    } 
}

function numberColorRed() {
    if (currentNumber < 0) {
        currentNumberWrapper.style.color = 'red';
    } else { 
        currentNumberWrapper.style.color = 'black';
    }
}

