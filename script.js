//features:
//add
//search
//edit
//delete

let taskInput = document.querySelector("#task-input");
let searchInput = document.querySelector("search-input");

let addButton = document.querySelector("#add");
let searchButton = document.querySelector("#search");
let deleteButton = document.querySelector("#delete");

let todosection = document.querySelector("#todo-section");
let list = document.querySelector("#list");

let tasks = [];

function renderTasks() {
  if (localStorage.getItem("tasks")) {
    tasks = localStorage.getItem("tasks").split(",");
  }
  if (tasks.length > 0) {
    todosection.style.display = "block";
  }
  tasksHTML();
}

window.onload = renderTasks();

function tasksHTML() {
  let newTaskHTML = "";
  tasks.forEach((task) => {
    let addHTML = `<li class="task">
                     ${task}
                    <input
                    class="taskcheckbox"
                    type="checkbox"
                    />
                    </li>`;
    newTaskHTML += addHTML;
  });
  list.innerHTML = newTaskHTML;
}

function addTask(btn) {
  let task = btn.previousElementSibling.value;
  if (task != "" && task.indexOf(",") === -1) {
    todosection.style.display = "block";
    tasks.push(task);
    localStorage.setItem("tasks", tasks);
  }
  renderTasks();
}

taskInput.addEventListener("invalid", () => {
  taskInput.setCustomValidity("Please fill out this field (No commas)");
});
addButton.addEventListener("click", (e) => {
  addTask(e.target);
});

window.onload = renderTasks();
