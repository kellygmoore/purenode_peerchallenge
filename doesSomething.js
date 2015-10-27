var findRandomNumber = require('./findRandomNumber');
var convertToUSD = require('./convertToUSD');

var iAmDone = thirdModule();

function thirdModule() {
    var thisNumber = convertToUSD(parseInt(findRandomNumber(100,1000000)));
    //console.log(thisNumber);
    //var convertNumber = convertToUSD(thisNumber);
    //console.log(convertNumber);
    return thisNumber;
};


function accountBalance(){
    return ("Account balance: \n" + iAmDone);

}

module.exports = thirdModule;
module.exports = accountBalance;