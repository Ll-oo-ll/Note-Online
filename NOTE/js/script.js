//dark light mode
let mode = document.getElementById("mode");
let moon = document.getElementById("moon");
let text = document.getElementById("text");
let root = document.documentElement;
if (localStorage.color && localStorage.back) {
  root.style.setProperty("--color", localStorage.color);
  root.style.setProperty("--back", localStorage.back);
  text.textContent = localStorage.text;
  moon.className = "";
  moon.className = `bi ${localStorage.icon}`;
}

mode.onclick = () => {
  if (text.textContent == "Dark") {
    moon.classList.remove("bi-moon-fill");
    localStorage.icon = "bi-brightness-high";
    moon.classList.add(localStorage.icon);
    localStorage.text = "Light";
    text.textContent = localStorage.text;
    localStorage.color = "black";
    localStorage.back = "white";
    root.style.setProperty("--color", localStorage.color);
    root.style.setProperty("--back", localStorage.back);
  } else if (text.textContent == "Light") {
    moon.classList.remove("bi-brightness-high");
    localStorage.icon = "bi-moon-fill";
    moon.classList.add(localStorage.icon);
    localStorage.text = "Dark";
    text.textContent = localStorage.text;
    localStorage.color = "white";
    localStorage.back = "black";
    root.style.setProperty("--color", localStorage.color);
    root.style.setProperty("--back", localStorage.back);
  }
};
//dark light mode
let a = document.getElementById("a");
if (localStorage.user && localStorage.pass && localStorage.email && localStorage.tel) {
  a.innerHTML = "<i class='bi bi-person-fill'> </i>Profile";
  a.href = "profile.html"
}else{
  a.innerHTML = "<i class='bi bi-person-fill-add'> </i>Log In";
  a.href = "login.html";
}
