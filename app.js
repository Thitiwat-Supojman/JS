function toFahrenheit(Fahrenheit) {

    let value = (Fahrenheit * 9) / 5 + 32
    return value.toFixed(2) + " F";
}
function toCelsius(Celsius) {
    let value = (Celsius - 32) * 5 / 9
    return value.toFixed(2) + " C";
    
}

function toCelsiusprogram(value) {
    var sum =  toCelsius(value);

    document.getElementById('SUMALL').innerHTML = "C :" + sum; 
}

function toFahrenheitprogram(value) {
    var sum = toFahrenheit(value);
    document.getElementById('SUMALL').innerHTML = "F :" + sum; 
}
