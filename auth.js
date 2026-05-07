function loginUser() {

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    if(username === "admin" && password === "12345") {

        message.innerHTML = "Authentication Successful";
        message.style.color = "green";

        setTimeout(() => {
            window.location.href = "dashboard.html";
        }, 1500);

    } else {

        message.innerHTML = "Invalid Credentials";
        message.style.color = "red";
    }
}
