function addTask() {
    const taskInput = document.getElementById('task-input')
    const newTask = taskInput.value.trim()

    if (newTask) {
        const taskList = document.getElementById('task-list')
        const li = document.createElement('li')
        li.innerHTML = newTask
        taskInput.value = ''

        saveTaskLocalStorage(newTask)
    }
}

async function saveTaskLocalStorage(newTask) {
    try {
        let tasks = JSON.parse(localStorage.getItem('meus-interesses')) || []

        tasks.push({ task: newTask, completed: false })
        await localStorage.setItem('meus-interesses', JSON.stringify(tasks))

        getTaskList()
    } catch (error) {
        console.error('Erro ao salvar no local storage:', error)
    }
}

async function getTaskList() {
    const taskListElement = document.getElementById('task-list')
    taskListElement.innerHTML = ''

    try {
        const tasks = JSON.parse(localStorage.getItem('meus-interesses')) || []

        tasks.forEach((taskObj, index) => {
            const taskItemElement = document.createElement('li')
            if (taskObj.completed) {
                taskItemElement.classList.add('completed')
            }

            const taskTextElement = document.createElement('span')
            taskTextElement.textContent = taskObj.task
            taskTextElement.addEventListener('click', () => {
                taskObj.completed = !taskObj.completed
                tasks[index] = taskObj
                localStorage.setItem('meus-interesses', JSON.stringify(tasks))
                getTaskList()
            })

            const deleteButton = document.createElement('button')
            deleteButton.textContent = 'Excluir'
            deleteButton.addEventListener('click', () => {
                tasks.splice(index, 1)
                localStorage.setItem('meus-interesses', JSON.stringify(tasks))
                getTaskList()
            })

            taskItemElement.appendChild(taskTextElement)
            taskItemElement.appendChild(deleteButton)
            taskListElement.appendChild(taskItemElement)
        });

        countTasks()
        totalTasks()
    } catch (error) {
        console.error('Erro ao obter tarefas do local storage:', error)
    }
}

getTaskList()

const taskInput = document.getElementById('task-input')
taskInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTask()
    }
});

function clearTask() {
    localStorage.removeItem('meus-interesses')
    const taskListElement = document.getElementById('task-list')
    taskListElement.innerHTML = ''
    countTasks()
    totalTasks()
}

function countTasks() {
    const total = document.querySelectorAll('#task-list li').length
    return total
}

function countCompletedTasks() {
    const completed = document.querySelectorAll('#task-list li.completed').length
    return completed
}

function totalTasks() {
    const totalElement = document.getElementById('total')
    const completedElement = document.getElementById('completed')
    const totalCount = countTasks()
    const completedCount = countCompletedTasks()

    totalElement.textContent = totalCount
    completedElement.textContent = completedCount
}

totalTasks()

async function getNews() {
    const response = await fetch('https://servicodados.ibge.gov.br/api/v3/noticias/?tipo=release')
    const data = await response.json()
    const newsTitle = data.items[0].titulo

    const newsTitleElement = document.querySelector('.title-news-today')
    newsTitleElement.textContent = newsTitle
}

getNews()

setInterval(getTaskList, 1000)
