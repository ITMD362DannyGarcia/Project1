function magic(){


  var email = document.forms["myForm"]["email"].value;
  var fname = document.forms["myForm"]["fname"].value;
  var lname = document.forms["myForm"]["lname"].value;
  var phone = document.forms["myForm"]["phone"].value;
  var date = document.forms["myForm"]["date"].value;

  if ((email == "") || (fname == "") || (lname == "") || (phone == "") || (date == "") ) {
    alert("Remember to fill in all fields!");
    return false;

  } else{
    alert("Great, you're all signed up for the beta!")
  }
}
