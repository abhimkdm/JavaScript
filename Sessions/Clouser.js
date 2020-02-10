// Clousers.

//1. Simple Clousre
/*var outside = 10;

function sum() {
  var inside = 20;
  console.log(outside);
  //return outside + inside;
}

sum();
console.log(outside);
console.log(inside);*/

/** 2. function within another function called clouser */
// function sum(a) {
//   console.log(a);
//   return function insum(b) {
//     return a + b;
//   };
// }

// var obj = new sum(2);
// console.log(obj(3));
//console.log(sum(2));

//Examples
function sum(a) {
  return function(c) {
    console.log(a + c);
  };
}

sum(2)(3);
