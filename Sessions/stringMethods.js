var msg = "Good Boy Bad Boy";
// console.log(msg.length);
// console.log(msg.indexOf("Boy", 10));
// console.log(msg.lastIndexOf("Boy"));
// console.log(msg.search("Boy"));
// console.log(msg.slice(4, 8));
var msg2 = "Apple, E";
console.log(msg2.length);
console.log(msg2.slice(-1)); //Right to left
console.log(msg2.slice(0)); //Left to Right
console.log(msg2.substring(0)); //No -ve values
console.log(msg2.substr(0, 8));
console.log(msg2[1]);
console.log(msg.replace("Boy", "Girl"));
console.log(msg.toLowerCase());
console.log(msg.toUpperCase());
var brand = "TATA",
  car = " ALTROZ ";
console.log(brand + car);
console.log(brand.concat(car));
console.log(car.trim());
