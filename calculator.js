const display = document.getElementById("display");
function adjustFontSize() {
    if (display.value.length > 10) {
        display.style.fontSize = "1rem"; // Reduce size if length is large
    } else {
        display.style.fontSize = "1.5rem"; // Default size
    }
}
function appendToDisplay(input) {
    display.value += input;
    adjustFontSize();
}
function clearDisplay() {
    display.value = "";
    adjustFontSize();
}
function calculate() {
    try {
        display.value = eval(display.value);
        adjustFontSize();
    } catch (error) {
        display.value = "Error";
    }
}
