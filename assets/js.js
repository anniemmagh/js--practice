var number1 = "46";
var number2 = "4";
var result = number1 + number2;
console.log(result); //464

var number1 = "46";
var number2 = "4";
var result = parseInt(number1) + parseInt(number2);
console.log(result); //50

var number1 = "45.05";
var number2 = "2.5";
var result = parseFloat(number1) + parseFloat(number2);
console.log(result); //47.55

var num1 = "hello";
var num2 = "22";
var result = isNaN(num1);
console.log(result); //true

var strSum = prompt("sheiyvanet tanxa", 500);
var strPercent = prompt("sheiyvanet procenti");
var sum = parseInt(strSum);
var percent = parseInt(strPercent);
sum = sum + sum * percent / 100;
alert('proecentis daricxvis shemdeg tanxa iqneba' + sum);

var people = ["tom", "alice", "sam"];
console.log(people);
console.log(people[1]);

var people = [
    ["tom", 25, false],
    ["bill", 38, true],
    ["alice", 23, false]
]
console.log(people[0]);

var income = 500;
var age = 19;
if (income < 550 && age >= 18) {
    var message = "shemosavali metia 500-ze"
    alert(message);
}

var age = 17;
if (age >= 18) {
    alert("tqvens shesuli xart programashi")
} else {
    alert("tqven ar shegidzliat radgan xart 18-")
}