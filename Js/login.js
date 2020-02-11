function LogIn() {
  var emailVal = getVal("email");
  var passVal = getVal("pass");

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

//If Else Example
// To Validate user
function validateUser(email, pass) {
  if (email == "admin" && pass == "admin") {
    msg = "<p>Login Succesfull</p>";
    Legend("admin");
  } else if (email == "raghu" && pass == "admin") {
    msg = "<p>Login Succesfull</p>";
    Legend("raghu");
  } else {
    msg = "<p>Login UnSuccesful</p>";
    Legend("");
  }

  return msg;
}

//Switch Example
function Legend(user) {
  switch (user) {
    case "admin":
      document.getElementById("loginUser").innerHTML = "Welcome Admin";
      break;
    case "raghu":
      document.getElementById("loginUser").innerHTML = "Welcome Raghu";
      break;
    default:
      document.getElementById("loginUser").innerHTML = "Welcome Guest";
      break;
  }
}
