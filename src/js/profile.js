const pUserName = document.getElementById("pUserName")
const pUserEmail = document.getElementById("pUserEmail")
const pUserPassword = document.getElementById("pUserPassword")

let userName;
let userEmail;
let userPassword;

if (localStorage.getItem("loged") !== null) {
    // usersList = JSON.parse(localStorage.getItem("users"));
    // pUserName.
    // console.log(JSON.parse(localStorage.getItem("loged")).name);
    // userName = JSON.parse(localStorage.getItem("loged")).name
    // userEmail = JSON.parse(localStorage.getItem("loged")).email
    // userPassword = JSON.parse(localStorage.getItem("loged")).password
    pUserName.innerHTML = JSON.parse(localStorage.getItem("loged")).name
    pUserEmail.innerHTML = JSON.parse(localStorage.getItem("loged")).email
    pUserPassword.innerHTML = JSON.parse(localStorage.getItem("loged")).password
} else {
    console.log("login first");
    Swal.fire({
        position: "center",
        icon: "error",
        title: `Log in first`,
        showConfirmButton: false,
        timer: 1500
    });
    setTimeout(() => {
        window.open("index.html", "_self");
    }, 1500);
}

function logOut() {
    localStorage.removeItem("loged")
    window.open("index.html", "_self");
}