document.addEventListener('DOMContentLoaded', function() {
    const display = document.querySelector("#display");

    const btn_7 = document.querySelector('#btn_7');
    const btn_8 = document.querySelector('#btn_8');
    const btn_9 = document.querySelector('#btn_9');
    const btn_divide = document.querySelector('#btn_divide');

    const btn_4 = document.querySelector('#btn_4');
    const btn_5 = document.querySelector("#btn_5");
    const btn_6 = document.querySelector("#btn_6");
    const btn_multiply = document.querySelector("#btn_multiply");

    const btn_1 = document.querySelector('#btn_1');
    const btn_2 = document.querySelector('#btn_2');
    const btn_3 = document.querySelector('#btn_3');
    const btn_subtract = document.querySelector('#btn_subtract');

    const btn_0 = document.querySelector("#btn_0");
    const btn_clear = document.querySelector("#btn_clear");
    const btn_equals = document.querySelector("#btn_equals");
    const btn_add = document.querySelector("#btn_add");

    let currentInput = '0';
    let operator = null;
    let previousInput = null;

    function autoDisplay(value) {
        if (currentInput === "0") {
            currentInput = value;
        } else if (currentInput.length < 30) {
            currentInput += value;
            if(currentInput.length === 30){
                alert("You reached the limit");
            }
        }
        display.textContent = currentInput;
    }

    function handleOperator(op) {
        if (operator !== null) {
            calculate();
        }
        previousInput = currentInput;
        currentInput = '0';
        operator = op;
    }

    function calculate() {
        let result;
        const prev = parseFloat(previousInput);
        const curr = parseFloat(currentInput);
        if (isNaN(prev) || isNaN(curr))
            return;
        switch (operator) {
            case '+':
                result = prev + curr;
                break;
            case '-':
                result = prev - curr;
                break;
            case '*':
                result = prev * curr;
                break;
            case '/':
                result = prev / curr;
                break;
            default:
                return;
        }
        currentInput = result.toString();
        operator = null;
        previousInput = null;
        display.textContent = currentInput;
    }

    btn_7.addEventListener('click', () => autoDisplay(btn_7.value));
    btn_8.addEventListener('click', () => autoDisplay(btn_8.value));
    btn_9.addEventListener('click', () => autoDisplay(btn_9.value));

    btn_4.addEventListener('click', () => autoDisplay(btn_4.value));
    btn_5.addEventListener('click', () => autoDisplay(btn_5.value));
    btn_6.addEventListener('click', () => autoDisplay(btn_6.value));

    btn_1.addEventListener('click', () => autoDisplay(btn_1.value));
    btn_2.addEventListener('click', () => autoDisplay(btn_2.value));
    btn_3.addEventListener('click', () => autoDisplay(btn_3.value));

    btn_0.addEventListener('click', () => autoDisplay(btn_0.value));

    btn_clear.addEventListener('click', () => {
        currentInput = '0';
        operator = null;
        previousInput = null;
        display.textContent = '0';
    });

    btn_equals.addEventListener('click', () => calculate());

    btn_add.addEventListener('click', () => handleOperator(btn_add.value));
    btn_subtract.addEventListener('click', () => handleOperator(btn_subtract.value));
    btn_multiply.addEventListener('click', () => handleOperator(btn_multiply.value));
    btn_divide.addEventListener('click', () => handleOperator(btn_divide.value));
});
