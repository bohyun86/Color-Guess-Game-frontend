function generateRandomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

let correctColor;

function start() {
    correctColor = generateRandomColor();
    const colorBoxes = document.querySelectorAll('.color-block');
    const correctIndex = Math.floor(Math.random() * colorBoxes.length);
    document.querySelector('#rgb-color').innerHTML = `${correctColor.toUpperCase()}`;
    colorBoxes.forEach((box, index) => {
        if (index === correctIndex) {
            box.style.backgroundColor = correctColor;
        } else {
            box.style.backgroundColor = generateRandomColor();
        }
    })
}

function checkColor() {
    const clickedColor = this.style.backgroundColor;
    if (clickedColor !== correctColor) {
        document.querySelector('#status').innerHTML = 'Try Again!';
        this.style.display = 'none';
    } else {
        document.querySelector('#status').innerHTML = 'Correct!';
        const colorBoxes = document.querySelectorAll('.color-block');
        colorBoxes.forEach(box => {
            box.style.backgroundColor = correctColor;
        })
    }
}

function clickEvents() {
    const colorBoxes = document.querySelectorAll('.color-block');
    colorBoxes.forEach(box => {
        box.addEventListener('click', checkColor);
    })
}

function resetGame() {
    const colorBoxes = document.querySelectorAll('.color-block');
    colorBoxes.forEach(box => {
        box.style.display = 'inline-block';
    })
    document.querySelector('#status').innerHTML = 'Start Guessing!';
    start();
}

function init() {
    document.querySelector('#restart').addEventListener('click', resetGame);
}

function playGame() {
    start();
    clickEvents();
    init();
}

window.onload = playGame;