let cardType = prompt("Введите тип карты").toUpperCase();
if (cardType === "SILVER" || cardType === "СЕРЕБРО" || cardType === "GOLD" || cardType === "ЗОЛОТО" || cardType === "PLATINUM" || cardType === "ПЛАТИНА") {
    let liters = parseFloat(prompt("Введите количество литров"));
    if (isNaN(liters) || liters <= 0) {
        console.log("Ошибка: введите корректное количество литров");
    } else {
        let points;
        if (cardType === "SILVER" || cardType === "СЕРЕБРО") {
            points = liters * 0.5;
        } else if (cardType === "GOLD" || cardType === "ЗОЛОТО") {
            points = liters * 0.75;
        } else if (cardType === "PLATINUM" || cardType === "ПЛАТИНА") {
            points = liters * 1;
        }
                console.log(`Начислено баллов: ${points}`);
            }
        }