document.addEventListener("DOMContentLoaded", () => {
let createTask = document.querySelector("#create-task-form")
let taskUL = document.querySelector("#tasks")

createTask.addEventListener("submit", function(evt) {
  evt.preventDefault()
  // prevents page from reloading
  taskDescription = document.querySelector("#new-task-description") 
  // grabbing the tag for the input from user
  liTask = document.createElement("li")
  // creating li tag
  liTask.innerText = taskDescription.value
  liTask.addEventListener("click", function(evt){
    evt.target.remove()
  })
  
  // changing text of li take to input value from user
  taskUL.append(liTask)

  // attaching it to the DOM
  evt.target.reset()

  

})





});
