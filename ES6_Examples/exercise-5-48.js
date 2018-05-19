var names= ["James","Ron","Lisa","Tommy"];
var randomName = items => items[Math.floor(Math.random()*items.length)];

var randomNumber = (maxNumber,minNumber) =>
                        Math.floor(Math.random() * maxNumber) + minNumber;

console.log(`${randomName(names)} magic number is ${randomNumber(5,2)}`);