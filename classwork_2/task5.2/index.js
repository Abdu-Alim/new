var color = prompt("Введите цвет: красный, желтый, зеленый");
color = color.toLowerCase();
if (color === "красный") {
    console.log("красный: стой!");
} else if (color === "желтый" || color === "жёлтый") {
    console.log("желтый: жди!");
} else if (color === "зеленый" || color === "зелёный") {
    console.log("зеленый: иди!");
} else {
    alert("Введите корректный цвет!");
    color = prompt("Введите цвет: красный, желтый, зеленый");
}