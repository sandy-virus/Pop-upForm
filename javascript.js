document.getElementById("pop-up").addEventListener("click", function () {
    document.querySelector(".model").style.display = "flex";
    document.querySelector(".page3").style.display = "none";
    document.querySelector(".page2").style.display = "none";
    document.querySelector(".page1").style.display = "flex";
  });
  // document.getElementById("next").addEventListener("click", function () {
  //   document.querySelector(".page2").style.display = "flex";
  //   document.querySelector(".page1").style.display = "none";
  // });
  // document.getElementById("next2").addEventListener("click", function () {
  //   document.querySelector(".page3").style.display = "flex";
  //   document.querySelector(".page2").style.display = "none";
  //   document.querySelector(".page1").style.display = "none";
  // });
  document.querySelector(".close").addEventListener("click", function () {
    document.querySelector(".model").style.display = "none";
  });
  document.querySelector(".back").addEventListener("click", function () {
    document.querySelector(".page2").style.display = "none";
    document.querySelector(".page1").style.display = "flex";
  });

  // const select = document.getElementById("select");
  // const message = document.getElementById("message");
  var firstName = document.getElementById("firstName");
  var lastName = document.getElementById("lastName");
  var email = document.getElementById("email");
  var telephone = document.getElementById("telephone");
  var select = document.getElementById("select");
  var textarea = document.getElementById("message");

  var category = document.getElementById("category");
  var msg = document.getElementById("msg");
  var fname = document.getElementById("fname");
  var lname = document.getElementById("lname");
  var phone = document.getElementById("phone");
  var mail = document.getElementById("mail");

  function validate() {
    if (select.value.trim() == 0) {
      document.getElementById("category").style.visibility = "visible";
      document.getElementById("select").style.borderColor = "red";
      select.focus();
      return false;
    }
    if (textarea.value.length <= 0) {
      textarea.focus();
      document.getElementById("msg").style.visibility = "visible";
      document.getElementById("message").style.borderColor = "red";
      return false;
    } else {
      document
        .getElementById("next")
        .addEventListener("click", function () {
          document.querySelector(".page2").style.display = "flex";
          document.querySelector(".page1").style.display = "none";
        });
    }
    return false;
  }

  
  
  function validatePage2() {
    if (firstName.value.trim() === "") {
      document.getElementById("fname").style.visibility = "visible";
      firstName.focus();
      firstName.style.borderColor = "red";
      return false;
    }
    if (lastName.value.trim() === "") {
      lastName.focus();
      document.getElementById("lname").style.visibility = "visible";
      document.getElementById("lastName").style.borderColor = "red";
      return false;
    }
    if (email.value.trim() === "") {
      email.focus();
      document.getElementById("mail").style.visibility = "visible";
      document.getElementById("email").style.borderColor = "red";
      return false;
    }
    if (telephone.value.trim() === "") {
      telephone.focus();
      document.getElementById("phone").style.visibility = "visible";
      document.getElementById("phone").style.borderColor = "red";
      return false;
    } else {
      document
        .getElementById("next2")
        .addEventListener("click", function () {
          document.querySelector(".page3").style.display = "flex";
          document.querySelector(".page2").style.display = "none";
          document.querySelector(".page1").style.display = "none";
        });
    }
    return false;
  }

  
  select.addEventListener('click', categoryError);
  function categoryError(){
    if (select.value.trim() != 0) {
      category.style.visibility = "hidden";
      select.style.borderColor = "green";
      return true;
    }
  }

  textarea.addEventListener('textInput', categoryError);
  function categoryError(){
    if (textarea.value.length >= 1) {
      msg.style.visibility = "hidden";
      textarea.style.borderColor = "green";
      return false;
    }
  }

  
  firstName.addEventListener('textInput', error);
  function error(){
    if (firstName.value.trim() != "") {
      fname.style.visibility = "hidden";
      firstName.style.borderColor = "green";
      return true;
    }
  }

  lastName.addEventListener('textInput', error2);
  function error2(){
    if (lastName.value.trim() != "") {
      lname.style.visibility = "hidden";
      lastName.style.borderColor = "green";
      return true;
    }
  }

  email.addEventListener('textInput', mailError);
  function mailError(){
    if (email.value.trim() != "") {
      mail.style.visibility = "hidden";
      email.style.borderColor = "green";
      return true;
    }
  }

  telephone.addEventListener('textInput', phoneError);
  function phoneError(){
    if (telephone.value.trim() != "") {
      phone.style.visibility = "hidden";
      telephone.style.borderColor = "green";
      return true;
    }
  }