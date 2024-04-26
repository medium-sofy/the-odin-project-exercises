const list = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");

function addListItem() {
const inputValue = input.value
input.value = ''
const listItem = document.createElement('li')
const span = document.createElement('span')
const deleteBtn = document.createElement('button')

listItem.appendChild(span)
listItem.appendChild(deleteBtn)
span.textContent=inputValue
deleteBtn.textContent='Delete'

list.appendChild(listItem)
deleteBtn.addEventListener('click',()=>{
  list.removeChild(listItem)
})
input.focus()
}

button.addEventListener('click',addListItem)
