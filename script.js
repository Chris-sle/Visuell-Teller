let counterValue = 0;

function updateCounter() {
    document.getElementById('counter').textContent = counterValue;
}

function countUp() {
    counterValue++;
    updateCounter();

}

function countDown() {
    counterValue--;
    updateCounter();
}

function countReset() {
    counterValue = 0;
    updateCounter();
}