function getCards() {
    let cards = [];
    cards.push(...getMajorCards());
    cards.push(...getSuitCards());
    return cards;
}

function getMajorCards() {
    let majors = [];
    for (const i of Array(22).keys()) {
        let zeroFilled = ('00' + i).slice(-2);
        let name = 'maj' + zeroFilled;
        majors.push(name);
    }
    return majors;
}


function getSuitCards() {
    let cards = [];
    let suits = [
        "cups",
        "pents",
        "swords",
        "wands"
    ]
    for (const suit of suits) {
        let aSuitCards = generateSuitCards(suit);
        cards.push(...aSuitCards);
    }
    return cards;
}

function generateSuitCards(prefix) {
    let cards = [];
    for (const i of Array(14).keys()) {
        let cardIndex = i + 1;
        let zeroFilled = ('00' + cardIndex).slice(-2);
        let name = prefix + zeroFilled;
        cards.push(name);
    }
    return cards;
}

// if (require.main === module) {
//     console.log(getCards());
// }