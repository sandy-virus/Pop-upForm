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

  function validate() {
    if (select.value.trim() == 0) {
      document.getElementById("slt").style.visibility = "visible";
      select.focus();
      return false;
    }
    else if (textarea.value.length <= 0) {
      textarea.focus();
      document.getElementById("sl").style.visibility = "visible";
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