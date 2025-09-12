while (true) {
    const input = prompt("Введите число от 1 до 3999 или 'exit' для выхода");
    input = input.toLowerCase();
    if (input === "exit") {
        console.log("Программа завершена");
        break;
    }
    const number = parseInt(input);
    if (isNaN(number) || number < 1 || number > 3999 || !Number.isInteger(number)) {
        alert("Пожалуйста, введите целое число от 1 до 3999!");
        continue;
    }
    const romanValues = [
        { value: 1000, symbol: "M" },
        { value: 900, symbol: "CM" },
        { value: 500, symbol: "D" },
        { value: 400, symbol: "CD" },
        { value: 100, symbol: "C" },
        { value: 90, symbol: "XC" },
        { value: 50, symbol: "L" },
        { value: 40, symbol: "XL" },
        { value: 10, symbol: "X" },
        { value: 9, symbol: "IX" },
        { value: 5, symbol: "V" },
        { value: 4, symbol: "IV" },
        { value: 1, symbol: "I" }
    ];
    let result = "";
    let remaining = number;

    for (const pair of romanValues) {
        while (remaining >= pair.value) {
            result += pair.symbol;
            remaining -= pair.value;
        }
    }

    console.log(`${number} -> ${result}`);
}