const display = document.getElementById("display");
let justCalculated = false;

function appendToDisplay(input) {
    if (justCalculated) {
        if (!isNaN(input)) {
            display.value = ''; 
            justCalculated = false;
            display.value += input;
        } else {
            display.value += input; 
            justCalculated = false;
        }
    } else {
        display.value += input;
    }
}

function ClearDisplay() {
    display.value = '';
    justCalculated = false;
}

function calculate() {
    try {
        display.value = eval(display.value);
        justCalculated = true;
    } catch (error) {
        display.value = "Error";
        justCalculated = false;
    }
}
