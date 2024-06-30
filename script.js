document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.button');
    const clearButton = document.getElementById('clear');
    const equalsButton = document.getElementById('equals');

    let currentInput = '';
    let operator = '';
    let firstOperand = '';
    let secondOperand = '';

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const value = this.getAttribute('data-value');
            if (value >= '0' && value <= '9' || value === '.') {
                currentInput += value;
                display.innerText = currentInput;
            } else if (this.classList.contains('operator')) {
                operator = value;
                firstOperand = currentInput;
                currentInput = '';
            }
        });
    });

    equalsButton.addEventListener('click', function() {
        secondOperand = currentInput;
        if (operator && firstOperand && secondOperand) {
            let result;
            switch (operator) {
                case '+':
                    result = parseFloat(firstOperand) + parseFloat(secondOperand);
                    break;
                case '-':
                    result = parseFloat(firstOperand) - parseFloat(secondOperand);
                    break;
                case '*':
                    result = parseFloat(firstOperand) * parseFloat(secondOperand);
                    break;
                case '/':
                    result = parseFloat(firstOperand) / parseFloat(secondOperand);
                    break;
            }
            display.innerText = result;
            currentInput = result;
            operator = '';
            firstOperand = '';
            secondOperand = '';
        }
    });

    clearButton.addEventListener('click', function() {
        currentInput = '';
        operator = '';
        firstOperand = '';
        secondOperand = '';
        display.innerText = '0';
    });
});
