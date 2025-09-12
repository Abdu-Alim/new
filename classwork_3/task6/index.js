let num = parseInt(prompt("Введите число от 2 до 10"));
if (isNaN(num) || num < 2 || num > 10 || !Number.isInteger(num)) {
    num = parseInt(prompt("Ошибка! Введите число от 2 до 10"));
}
for (let i = 1; i <= 10; i++) {
    console.log(`${num} * ${i} = ${num * i}`);
}