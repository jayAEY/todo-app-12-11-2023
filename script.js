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

if (localStorage.getItem("tasks")) {
  tasks = localStorage.getItem("tasks").split(",");
}

function renderTasks() {
  tasks.forEach((task) => {
    let newTaskHTML = `<li class="task">
                     ${task}
                    <input
                    class="taskcheckbox"
                    type="checkbox"
                    />
                    </li>`;
    list.innerHTML += newTaskHTML;
    console.log(tasks);
  });
}

renderTasks();

console.log(tasks);

function addTask(btn) {
  let task = btn.previousElementSibling.value;

  if (task != "") {
    todosection.style.display = "block";
    tasks.push(task);
    localStorage.setItem("tasks", tasks);

    // console.log(localStorage.getItem("tasks"));
    // list.innerHTML += newTaskHTML;
  }
  //   if (task == "") {
  //     btn.previousElementSibling
  //   }
  //   console.log(task);
}

addButton.addEventListener("click", (e) => addTask(e.target));

// localStorage.getItem("tasks");

// #input-section input {

// .task
