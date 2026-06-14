let display = document.getElementById("display");

function addValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function backspace() {
    display.value = display.value.slice(0, -1);
}

function percentage(value) {
    display.value = display.value / 100;
}

document.getElementById("equal").addEventListener("click", function () {
    display.value = eval(display.value);
});