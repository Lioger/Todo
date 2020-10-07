const newTaskTextForm = document.newTaskTextForm;
const taskList = document.querySelector('#taskList');
const footer = document.querySelector('#footer');
const completeAllArrow = document.querySelector('.arrow-container');
const counterWrapper = document.querySelector('.task-counter');


newTaskTextForm.addEventListener('submit', addNewtask);
taskList.addEventListener('click', taskAbilities);


function generateTemplate(value){
    const template = `<li class="task">
        <div class="checkbox"></div>
        <p name="taskText" class="text-container">${value}</p>
        <div class="cross"></div>
    </li>`;
    return template;
}

function addNewtask(e) {
    e.preventDefault();
    if (e.target.addTaskInput.value !== '') {
        const template = generateTemplate(e.target.addTaskInput.value);
        taskList.innerHTML += template;
        e.target.addTaskInput.value = '';
        updateCounter();
        showContent();
    }
}

function taskAbilities(e) {
    if (e.target.classList.contains('cross')) {
        removeTask(e);
    } else if (e.target.classList.contains('task')) {
        completeTask(e);
    }
}

function removeTask(e) { 
    e.target.parentNode.remove();
    updateCounter();
    showContent();
}

function completeTask(e) {
    e.target.children[0].classList.toggle('checked-checkbox');
    e.target.children[1].classList.toggle('completed-task');
}

function showContent() {
    if (taskList.children.length > 0) {
        completeAllArrow.classList.remove('hidden');
        footer.classList.remove('hidden');
    } else {
        completeAllArrow.classList.add('hidden');
        footer.classList.add('hidden');
    }
}

function updateCounter() {
    let counter = taskList.children.length;
    counterWrapper.textContent = `${counter} item${(counter > 1)?'s':''} left`;
}