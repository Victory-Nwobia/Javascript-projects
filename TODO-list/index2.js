
function check(){
    let checkmark = document.getElementById("checkmark");
    if (checkmark.checked) {
        document.getElementById("task_text").style.textDecoration= "line-through";
    }
    else{
        document.getElementById("task_text").style.textDecoration= "none";
    }
}

function deletetask(button){
    let task= button.parentElement;
    task.parentElement.removeChild(task);
}


function newtask() {
    let task = document.getElementById("new").value.trim();

    if (task === "") {
        alert("Please enter a task!");
        return;
    }

    let tasklist = document.getElementById("tasklist");
    let newTaskDiv = document.createElement("div");
    newTaskDiv.setAttribute ("id","tasks");


    newTaskDiv.innerHTML = `<input type="checkbox" onclick="check()" id="checkmark">
                            <p id="task_text">${task}</p>
                            <button onclick="deletetask()" id="task_btn" >Delete</button>`;

    tasklist.appendChild(newTaskDiv);
    document.getElementById("new").value = "";
}