let user = document.getElementById("name");
let pass = document.getElementById("pass");
let btn = document.getElementById("btn");
let form = document.getElementById("form");
btn.onclick = () => {
    if (localStorage.user && localStorage.pass) {
        if (user.value === localStorage.user && pass.value === localStorage.pass) {
           form.action = "index.html";
        } else {
           form.action = "signup.html";
        }
    } else {
        form.action = "signup.html";
    }
};
console.log(localStorage.pass);
