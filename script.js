let history = [];

function appendToDisplay(value) {
    const display = document.getElementById("display");
    if (value === '.' && display.value.includes('.')) {
        return; 
    }
    display.value += value;
}

function clearDisplay() {
    document.getElementById("display").value = '';
}

function calculateResult() {
    const display = document.getElementById("display");
    try {
        const result = eval(display.value);
        history.push(`${display.value} = ${result}`);
        display.value = result || '';
        updateHistory();
    } catch {
        display.value = 'Error';
        setTimeout(clearDisplay, 1500);
    }
}

function calculateSquare() {
    const display = document.getElementById("display");
    const value = eval(display.value);
    const result = value * value;
    history.push(`(${value})² = ${result}`);
    display.value = result || '';
    updateHistory();
}

function calculateSquareRoot() {
    const display = document.getElementById("display");
    const value = eval(display.value);
    const result = Math.sqrt(value);
    history.push(`√(${value}) = ${result}`);
    display.value = result || '';
    updateHistory();
}

function calculatePercentage() {
    const display = document.getElementById("display");
    const value = eval(display.value);
    const result = value / 100;
    history.push(`${value}% = ${result}`);
    display.value = result || '';
    updateHistory();
}

function updateHistory() {
    const historyDiv = document.getElementById("history");
    historyDiv.innerHTML = history.map(item => `<div>${item}</div>`).join('');
}
