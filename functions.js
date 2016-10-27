// TODO: add your solutions here!


//#1

function combineWords(word1, word2) {
//     TODO: Place your code here
    return word1 + word2;
}

var result = combineWords('dog', 'house');
console.log(result)
// displays 'doghouse


//#2

function repeatPhrase(phrase, n) {
    // TODO: Place your code here
    for (var i = n; i >= 1; i--) {
        console.log(phrase);
    }

}

repeatPhrase("Hello", 5);
// displays
// Hello
// Hello
// Hello
// Hello
// Hello


// #3
function toTheNthPower(number, power) {
    // TODO: Place your code here
    return Math.pow(number, power);
}

var result = toTheNthPower(4, 5);
console.log(result);
// displays 1024


//#4

function areaOfACircle(radius) {
    // TODO: Place your code here
   var floatNumCircle =  (Math.PI * radius * radius).toFixed(3);
   return Math.round(floatNumCircle * 100) / 100;
}

var result = areaOfACircle(2);
console.log(result);
// displays approximately 12.57


//#5
function pythagoreanTheorem(a, b) {
    // TODO: Place your code here
    var c = Math.pow(a, 2) + Math.pow(b, 2);
    return Math.sqrt(c);
}

var result = pythagoreanTheorem(3, 4);
console.log(result);
// should display 5;
