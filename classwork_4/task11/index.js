var card = prompt("Введите номер карты");
var maskSymbol = prompt("Введите символ для маскировки (по умолчанию X)");
function maskCard(number, symbol = "X") {
    let masked = "";
    for (let i = 6; i < number.length - 4; i++) {
        masked += symbol;
    }
    return number.slice(0, 6) + masked + number.slice(-4);
}
if (card.length === 16) {
    document.write(maskCard(card, maskSymbol));
} else {
    prompt("Номер карты должен содержать 16 символов");
}