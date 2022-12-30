let resultBox = document.querySelector("#result");
let userValue = 0;
let secondValue = 0;

let calculating = false;

let sumBtn = document.querySelector("#btn_sum");
let minBtn = document.querySelector("#btn_minus")
let mulBtn = document.querySelector("#btn_multiply")
let divBtn = document.querySelector("#btn_divide")


function init() {
    userValue = 0;
    resultBox.value = userValue;
    // num init
    for (let i = 0; i < 10; i++) {
        document.querySelector(`#btn${i}`).addEventListener('click', function (event) {
            submitBtn(`${i}`);
            accentOFF();
        });
    }
    // sign init
    document.querySelector("#btn_AC").addEventListener('click', function () {
        userValue = 0;
        resultBox.innerText = 0;
        accentOFF();
    })
    document.querySelector("#btn_switch").addEventListener('click', function () {
        resultBox.innerText = getSwitch(userValue);
        accentOFF();
    })
    document.querySelector("#btn_percentage").addEventListener('click', function () {
        resultBox.innerText = getPercentage(userValue);
        accentOFF();
    })
    // +
    sumBtn.addEventListener('click', function () {
        sumBtn.style.backgroundColor = 'white';
        sumBtn.style.color = 'orange';

    })
    // -
    minBtn.addEventListener('click', function () {
        minBtn.style.backgroundColor = 'white';
        minBtn.style.color = 'orange';
    })
    // *
    mulBtn.addEventListener('click', function () {
        mulBtn.style.backgroundColor = 'white';
        mulBtn.style.color = 'orange';
    })
    // /
    divBtn.addEventListener('click', function () {
        divBtn.style.backgroundColor = 'white';
        divBtn.style.color = 'orange';

    })

    document.querySelector("#btn_equal").addEventListener('click', function () {
    })
}

function submitBtn(value) {
    console.log("submitBtn()");

    if (calculating == true) {
        if (userValue == 0) {
            userValue = value;
            resultBox.innerText = userValue;
            secondValue = userValue;
        }
        else {
            userValue = userValue + value;
            resultBox.innerText = userValue;
            secondValue = userValue;
        }

    }
    else {
        if (resultBox.innerText == 0) {
            userValue = value;
            resultBox.innerText = userValue;
        }
        else {
            userValue = userValue + value;
            resultBox.innerText = userValue;
        }
    }
}

function getResult(num1, num2, x) {

}

function summary() {

}

function accentOFF() {
    sumBtn.style.backgroundColor = 'orange';
    sumBtn.style.color = 'white';
    minBtn.style.backgroundColor = 'orange';
    minBtn.style.color = 'white';
    mulBtn.style.backgroundColor = 'orange';
    mulBtn.style.color = 'white';
    divBtn.style.backgroundColor = 'orange';
    divBtn.style.color = 'white';
}

function getSwitch(num) {
    return userValue *= -1;
}

function getPercentage(num) {
    return userValue /= 100;
}

function getSum(num1, num2) {
    return num1 * 1 + num2 * 1;
}

function getMin(num1, num2) {
    return num1 * 1 - num2 * 1;
}

function getMul(num1, num2) {
    return (num1 * 1) * (num2 * 1);
}

function getDiv(num1, num2) {
    return (num1 * 1) / (num2 * 1)
}



init();
