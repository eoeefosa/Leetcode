document.getElementById("demo").innerHTML = "Hello World!";

document.getElementById("demodate").innerHTML = "Date: " + Date();

function validateForm() {
  let x = document.forms["myForm"]["fname"].value;

  if (x == "") {
    document.getElementById("error").innerHTML = "Name must be filled out";
    alert("Name must be filled out");
    return false;
  }

  if (x == "Efosa") {
    document.getElementById("error").innerHTML = "Name cannot be Efosa";
    alert("Name cannot be Efosa");
    return false;
  }
}
