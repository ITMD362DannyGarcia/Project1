function magic(){


  var email = document.forms["myForm"]["email"].value;

  if (email == "") {
    alert("Remember to enter your email!");
    return false;
  } else{
    alert("Great, you're all signed up for the beta!")
  }
}
