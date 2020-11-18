
const main = document.querySelector("#main-content")
console.log(main)

//grabs form to be able to input
const taskForm = document.querySelector("#create-task-form")
const taskList = document.querySelector("#tasks")

//listens to when the form is submitted 
taskForm.addEventListener("submit", function(e){
  e.preventDefault()
//now it can be handled with JS and will get the form every time

//grabs what user typed in 
const newTask = document.querySelector("#new-task-description").value

// const taskItem = document.createElement("li")
// taskItem.innerText = newTask
// // debugger; works like pry
// taskList.appendChild(taskItem)

taskList.innerHTML += `<li> ${newTask} </li>`

//resets the input bar
// taskForm.requestFullscreen() accidental full screen
taskForm.reset()
})