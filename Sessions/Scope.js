// Function & Global Scope.

/** 1. Scope Of Variable */
var outVar = 10; //Global

function Scope() {
  var outVar; ///
  console.log(outVar);
  outVar = 20; //Local
  console.log(outVar);
}
Scope();
