// Create a "close" button and append it to each list item
const myNodelist: HTMLCollectionOf<Element> =
  document.getElementsByTagName("li")

function addCloseButton(elem: any): void {
  let span: Element = document.createElement("span")
  let txt: Text = document.createTextNode("\u00D7")
  span.className = "close"
  span.appendChild(txt)
  elem.appendChild(span)
  span.addEventListener("click", () => {
    let li: HTMLElement | null = span.parentElement
    if (li) li.style.display = "none"
  })
}

for (let i: number = 0; i < myNodelist.length; i++) {
  addCloseButton(myNodelist[i])
}

// Add a "checked" symbol when clicking on a list item
let list: HTMLUListElement | null = document.querySelector("ul")
if (list) {
  list.addEventListener("click", function (event) {
    let target: HTMLElement = <HTMLElement>event.target
    if (target.tagName === "LI") target.classList.toggle("checked")
  })
}

// Create a new list item when clicking on the "Add" button
function addNewElement(): void {
  let li: HTMLLIElement = document.createElement("li")
  let input: HTMLInputElement = <HTMLInputElement>(
    document.getElementById("myInput")
  )
  if (!input) return

  let inputValue: string = input.value
  let newTodo: Text = document.createTextNode(inputValue)
  li.appendChild(newTodo)
  if (inputValue === "") alert("You must write something!")
  else list && list.appendChild(li)

  input.value = ""

  addCloseButton(li)
}
const addBtn: HTMLElement | null = document.getElementById("addBtn")
addBtn &&
  addBtn.addEventListener("click", () => {
    addNewElement()
  })
