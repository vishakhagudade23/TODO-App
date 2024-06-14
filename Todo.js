//Array of objects

// let todoList = [
//   {
//     item: "buy milk", 
//     dueDate: '10/6/2024'
//   }, 
//   {
//     item: "go to list", 
//     dueDate: '10/6/2024'}
// ];

let todoList = [];
let listStr = localStorage.getItem("todoList");
todoList = listStr ? JSON.parse(listStr) : '';
displayItems();

function addTodo() {
  let inpElement = document.querySelector("#todo-input");
  let dateElement = document.querySelector("#todo-date")
  let todoItem = inpElement.value;
  let todoDate = dateElement.value;
  todoList.push({item: todoItem, dueDate: todoDate});
  inpElement.value = '';
  dateElement.value = '';
  displayItems();
}  

function displayItems() {
  let containerElement = document.querySelector(".todo-container");
  let newHtml = '';
  for (let i = 0; i < todoList.length; i++) {
    let {item, dueDate} = todoList[i];
    newHtml += item && dueDate ? 
    `<span>${item}</span> 
    <span>${dueDate}</span>
    <button class="btn-delete" onclick="todoList.splice(${i}, 1);
    displayItems();">Delete</button>`
    : '';
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }
  containerElement.innerHTML = newHtml;
}
