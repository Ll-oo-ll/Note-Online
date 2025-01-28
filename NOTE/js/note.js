let titles = [
    "Black Memo",
    "Black Notebook",
    "Black Journal",
    "Black Diary",
    "Black Notepad",
    "Dark Note",
    "Black Paper",
    "Shadow Memo",
    "Black Scribble",
    "Black Note",
    "Black Record",
    "Black Manuscript",
    "Black Document",
    "Black Register",
    "Black Log",
    "Black Draft",
    "Black Script",
    "Black Annotation",
    "Black Entry",
    "Black Jot",
    "Black Scratch",
    "Black Write-Up",
    "Black Text",
    "Black Composition",
    "Black Chronicle",
    "Black Documentation",
    "Black Summary",
    "Black Account",
    "Black Memoir",
    "Black Report",
    "Black Outline",
    "Black Brief"
];
let text = [
    "This black memo notebook is perfect for jotting down quick notes and ideas.",
    "An ideal black notebook for organized planning and detailed entries.",
    "A black journal designed for deep thoughts and reflective writing.",
    "A black diary with ample space for daily records and personal reflections.",
    "This black notepad is great for quick sketches and brainstorm sessions.",
    "A dark note book with smooth pages, perfect for capturing your creativity.",
    "This black paper set is excellent for drafting and sketching your ideas.",
    "A shadow memo book that fits perfectly in your bag for on-the-go notes.",
    "A black scribble notebook for all your random thoughts and doodles.",
    "A black note book crafted for neat writing and well-organized pages.",
    "This black record book is perfect for keeping track of important dates and events.",
    "A black manuscript book that's ideal for story writing and creative projects.",
    "A black document book, perfect for storing important papers and notes.",
    "This black register is great for keeping a log of your daily tasks and achievements.",
    "A black log book that helps you track your progress and set future goals.",
    "A black draft book for your preliminary sketches and rough drafts.",
    "This black script book is ideal for playwrights and screenwriters.",
    "A black annotation book for adding notes and comments to your projects.",
    "This black entry book is perfect for daily journaling and writing entries.",
    "A black jot book that's great for jotting down quick thoughts and ideas.",
    "A black scratch book for all your rough notes and initial ideas.",
    "This black write-up book is perfect for summarizing your thoughts and ideas.",
    "A black text book for capturing your notes and textual projects.",
    "This black composition book is great for writing essays and creative works.",
    "A black chronicle book for documenting your life's journey.",
    "This black documentation book is perfect for technical writing and project notes.",
    "A black summary book that's great for summarizing key points and ideas.",
    "This black account book helps you keep track of your personal and professional activities.",
    "A black memoir book for writing your personal stories and experiences.",
    "This black report book is ideal for documenting detailed reports and findings.",
    "A black outline book for organizing your thoughts and creating structured plans.",
    "This black brief book is perfect for creating concise summaries and briefs."
];
let commands ;
if (localStorage.commands) {
    commands = JSON.parse(localStorage.commands)
    
}else{
    commands = [];
}
let h = document.querySelectorAll(".card-title");
let p = document.querySelectorAll(".card-text");
let span = document.querySelectorAll("span");
let img = document.querySelectorAll("img");
let card = document.querySelectorAll(".card");
let cart = document.getElementById("cart");
let main = document.querySelector("main");
let close = document.getElementById("close");
let name = document.querySelector(".main");
let btn = document.querySelectorAll(".btn");
function pro(src , title , text , span) {
    let div = document.createElement('div');
    div.className = 'div';
    let img = document.createElement('img');
    img.src = src ;
    let des = document.createElement('div');
    des.className = 'des';
    let h5 = document.createElement('h5');
    h5.textContent = title; 
    let h6 = document.createElement('h6');
    h6.textContent = text; 
    let h4 = document.createElement('h4');
    h4.textContent = span; 

    des.appendChild(h5)
    des.appendChild(h6)
    des.appendChild(h4)
    div.appendChild(img)
    div.appendChild(des)
    main.appendChild(div)
}
let i ;
let num = document.getElementById("num");
for (let i = 0; i < h.length; i++) {
    h[i].innerHTML = titles[i];
    p[i].innerHTML = text[i];
    let x = Math.floor(Math.random()*8) + 2
    span[i].innerText += `$` ;
    btn[i].onclick = () => {
        let pro = {
            img: img[i].src,
            title : titles[i],
            text : text[i],
            prix : span[i].textContent
        }
        
        commands.push(pro);
        localStorage.commands  = JSON.stringify(commands)
        
    }
}

// console.log(commands);
// localStorage.clear();

        num.className = `bi bi-${i}-circle-fill`;
let note ;
let row = document.querySelector(".row") 
cart.onclick = () => {
        if (localStorage.commands != '') {
            name.classList.remove("hideen");
    row.style.visibility = "hidden" ;
    document.body.style.overflow = "hidden";

        }
    main.innerHTML = "";
    let total = 0; 
    let h2 = document.querySelectorAll("h2");
    for (let i = 0; i < commands.length; i++) {
       total += +commands[i].prix.slice(0,-1);
       
    }h2[1].textContent = `Total ${total}$` ;
    note = commands.length;
    num.className = `bi bi-${note}-circle-fill`;

    h2[0].textContent = `Note ${note}` ;
   
    if (commands != []) {
    
        for (let i = 0; i < commands.length; i++) {
     pro(commands[i].img, commands[i].title, commands[i].text,commands[i].prix)   
         
        }
    }else{
        name.style.display = "none"
    }
}

close.onclick =() =>{
    row.style.visibility = "visible" ;
    main.innerHTML = "";
    name.classList.add("hideen");
    document.body.style.overflowY = "scroll"


}
let buyall = document.getElementById("buyall");
let removeall = document.getElementById("remove");
removeall.onclick = () => {
    localStorage.commands = '';
    location.reload();
}
buyall.onclick = function () {
    window.location.href = "https://wa.me/212633549914?text=hello%20i%20am%20see%20your%20web%20site%20i%20wanna%20buy%20a%20note";
}