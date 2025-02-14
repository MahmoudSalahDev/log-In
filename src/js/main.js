const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const wrongSpan = document.getElementById("wrong");
const succcesSpan = document.getElementById("success");
const existsSpan = document.getElementById("exists");
const incorrectSpan = document.getElementById("incorrect");




let usersList = [];
if (localStorage.getItem("users") !== null) {
  usersList = JSON.parse(localStorage.getItem("users"));
}

function addUser() {
  if (nameInput.value == "" || emailInput.value == "" || passwordInput.value == "") {
    wrongSpan.classList.remove("hidden");
    succcesSpan.classList.add("hidden");
    existsSpan.classList.add("hidden");
  } else {
    if (usersList.some(e => e.email == emailInput.value.toLowerCase())) {
      existsSpan.classList.remove("hidden");
      wrongSpan.classList.add("hidden");
      succcesSpan.classList.add("hidden");
    } else {
      let user = {
        name: nameInput.value,
        email: emailInput.value.toLowerCase(),
        password: passwordInput.value
      }
      usersList.push(user);
      localStorage.setItem("users", JSON.stringify(usersList));
      succcesSpan.classList.remove("hidden");
      wrongSpan.classList.add("hidden");
      existsSpan.classList.add("hidden");
      setTimeout(() => {
        window.location.href = "../index.html";
      }, 1500);
    }
  }
}

let userName;
let userEmail;
let userPassword;

function logUser() {
  if (emailInput.value == "" || passwordInput.value == "") {
    wrongSpan.classList.remove("hidden");
    incorrectSpan.classList.add("hidden");
  } else {
    for (let i = 0; i < usersList.length; i++) {
      if (usersList[i].email == emailInput.value) {
        userName = usersList[i].name;
        userEmail = usersList[i].email.toLowerCase();
        userPassword = usersList[i].password;
      }
    }
    if (userEmail == emailInput.value.toLowerCase() && userPassword == passwordInput.value) {
      let loged = {
        name: userName,
        email: userEmail.toLowerCase(),
        password: userPassword
      }
      localStorage.setItem("loged", JSON.stringify(loged))
      incorrectSpan.classList.add("hidden")
      Swal.fire({
        position: "top",
        icon: "success",
        title: `Welcome ${userName}`,
        showConfirmButton: false,
        timer: 1500
      });
      setTimeout(() => {
        window.location.href = "./src/profile.html";
      }, 1500);
    } else {
      incorrectSpan.classList.remove("hidden")
    }
    wrongSpan.classList.add("hidden")
  }
}
