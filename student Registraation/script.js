const form = document.getElementById("myForm");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let roll = document.getElementById("roll").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let pass = document.getElementById("pass").value;
    let confirm = document.getElementById("confirm").value;
    let msg = document.getElementById("msg");

    if (name === "" || roll === "" || email === "" || phone === "" || pass === "" || confirm === "") {
        msg.textContent = "All fields are required!";
        msg.style.color = "red";
    } else if (pass.length < 8) {
        msg.textContent = "Password must be at least 8 characters!";
        msg.style.color = "red";
    } else if (pass !== confirm) {
        msg.textContent = "Password does not match!";
        msg.style.color = "red";
    } else {
        msg.textContent = "Registration successful!";
        msg.style.color = "green";
        form.reset();
    }
});