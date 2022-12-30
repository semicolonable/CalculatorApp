let resultBox = document.querySelector("#result");
let userValue = 0;



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
        userValue *= -1;
        resultBox.innerText = 0 + userValue;
        accentOFF();
    })
    document.querySelector("#btn_percentage").addEventListener('click', function () {
        userValue /= 100;
        resultBox.innerText = 0 + userValue;
        accentOFF();
    })

    document.querySelector("#btn_divide").addEventListener('click', function () {

    })
    document.querySelector("#btn_multiply").addEventListener('click', function () {
    })
    document.querySelector("#btn_minus").addEventListener('click', function () {
    })
    let sumBtn = document.querySelector("#btn_sum");
    sumBtn.addEventListener('click', function () {
        sumBtn.style.backgroundColor = 'white';
        sumBtn.style.color = 'orange';
    })
    document.querySelector("#btn_equal").addEventListener('click', function () {
    })
}

function submitBtn(value) {
    console.log("submitBtn()");
    if (resultBox.innerText == 0) {
        userValue = value;
        // resultBox.value = userValue;
        resultBox.innerText = userValue;
    }
    else {
        userValue = userValue + value;
        // resultBox.value = userValue;
        resultBox.innerText = userValue;
    }
}

function getResult(num1, num2, x) {

}

function summary() {

}

function accentOFF() {
    document.querySelector("#btn_sum").style.backgroundColor = 'orange';
    document.querySelector("#btn_sum").style.color = 'white';
}




init();
