const winGameElm = document.querySelector(".winGame");

const luckyBtnElm = document.querySelector("#luckyBtn");
const luckyNumberElm = document.querySelector(".lucky-number");
const p1Elm = document.querySelector("#p1");
const p1LuckyNumberElm = document.querySelector(".p1LuckyNumber");
const p2Elm = document.querySelector("#p2");
const p2LuckyNumberElm = document.querySelector(".p2LuckyNumber");
const resetElm = document.querySelector("#reset");
let clicked = false;
let luckyNumber;
let p1luckyNumber;
let p2luckyNumber;

function luckyNumberGenerate() {
    return Math.floor(Math.random() * 10) + 1;
}
function p1LuckyNumGenerate() {
    return Math.floor(Math.random() * 10) + 1;
}
function p2LuckyNumGenerate() {
    return Math.floor(Math.random() * 10) + 1;
}
luckyBtnElm.addEventListener('click', () => {
    luckyNumber = luckyNumberGenerate()
    luckyNumberElm.textContent = luckyNumber;
    clicked = true;
});

function p1LuckyNumbers() {
    if (! clicked) {
        alert("Get your lucky number")
        return;
    }
    p1luckyNumber = p1LuckyNumGenerate();
    p1LuckyNumberElm.textContent = p1luckyNumber;
    if (luckyNumberGenerate() === p1LuckyNumGenerate()) {
        winGameElm.textContent = "Player one is won the game";
        p1Elm.setAttribute('disabled', 'disabled');
        p2Elm.setAttribute('disabled', 'disabled');
    }
}
p1Elm.addEventListener('click', p1LuckyNumbers);

function p2LuckyNumbers() {
    if (! clicked) {
        alert("Get your lucky number")
        return;
    }
    p2luckyNumber = p2LuckyNumGenerate();
    p2LuckyNumberElm.textContent = p2luckyNumber;
    if (luckyNumber === p2luckyNumber) {
        winGameElm.textContent = "Player two is won the game";
        p1Elm.setAttribute('disabled', 'disabled');
        p2Elm.setAttribute('disabled', 'disabled');
    }
}
p2Elm.addEventListener('click', p2LuckyNumbers);

resetElm.addEventListener('click', () => {
    luckyNumberElm.textContent = 0;
    p1LuckyNumberElm.textContent = 0;
    p2LuckyNumberElm.textContent = 0;
});
