const newTaskForm = document.querySelector('#newTaskForm');
const searchForm = document.querySelector('.search');
const taskList = document.querySelector('#taskList');
const footer = document.querySelector('#footer');
const completeAllArrow = document.querySelector('.arrow');
const counterWrapper = document.querySelector('.task-counter');
const clearCompletedButton = document.querySelector('.clear-completed');


searchForm.addEventListener('keyup', search);
newTaskForm.addEventListener('submit', addNewtask);
taskList.addEventListener('click', taskAbilities);
completeAllArrow.addEventListener('click', completeAllTasks);
footer.addEventListener('click', appendFilters);
clearCompletedButton.addEventListener('click', clearCompleted);

function search(e) {
    e.preventDefault();
    for (const item of taskList.children) {
        const textOfTask = item.textContent.toLowerCase();
        const searchRequestText = e.target.value.toLowerCase();
        if (textOfTask.includes(searchRequestText) === false) {
            item.classList.add('hidden');
        }
        else {
            item.classList.remove('hidden');
        }
    }
}

function generateTemplate(value){
    const template = `<li class="task">
        <div class="checkbox"></div>
        <p class="task-text">${value}</p>
        <div class="cross"></div>
    </li>`;
    return template;
}

function taskAbilities(e) {
    if (e.target.classList.contains('cross')) {
        removeTask(e);
    } else if (e.target.classList.contains('task')) {
        (!e.target.classList.contains('completed')) ? completeTask(e) : uncompleteTask(e);
    }
}

function addNewtask(e) {
    e.preventDefault();
    if (e.target.newTaskInput.value !== '') {
        const template = generateTemplate(e.target.newTaskInput.value);
        taskList.innerHTML += template;
        e.target.newTaskInput.value = '';
        showContent();
        const completedCount = getCompletedCount();
        updateCounter(completedCount);
    }
}

function removeTask(e) { 
    e.target.parentNode.remove();
    showContent();
    const completedCount = getCompletedCount();
    updateCounter(completedCount);
}

function completeTask(e) {
    e.target.classList.add('completed');
    const completedCount = getCompletedCount();
    updateCounter(completedCount);
}

function uncompleteTask(e) {
    e.target.classList.remove('completed');
    const completedCount = getCompletedCount();
    updateCounter(completedCount);
}

function completeAllTasks(e) {
    e.target.classList.toggle('completed');
    for (const item of taskList.children) {
        item.classList.toggle('completed');
    }
    const completedCount = getCompletedCount();
    updateCounter(completedCount);
}

function getCompletedCount() {
    let completedCounter = 0;
    for (const item of taskList.children) {
        if (item.classList.contains('completed')) {
            completedCounter += 1;
        }
    }
    if (completedCounter === 0) {
        clearCompletedButton.classList.add('hidden');
    } else {
        clearCompletedButton.classList.remove('hidden');
    }
    return completedCounter;
}

function clearCompleted() {
    const filteredTaskArr = [...taskList.children].filter(item => item.classList.contains('completed'));
    for (item of filteredTaskArr) {
        item.remove();
    }
    getCompletedCount();
}

function appendFilters(e) {
    e.target.classList.toggle('choosen');
    if (e.target.classList.contains('all-filter')) {
        showAllFilter(e);
    } else if (e.target.classList.contains('active-filter')) {
        showActiveFilter(e);
    } else if (e.target.classList.contains('completed-filter')) {
        showCompletedFilter(e);
    }
}

function showAllFilter(e) {
    taskList.children.classList.remove('hidden');
}

function showActiveFilter(e) {
    const filteredTaskArr = [...taskList.children].filter(item => item.classList.contains('completed'));
    for (item of filteredTaskArr) {
        item.classList.add('hidden');
    }
}

function showCompletedFilter(e) {
    const filteredTaskArr = [...taskList.children].filter(item => !item.classList.contains('completed'));
    for (item of filteredTaskArr) {
        item.classList.add('hidden');
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

function updateCounter(completedCount) {
    let counter = taskList.children.length - completedCount;
    counterWrapper.textContent = `${counter} item${(counter !== 1)?'s':''} left`;
}