const input = document.querySelector('#points');
let choice = 5;
input.addEventListener('change', function () {
    choice = parseInt(this.value);
})
const bone = document.querySelector('#one');
const btwo = document.querySelector('#two');
const reset = document.querySelector('#reset');
const first = document.querySelector('#playerOne');
const second = document.querySelector('#playerTwo');
let p1 = 0, p2 = 0;
bone.addEventListener('click', function () {
    p1++;
    first.innerText = p1;
    if (p1 === choice) {
        first.style.color = 'green';
        second.style.color = 'red';
        bone.disabled = true;
        btwo.disabled = true;
    }
})
btwo.addEventListener('click', function () {
    p2++;
    second.innerText = p2;
    if (p2 === choice) {
        second.style.color = 'green';
        first.style.color = 'red';
        bone.disabled = true;
        btwo.disabled = true;
    }
})
reset.addEventListener('click', function () {
    p1 = 0, p2 = 0;
    first.innerText = p1;
    second.innerText = p2;
    first.style.color = 'black';
    second.style.color = 'black';
    bone.disabled = false;
    btwo.disabled = false;
})