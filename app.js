const notescontainer = document.querySelector(".note-container");
const btn = document.querySelector(".btn");
let notes =document.querySelector(".input-box");

btn.addEventListener("click",() =>{
    let inputbox = document.createElement("p");
        let img = document.createElement("img");
        inputbox.className = "input-box";
        inputbox.setAttribute("contenteditable", true);
        img.src ="delete.png";
        notescontainer.appendChild(inputbox).appendChild(img);
        
}


