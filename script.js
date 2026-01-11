function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");

  if (taskInput.value === "") {
    alert("Please enter a task");
    return;
  }

  const li = document.createElement("li");
  li.textContent = taskInput.value;

  li.onclick = function () {
    li.style.textDecoration = "line-through";
  };

  taskList.appendChild(li);
  taskInput.value = "";
}