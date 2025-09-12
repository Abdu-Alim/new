const number = Math.floor(Math.random() * 100) + 1;
var find = Number(prompt("Enter a number between 1 and 100"));
while (find != number) {
    if (find < number) {
        alert("Больше!.");
    } else if (find > number) {
        alert("Меньше!");
    } else {
        document.writeln("Поздравляем! Вы угадали число.");
    }
    find = Number(prompt("Enter a number between 1 and 100"));
}