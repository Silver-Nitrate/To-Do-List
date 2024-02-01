document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const clearListBtn = document.getElementById("clearListBtn");
    const taskList = document.getElementById("taskList");

    addTaskBtn.addEventListener("click", addTask);
    clearListBtn.addEventListener("click", clearList);
    taskList.addEventListener("click", toggleTask);

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }
        const li = document.createElement("li");
        li.textContent = taskText;
        taskList.appendChild(li);
        taskInput.value = "";
    }

    function toggleTask(event) {
        const listItem = event.target;
        if (listItem.tagName === "LI") {
            listItem.classList.toggle("completed");
        }
    }

    function clearList() {
        taskList.innerHTML = "";
    }
});
