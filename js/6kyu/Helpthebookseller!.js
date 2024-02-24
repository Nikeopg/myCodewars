function stockList(listOfArt, listOfCat) {
    if (!listOfArt.length || !listOfCat.length) {
        return "";
    }

    const totals = listOfCat.reduce((acc, cat) => {
        acc[cat] = 0;
        return acc;
    }, {});

    for (let art of listOfArt) {
        let [code, quantity] = art.split(" ");
        let category = code[0];
        if (listOfCat.includes(category)) {
            totals[category] += Number(quantity);
        }
    }
    return listOfCat.map(cat => { return `(${cat} : ${totals[cat]})`; }).join(' - ');
}


let L = ["ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"];
let M = ["A", "B", "C", "W"];
console.log(stockList(L, M));  