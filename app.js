var demo = document.getElementById("demo");
function myFunction() {
  var at = document
    .getElementById("email")
    .value.indexOf("@" + "gmail" + "." + "com");
  var fname = document.getElementById("email").value;
  submitOK = "true";
  if (at == -1) {
    demo.innerHTML = "please write correct value";
  }
}
