var str = "BATMAN";

var arrStr = str.split("");
//console.log(arrStr);

//reverseStrFor(arrStr);
//reverseStrWhile(arrStr);

//For Loop
function reverseStrFor(arrStr) {
  var finalArr = [];
  for (var i = arrStr.length - 1, j = 0; i >= 0; i--, j++) {
    finalArr[j] = arrStr[i];
  }
  console.log(finalArr);
}

//While Loop
function reverseStrWhile(arrStr) {
  var finalArr = [];
  var i = arrStr.length - 1;
  var j = 0;

  while (i >= 0) {
    finalArr[j] = arrStr[i];
    i--;
    j++;
  }
  console.log(finalArr);
}

//For IN
var Person = { name: "Abhi", email: "abhi@gmail.com" };
var Users = [
  { name: "Abhi", email: "abhi@gmail.com" },
  { name: "Raghu", email: "Raghu@gmail.com" }
];

// Works with Object
for (var key in Person) {
  console.log(Person[key]);
}

//For Each
// Works with Arr Objects / Simple Array
Users.forEach(item => {
  console.log(item);
});
