const pUserName = document.getElementById("pUserName")
const pUserEmail = document.getElementById("pUserEmail")
const pUserPassword = document.getElementById("pUserPassword")

if (localStorage.getItem("loged") !== null) {
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
        window.location.href = "../index.html";
    }, 1500);
}

function logOut() {
    localStorage.removeItem("loged")
    window.location.href = "../index.html";
}