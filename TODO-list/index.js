// checked the cleck box
function check() {
    let checkmark = event.target; // Use event.target to reference the checkbox clicked
    let taskText = checkmark.nextElementSibling; // Get the next sibling (task text)

    if (checkmark.checked) {
        taskText.style.textDecoration = "line-through";
    } else {
        taskText.style.textDecoration = "none";
    }
}

// delete task

function deletetask() {
    event.target.parentElement.remove();
}

// create a new task

function newtask() {
    let task = document.getElementById("new").value.trim();

    if (task === "") {
        alert("Please enter a task!");
        return;
    }

    let tasklist = document.getElementById("tasklist");
    let newTaskDiv = document.createElement("div");
    newTaskDiv.setAttribute("id", "tasks");

    newTaskDiv.innerHTML = `<input type="checkbox" onclick="check()" id="checkmark">
                            <p id="task_text">${task}</p>
                            <button onclick="deletetask()" id="task_btn">Delete</button>`;

    tasklist.appendChild(newTaskDiv);
    document.getElementById("new").value = "";
}
