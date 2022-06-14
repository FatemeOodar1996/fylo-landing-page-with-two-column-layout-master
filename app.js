var demo = document.getElementById("demo");
var email = document.getElementById("email");
function myFunction() {
  var at = document
    .getElementById("email")
    .value.indexOf("@" + "gmail" + "." + "com");
  var fname = document.getElementById("email").value;
  submitOK = "true";
  if (at == -1) {
    demo.innerHTML = "please chek your email";
    demo.style.color = "#dc3545";
    email.style.borderColor = "#dc3545";
  } else {
    demo.innerHTML = "Your email has been registered";
    email.style.borderColor = "#198754";
    demo.style.color = "#198754";
  }
}
