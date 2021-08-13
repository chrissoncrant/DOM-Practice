//Creating/selecting elements:
const body = document.querySelector("body");

const mainDiv = document.createElement("div");

const h1 = document.createElement("h1");

const p1 = document.createElement("p");

const btnCont = document.querySelector(".btn-cont");

const btn1 = document.createElement("button");

const btn2 = document.createElement("button");

const btn3 = document.createElement("button");

const nonDomBtn = document.querySelector("#nonDomBtn");

const notherNonDomBtn = document.querySelector("#notherNonDomBtn");

const newBtnCont = document.querySelector("#new-btn-cont");


//Adding Content:
mainDiv.textContent = "I am the main div.";

h1.textContent = "I am the main header";

p1.textContent = "I am the first paragraph";

btn1.textContent = "Hello World!";

btn2.textContent = "Hello World again!";

btn3.textContent = "Hello World yet again!";


//Styling:
body.style.cssText = "margin: 25px; text-align: center;";

mainDiv.style.cssText = "background-color: grey; border: 1px solid black;";

p1.style.cssText = "color: white; background-color: black;";

newBtnCont.style.margin = "1em";


//Adding to the DOM:
body.appendChild(mainDiv);

mainDiv.appendChild(h1);

mainDiv.appendChild(p1);

mainDiv.appendChild(document.querySelector("#new-btn-cont"));

body.appendChild(btnCont); //adds the first button container after the mainDiv container.

btnCont.appendChild(btn1);

btnCont.appendChild(btn2);

btnCont.appendChild(btn3);


//Button Stuff:
btn1.classList = "btn";
btn2.classList = "btn";
btn3.classList = "btn";



const btnClass = document.querySelectorAll(".btn"); //nodeList stored in this variable.

for (let i = 0; i < btnClass.length; i++) {
    btnClass[i].style.margin = "1em";
    btnClass[i].style.width = "300px";
    btnClass[i].style.whiteSpace = "nowrap";
    btnClass[i].style.cursor = "pointer";
}

nonDomBtn.addEventListener('click', function (e) {
    e.target.style.backgroundColor = "blue"
    e.target.style.color = "white";
});

notherNonDomBtn.addEventListener('click', () => {
    alert("Hello Cruel World!");
    alert("Now go away!");
});

const newBtns = document.querySelectorAll(".btn-class-2");

newBtns.forEach((button) => {
    button.style.cssText = "cursor: pointer; margin: 0.5em; padding: 0.2em 0.4em";
    button.addEventListener('click', () => {
        alert("My elementatl id is: " + button.id);
    });
});














