function LogIn() {
  var email = document.getElementById("email").value;
  var pass = document.getElementById("pass").value;
  document.getElementById("result").innerHTML =
    "<p>Email :" + email + "&nbsp;&nbsp;&nbsp;" + "Password:" + pass + "</p>";
}
