function Person(fname, lname) {
  this.FName = fname;
  this.LName = lname;
}

Person.prototype.GetFullName = function() {
  return this.FName + this.LName;
};

Person.prototype.Email = "Abc@gmail.com";

var objPerson01 = new Person("R", "K");
// objPerson01.GetFullName = function() {
//   return this.FName + this.LName;
// };
console.log(objPerson01.GetFullName());
console.log(objPerson01);

var objPerson02 = new Person("A", "K");
console.log(objPerson02.GetFullName());
