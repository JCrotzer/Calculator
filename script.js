function removeZero() {
    var value = document.getElementById("display").innerHTML;
    if (value == "0") {
    value = " "; document.getElementById("display").innerHTML = value;
    }
}

function press(value) {
    removeZero()
    document.getElementById("display").innerHTML += value;
}

function clr() {
    document.getElementById("display").innerHTML = "0";
}

function calculate() {
    removeZero()
    var equation = document.getElementById("display").innerHTML;
    var calculated = eval(equation);
    document.getElementById('display').innerHTML = calculated;
}