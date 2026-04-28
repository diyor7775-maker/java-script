var input = document.getElementById("task");
let list = document.getElementById("list");

let listOfTasks = [];
let counter = 1;

function addTask() {
  var value = input.value;
  if (value == "") return;
  listOfTasks.push({
    id: counter,
    task: value,
  });
  counter++;
  input.value = "";
  showOutput();
}

function showOutput() {
  list.innerHTML = "";
  list.innerHTML += listOfTasks.map(
    (value) =>
      `<li>${value.task} <button onclick="delateTask(${value.id})" class="delate"><i class="fa-solid fa-trash"></i></button> </li>`,
  ).join("");
}

function delateTask(id) {
  let item = listOfTasks.findIndex((value) => value.id == id);
  listOfTasks.splice(item, 1);
  showOutput();
}