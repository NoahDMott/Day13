let oneEuroIs = {
    "JPY": 130.08, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.0061, // british pound
}
// we declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.2;
    //return the dollar value
    return valueInDollar;
}
const fromDollarToYen = function(valueInDollar){
    // convert the given valueInEuro to dollars
    let valueInYen = valueInDollar * 130.08;
    //return the dollar value
    return valueInYen;
}
const fromYenToPound = function(valueInYen){
    // convert the given valueInEuro to dollars
    let valueInPound = valueInYen * 0.0061;
    //return the dollar value
    return valueInPound;
}

module.exports = {fromEuroToDollar,fromDollarToYen,fromYenToPound }
