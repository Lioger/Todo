const newTaskTextForm = document.newTaskTextForm;
const taskList = document.querySelector('#taskList');

newTaskTextForm.addEventListener('submit', addNewtask);


function addNewtask(e) {
    e.preventDefault();
    const template = generateTemplate(e.target.addTaskInput.value);
    taskList.innerHTML += template;
    e.target.addTaskInput.value = '';
}


function generateTemplate(value){
   const template = `<li class="task task--created" name="newTask">
        <div class="checkbox"></div>
            <label for="toggle" class="task__text-container">${value}</label>
        <div id="xMark" class="cross-container">
            <img class="image cross-image" src="./_images/cross.png" alt="close cross">
        </div>
    </li>`;
    return template;
}

function removeTask(){
    taskList.removeChild(`newTask${tasksCount}`);
}

// function showFooter() {
//     if 
// }