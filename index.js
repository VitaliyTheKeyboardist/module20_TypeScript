"use strict";
// Create a "close" button and append it to each list item
const myNodelist = document.getElementsByTagName("li");
function addCloseButton(elem) {
    let span = document.createElement("span");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    elem.appendChild(span);
    span.addEventListener("click", () => {
        let li = span.parentElement;
        if (li)
            li.style.display = "none";
    });
}
for (let i = 0; i < myNodelist.length; i++) {
    addCloseButton(myNodelist[i]);
}
// Add a "checked" symbol when clicking on a list item
let list = document.querySelector("ul");
if (list) {
    list.addEventListener("click", function (event) {
        let target = event.target;
        if (target.tagName === "LI")
            target.classList.toggle("checked");
    });
}
// Create a new list item when clicking on the "Add" button
function addNewElement() {
    let li = document.createElement("li");
    let input = (document.getElementById("myInput"));
    if (!input)
        return;
    let inputValue = input.value;
    let newTodo = document.createTextNode(inputValue);
    li.appendChild(newTodo);
    if (inputValue === "")
        alert("You must write something!");
    else
        list && list.appendChild(li);
    input.value = "";
    addCloseButton(li);
}
const addBtn = document.getElementById("addBtn");
addBtn &&
    addBtn.addEventListener("click", () => {
        addNewElement();
    });
