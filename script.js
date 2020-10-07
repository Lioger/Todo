const newTaskTextForm = document.newTaskTextForm;
const taskList = document.querySelector('#taskList');
let tasksCount = 0;

newTaskTextForm.addEventListener('submit', addNewTask);

function addNewTask(event){
    event.preventDefault();
    tasksCountIncrease();
    const newTaskText = newTaskTextForm.newTaskText;
    taskList.innerHTML += `<li class="task task--created" name="newTask${tasksCount}">
        <div class="checkbox"></div>
            <label for="toggle" class="task__text-container">${newTaskText.value}</label>
        <div id="xMark" class="cross-container">
            <img class="image cross-image" src="./_images/cross.png" alt="close cross">
        </div>
    </li>`
    newTaskText.value = '';
    const xMark = document.getElementById('xMark');
    xMark.addEventListener('click', removeTask);
    console.log(tasksCount);
}

function removeTask(){
    taskList.removeChild(`newTask${tasksCount}`);
}

function tasksCountIncrease() {
    tasksCount += 1;
}

function tasksCountReduce() {
    tasksCount -= 1;
}

// function showFooter() {
//     if 
// }