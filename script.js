const newTaskTextForm = document.newTaskTextForm;
const searchForm = document.querySelector('.search');
const taskList = document.querySelector('#taskList');
const footer = document.querySelector('#footer');
const completeAllArrow = document.querySelector('.arrow');
const counterWrapper = document.querySelector('.task-counter');

searchForm.addEventListener('keyup', search);
newTaskTextForm.addEventListener('submit', addNewtask);
taskList.addEventListener('click', taskAbilities);
completeAllArrow.addEventListener('click', completeAllTasks);

function search(e) {
    e.preventDefault();
    console.log(e.target.value);
}

function generateTemplate(value){
    const template = `<li class="task">
        <div class="checkbox"></div>
        <p class="task-text">${value}</p>
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
    e.target.classList.toggle('completed');
}

function completeAllTasks(e) {
    e.target.classList.toggle('completed');
    for (const item of taskList.children) {
        item.classList.toggle('completed');
    }
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