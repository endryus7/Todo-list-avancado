// Seleção de elementos
const todoForm = document.querySelector("#todo-form")
const todoInput = document.querySelector("#todo-input")
const todoList = document.querySelector("#todo-list")
const editForm = document.querySelector("#edit-form")
const editInput = document.querySelector("#edit-input")
const cancelEditBtn = document.querySelector("#cancel-edit-btn")


// Funções

/* Adicionar tarefa */
const saveTodo = (text) => {
    const todo = document.createElement("div")
    todo.classList.add("todo")

    const todoTitle = document.createElement("h3")
    todoTitle.innerText = text
    todo.appendChild(todoTitle)

    const doneBtn = document.createElement("button")
    doneBtn.classList.add("edit-todo")
    doneBtn.innerHTML = '<i class="fa fa-check"></i>'
    todo.appendChild(doneBtn)
    
    const editBtn = document.createElement("button")
    editBtn.classList.add("edit-todo")
    editBtn.innerHTML = '<i class="fa fa-pen"></i>'
    todo.appendChild(editBtn)

    const deleteBtn = document.createElement("button")
    deleteBtn.classList.add("remove-todo")
    deleteBtn.innerHTML = '<i class="fa fa-xmark"></i>'
    todo.appendChild(deleteBtn)

    todoList.appendChild(todo)

    // limpar o input
    todoInput.value = ""
    todoInput.focus()
}

// Eventos
todoForm.addEventListener("submit", (e) => {
    e.preventDefault()

    const inputValue = todoInput.value

    if(inputValue) {
        // save todo
        saveTodo(inputValue)
    }
})

// icones da tarefa
document.addEventListener("click", (e) => {
    const targetEl = e.target
    const parantEl = targetEl.closest("div")

    // marca como feita
    if(targetEl.classList.contains("finish-todo")){
        parantEl.classList.toggle("done")
    }

    // edita a tarefa
    if(targetEl.classList.contains("edit-todo")) {
        console.log("editou")
    }

    // remove a tarefa
    if(targetEl.classList.contains("remove-todo")) {
        parantEl.remove()
    }
})