
//function findUSD(x) {
//    return (x.toLocaleString('USD', {
//        style: 'currency',
//        currency: "USD",
//        minimumFractionDigits: 2,
//        maximumFractionDigits: 2
//    }) );
//};

var numeral = require('numeral');

function findUSD(x) {
    var dollarNumber = numeral(x).format('$0,0.00');
    console.log(dollarNumber);
    return dollarNumber;
}


module.exports = findUSD;
