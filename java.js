let btns = document.querySelectorAll(".num-button");
let allBtns = document.querySelectorAll(".button");
let resultBox = document.querySelector("#result-box");
let clearBtn = document.querySelector('#clear');
let total = document.querySelector("#total");
let remove = document.querySelector('#remove');
let cleanKey = "Backspace"
let getKey = (x) => {
    if (resultBox.innerHTML == "0") {
        resultBox.innerHTML = "";
    }
    resultBox.innerHTML += x;

};
// For Number Inputs
btns.forEach((button) => {
    button.addEventListener("click", () => getKey(button.innerHTML))

});


// To calculate All Input
total.addEventListener('click', () => {
    let allInputs = resultBox.innerHTML;
    try {

        resultBox.innerHTML = eval(allInputs);
        if (resultBox.innerHTML > 10000000) {
            resultBox.innerHTML = 'too large'

        }
    } catch (error) {
        console.log(error)
        resultBox.innerHTML = 'error';

    }

})
remove.addEventListener('click', () => {
    resultBox.innerHTML = resultBox.innerHTML.slice(0, -1);
    if (resultBox.innerHTML == '') {
        resultBox.innerHTML = '0'
    }

}
)
clearBtn.addEventListener('click', () => {
    resultBox.innerHTML = "0";
})

window.addEventListener('keyup', (event) => {
    if ("1234567890+-*%./".includes(event.key) || event.key == "Backspace" || event.key == "Escape") {
        if (event.key == 'Backspace') {
            resultBox.innerHTML = resultBox.innerHTML.slice(0, -1);
            if (resultBox.innerHTML == '') {
                resultBox.innerHTML = '0'
            }

        }
        else {
            getKey(event.key);
        }
    }
    if (event.key === "=" || event.key == "Enter") {
        let allInputs = resultBox.innerHTML;
        try {
            resultBox.innerHTML = eval(allInputs.replace('Enter', '='));
            if (resultBox.innerHTML > 10000000) {
                resultBox.innerHTML = 'too large'

            }

        } catch (error) {
            console.log(error)
            resultBox.innerHTML = 'error';

        }

    }
    if (event.key == "Escape") {
        resultBox.innerHTML = "0";
    }
})


