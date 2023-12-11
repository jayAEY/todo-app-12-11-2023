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

let tasks = localStorage.getItem("tasks") || [];

// console.log(tasks);

console.log(addButton);

function addTask(btn) {
  let task = btn.previousElementSibling.value;

  let newTaskHTML = `<li class="task">
                        ${task}
                        <input
                        class="taskcheckbox"
                        type="checkbox"
                        />
                        </li>`;

  if (task != "") {
    todosection.style.display = "block";
    tasks += task;
    localStorage.setItem("tasks", tasks);
    // console.log(list.innerHTML);
    list.innerHTML += newTaskHTML;

    console.log(localStorage.getItem("tasks"));
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
