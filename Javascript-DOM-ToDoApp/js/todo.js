// Add New Task
const tasks= document.querySelector('.tasksBlock');
function addNewTask(element) {
    
    // console.log(element);
    // Bir önceki elementi seç
    const previousElement = element.previousElementSibling;
    const previousElementValue = previousElement.value;

    
    const taskView=`
    
    <div class="input-group mb-3">
        <div class="input-group-text">
            <input class="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input" onclick="doneTask(this)">
        </div>
        <input type="text" class="form-control" aria-label="Text input with checkbox" value="${previousElementValue}" disabled>
        <button class="btn btn-outline-danger" type="button" onclick="deleteTask(this)">Delete</button>
    </div>
    `
    tasks.innerHTML += taskView;
}

// Delete Task
function deleteTask(element) {
    
// console.log(element)
const parentElement = element.parentElement;
tasks.removeChild(parentElement);
}

// Done Task

function doneTask(element) {
if(element.checked){
 element.parentElement.nextElementSibling.style.textDecoration = "line-through";
 element.parentElement.nextElementSibling.style.background = "blue";
}else{
    element.parentElement.nextElementSibling.style.textDecoration = "none";
    element.parentElement.nextElementSibling.style.background = "none";
}
}