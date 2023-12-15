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
let taskList = document.querySelector("#taskList");
let searchList = document.querySelector("#searchList");

let tasks = [];
let newTaskHTML = "";

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
  newTaskHTML = "";
  tasks.forEach((task) => {
    let addHTML = `<li class="task" id="${task}">
                     ${task}
                    <input
                    class="taskcheckbox"
                    type="checkbox"
                    />
                    </li>`;
    newTaskHTML += addHTML;
  });
  taskList.innerHTML = newTaskHTML;
}

function addTask(btn) {
  let task = btn.previousElementSibling.value.trim();
  todosection.style.display = "block";
  tasks.push(task);
  localStorage.setItem("tasks", tasks);
  taskList.style.display = "flex";
  searchList.style.display = "none";
  renderTasks();
}

function searchTask(btn) {
  let search = btn.previousElementSibling.value.trim();
  if (search === "") {
    taskList.style.display = "flex";
    searchList.style.display = "none";
  } else {
    let searchHTML = "";
    taskList.childNodes.forEach((task) => {
      if (task.innerText.includes(search)) {
        searchHTML += task.outerHTML;
      }
    });
    // taskList.innerHTML = searchHTML;'
    taskList.style.display = "none";
    searchList.style.display = "flex";
    searchList.innerHTML = searchHTML;
  }
}

addButton.addEventListener("click", (e) => {
  if (taskInput.value.indexOf(",") !== -1 || taskInput.value.trim() === "") {
    taskInput.setCustomValidity("Please fill out this field (No commas)");
  } else {
    addTask(e.target);
  }
});
searchButton.addEventListener("click", (e) => searchTask(e.target));

window.onload = renderTasks();
