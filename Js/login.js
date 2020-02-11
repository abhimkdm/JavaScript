function LogIn() {
  var emailVal = getVal("email");
  var passVal = getVal("pass");
  var msg = "";

  //Vaidate user
  document.getElementById("result").innerHTML = validateUser(emailVal, passVal);

  // document.getElementById("result").innerHTML =
  //   "<p>Email :" + email + "&nbsp;&nbsp;&nbsp;" + "Password:" + pass + "</p>";
}

/**Common functions**/

//To the vlues of the textbox.
function getVal(id) {
  return document.getElementById(id).value;
}

// To Validate user
function validateUser(email, pass) {
  if (email == "abc@gmail.com" && pass == "password") {
    msg = "<p>Login Succesfull</p>";
  } else {
    msg = "<p>Login UnSuccesful</p>";
  }

  return msg;
}
