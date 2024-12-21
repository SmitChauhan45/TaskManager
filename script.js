document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("addTaskBtn").addEventListener("click", function () {
    let taskInput = document.getElementById("taskInput").value;
    if (taskInput.trim() !== "") {
      let taskList = document.getElementById("taskList");
      let newTask = document.createElement("li");
      newTask.classList.add("task");
      newTask.innerHTML = `
                <span class="task-text">${taskInput}</span>
                <div>
                    <button class="markComplete">Mark Complete</button>
                    <button class="edit">Edit</button>
                    <button class="delete">Delete</button>
                </div>
            `;
      taskList.appendChild(newTask);
      document.getElementById("taskInput").value = "";
    } else {
      alert("Please enter a task.");
    }
  });

  document
    .getElementById("taskList")
    .addEventListener("click", function (event) {
      if (event.target && event.target.classList.contains("markComplete")) {
        let taskItem = event.target.closest("li");
        taskItem.classList.toggle("complete");
      }
    });

  document
    .getElementById("taskList")
    .addEventListener("click", function (event) {
      if (event.target && event.target.classList.contains("delete")) {
        const taskItem = event.target.closest("li");
        taskItem.style.opacity = "0";
        setTimeout(function () {
          taskItem.remove();
        }, 300);
      }
    });
  document
    .getElementById("taskList")
    .addEventListener("click", function (event) {
      if (event.target && event.target.classList.contains("edit")) {
        const taskItem = event.target.closest("li");
        const currentText = taskItem.querySelector(".task-text").textContent;
        const newTaskName = prompt("Edit task:", currentText);
        if (newTaskName && newTaskName.trim() !== "") {
          taskItem.querySelector(".task-text").textContent = newTaskName;
        }
      }
    });

  $("#taskFilter").change(function () {
    let filterValue = $(this).val();

    $("#taskList li").each(function () {
      if (filterValue === "all") {
        $(this).show();
      } else if (filterValue === "completed" && $(this).hasClass("complete")) {
        $(this).show();
      } else if (filterValue === "pending" && !$(this).hasClass("complete")) {
        $(this).show();
      } else {
        $(this).hide();
      }
    });
  });
});
