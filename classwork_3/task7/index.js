const cards = ["46782346", "45781218", "79874568", "12157845", "36151845", "41250895", "41201961"];
let visaCount = 0;
for (let i=0; i < cards.length; i++) {
    if (cards[i][0] === '4') {
        visaCount++;
    }
}
console.log(`Количество карт Visa: ${visaCount} из ${cards.length}`);