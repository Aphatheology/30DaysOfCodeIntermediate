let decreaseButton = document.getElementById('decrease');
let increaseButton = document.getElementById('increase');
let counter = document.getElementById('counter');
let count = 0
counter.innerHTML = count;

increaseButton.addEventListener('click' , () => {
    count = count + 1;
    counter.innerHTML = count;
    checkSign(count);
    return count;
})

decreaseButton.addEventListener('click' , () => {
    count = count - 1;
    counter.innerHTML = count;
    checkSign(count);
    return count;
})

function checkSign(number) {
    if(Math.sign(number) === 1) {
        counter.classList.remove("negative");
        counter.classList.remove("neutral");
        counter.classList.add("positive");
    } else if (Math.sign(number) === (-1)) {
        counter.classList.remove("positive");
        counter.classList.remove("neutral");
        counter.classList.add("negative");
    }
     else {
        counter.classList.remove("negative");
        counter.classList.remove("positive");
        counter.classList.add("neutral");
    }
}