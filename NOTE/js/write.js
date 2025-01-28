if (localStorage.count != 0) {
  function circle() {
    let div = document.createElement("div");
    div.className = "circle";
    let wh = Math.floor(Math.random() * 100) + 10;
    let x = Math.floor(Math.random() * 100) - 10;
    let y = Math.floor(Math.random() * 100) - 10;
    div.style.cssText = `
          background : var(--back);
          width : ${wh}px;
          height : ${wh}px;
          position: absolute ;
          top : ${y}%;
          left : ${x}%;
          border-radius: 50%;
      
          `;
    document.body.appendChild(div);
    setTimeout(function () {
      div.remove();
    }, 200);
  }

  let cir = setInterval(circle, 10);
  setTimeout(function () {
    clearInterval(cir);
  }, 4000);
  localStorage.count = 0;
}

function allnote(title, mtext, time) {
  let div = document.createElement("div");
  div.className = "note";
  let img = document.createElement("img");
  img.src = "../media/note.cur";
  let about = document.createElement("div");
  about.className = "about";
  let h2 = document.createElement("h2");
  let p = document.createElement("p");

  let span = document.createElement("span");
  span.innerHTML = time;

  let i = document.createElement("i");
  i.className = "bi bi-pen-fill pen";
  let ii = document.createElement("i");
  ii.className = "bi bi-trash3-fill";
  ii.classList.add("trash")
  let button = document.createElement("button");
  button.className = "";

  button.appendChild(i);
  button.appendChild(ii);
  about.append(h2);
  about.append(p);
  about.append(button);
  about.append(span);
  div.appendChild(img);
  div.appendChild(about);
  main.append(div);

  h2.textContent = title;
  p.textContent = `${mtext}.....`;
}

let note;

let title = document.getElementById("title");
let text = document.getElementById("text");
let close = document.getElementById("close");
let save = document.getElementById("save");
let plus = document.getElementById("plus");
let form = document.getElementById("form");
let main = document.getElementById("main");
let all = document.getElementById("remove");
let now = new Date();

plus.onclick = () => {
  form.style.display = "flex";
  main.style.display = "none";
  main.innerHTML = "<h1>Death Note</h1>";
  title.focus();
  plus.onclick = () =>{
    save.click()
  };
  document.addEventListener("keydown", function (event) {
    if (event.key == "ArrowDown") {
        text.focus();
    }
    if (event.key == "ArrowUp") {
        title.focus();
    }
  })
};

close.onclick = () => {
  form.style.display = "none";
  main.style.display = "block";
  main.innerHTML = "<h1>Death Note</h1>";
  for (let i = 0; i < note.length; i++) {
    allnote(note[i].title, note[i].mtext, note[i].time);
  }
  location.reload();
};

save.onclick = () => {
  if (title.value != "" && text.value != "") {
    let newnote = {
      title: title.value,
      text: text.value,
      time: `${now.getHours()}:${now.getMinutes()}`,
      mtext: text.value.slice(0,10)
      
    };
    note.push(newnote);
    localStorage.note = JSON.stringify(note);
    for (let i = 0; i < note.length; i++) {
      allnote(note[i].title, note[i].mtext, note[i].time);
    }
  }
  location.reload();
};

if (localStorage.note) {
  note = JSON.parse(localStorage.note);
  main.innerHTML = "<h1>Death Note</h1>";
  
} else {
  note = [];
  main.innerHTML = "<h1>Death Note</h1>";
}
for (let i = 0; i < note.length; i++) {
  allnote(note[i].title, note[i].mtext, note[i].time);
}
let btn = document.getElementsByClassName("pen");
let trash = document.getElementsByClassName("trash");
for (let i = 0; i < btn.length; i++) {
  btn[i].onclick = () => {
    main.innerHTML = "<h1>Death Note</h1>";
    form.style.display = "flex";
    main.style.display = "none";
    title.value = note[i].title;
    text.value = note[i].text;
    note.splice(i, 1);
  };
}
for (let x = 0; x < note.length; x++) {
    trash[x].onclick = () => {
        note.splice(x, 1); 
        localStorage.note = JSON.stringify(note);
    
        main.innerHTML = "<h1>Death Note</h1>";
        for (let i = 0; i < note.length; i++) {
            allnote(note[i].title, note[i].mtext, note[i].time);
        }
        location.reload();
    }
}

all.onclick = () => {
    note = []
    localStorage.note = JSON.stringify(note);
    
    main.innerHTML = "<h1>Death Note</h1>";
    for (let i = 0; i < note.length; i++) {
        allnote(note[i].title, note[i].mtext, note[i].time);
         }
         location.reload();
    }
    // document.addEventListener("keydown", function(event) {
    //     if (event.key === "Enter") {
    //       // الإجراء الذي تريد تنفيذه عند الضغط على زر إدخال (Enter)
    //       alert("تم الضغط على زر الإدخال (Enter)!");
    //     }
    //   });
      
