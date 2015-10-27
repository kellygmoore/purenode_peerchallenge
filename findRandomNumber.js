function randomNumber(min, max){
    var x = Math.floor(Math.random() * (1 + max - min) + min);
    return x.toString();
    console.log(x);

};

module.exports = randomNumber;