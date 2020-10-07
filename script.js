const newTaskTextForm = document.newTaskTextForm;
const taskList = document.querySelector('#taskList');
const footer = document.querySelector('#footer');


newTaskTextForm.addEventListener('submit', addNewtask);
taskList.addEventListener('click', removeTask);


function generateTemplate(value){
    const template = `<li class="task task--created" id="newTask">
        <div class="checkbox"></div>
            <label for="toggle" class="task__text-container">${value}</label>
        <div class="cross-container">
            <img name="xMark" class="image cross-image" src="./_images/cross.png" alt="close cross">
        </div>
    </li>`;
    return template;
}

function addNewtask(e) {
    e.preventDefault();
    const template = generateTemplate(e.target.addTaskInput.value);
    taskList.innerHTML += template;
    e.target.addTaskInput.value = '';
    showFooter();
}

function removeTask(e){
    if (e.target.classList.contains('cross-image')) {
        e.target.parentNode.parentNode.remove();
        showFooter();
    }
}

function showFooter() {
    let counter = taskList.children.length;
    if (counter > 0) {
        footer.classList.remove('hidden');
    } else {
        footer.classList.add('hidden');
    }
    const counterWrapper = document.querySelector('.task-counter');
    counterWrapper.textContent = `${counter} item${(counter > 1)?'s':''} left`;
}