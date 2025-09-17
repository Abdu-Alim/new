var start = parseFloat(prompt("Введите начальное значение диапазона"));
var end = parseFloat(prompt("Введите конечное значение диапазона"));
var stepInput = prompt("Введите шаг (по умолчанию 1)");
var step = stepInput === "" ? 1 : parseFloat(stepInput);
let arr = [];
for (var i = start; i <= end; i += step) {
    arr.push(i);
}
console.log(arr);