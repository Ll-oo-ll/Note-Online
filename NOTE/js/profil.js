// let user = document.getElementById("user");
// let email = document.getElementById("email");
// let tel = document.getElementById("tel");
// let pass = document.getElementById("pass");
// let btn = document.querySelectorAll("button");
// let icon = document.querySelectorAll("button i");
// let input = document.querySelectorAll("input");
// let p = document.getElementById("p");

// function update(i , value) {
//     btn[i].onclick = () =>{ 
//         icon[i].className = "bi bi-check-circle-fill";
//         btn[i].className = "btn btn-success";
//         input[i].value = value;
//         input[i].readOnly = false ;
//         input[i].focus();
//         btn[i].onclick = function () {
//             value = input[i].value ; 
//             icon[i].className = "bi bi-pen-fill";
//             btn[i].className = "btn btn-light";
//             input[i].readOnly = true ;
//         }
//     }
// }
// update(0,localStorage.user)
// p.textContent += ` ${localStorage.user.toUpperCase()}`;
// user.value = localStorage.user ;
// email.value = `${localStorage.email.slice(0,1)}********** ${localStorage.email.slice(-11)}`;
// tel.value = `********${localStorage.tel.slice(-2)}` ;
// pass.value = localStorage.pass ;
// Selecting elements
let user = document.getElementById("user");
let email = document.getElementById("email");
let tel = document.getElementById("tel");
let pass = document.getElementById("pass");
let btn = document.querySelectorAll("button");
let icon = document.querySelectorAll("button i");
let input = document.querySelectorAll("input");
let p = document.getElementById("p");

// Function to update input fields
function update(i, value) {
    
        btn[i].onclick = () => { 
            if (i != 3) {
            icon[i].className = "bi bi-check-circle-fill";
            btn[i].className = "btn btn-success";
            input[i].value = value;
            input[i].readOnly = false;
            input[i].focus();
            document.addEventListener("keydown", function (event) {
                if (event.key == "Enter") {
                    btn[i].click();
                }
            })
            btn[i].onclick = function () {
                icon[i].className = "bi bi-pen-fill";
                btn[i].className = "btn btn-light";
                input[i].readOnly = true;
                if (i == 0) {
                    localStorage.user = input[i].value;
                }else if (i == 1) {
                    localStorage.email = input[i].value;
                }
                else if (i == 2) {
                    localStorage.tel = input[i].value;
                }
                location.reload();
            }
        }
        else{
        let old = prompt("Enter the Old Password");
        if (old == localStorage.pass) {
            icon[i].className = "bi bi-check-circle-fill";
            btn[i].className = "btn btn-success";
            input[i].value = value;
            input[i].readOnly = false;
            input[i].focus();
            input[i].type = "text";
            btn[i].onclick = function () {
                icon[i].className = "bi bi-pen-fill";
                btn[i].className = "btn btn-light";
                input[i].readOnly = true;
                input[i].type = "password";
                localStorage.pass = input[i].value;
                location.reload();
            }
           
        }else{
            alert("It's false");
        }
    }
    }
}


update(0, localStorage.user);
update(1, localStorage.email);
update(2, localStorage.tel);
update(3, localStorage.pass);
p.textContent += ` ${localStorage.user.toUpperCase()}`;
user.value = localStorage.user;
email.value = `${localStorage.email.slice(0, 1)}**********${localStorage.email.slice(-11)}`;
tel.value = `********${localStorage.tel.slice(-2)}`;
pass.value = localStorage.pass;
