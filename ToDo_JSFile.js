//function to show the task adding form
function showForm(){
    document.getElementById("form").style.display="flex";
}
//function to hide form
function hideForm(){
    document.getElementById("form").style.display="none";
}
//function to enable and disable dark mode
function toggleDarkMode() {
    let checkbox = document.getElementById('darkMode');
    let icon = document.getElementById('icon');
    let toDo = document.getElementById('toDo');
    let dots = document.getElementById('dots');
    if(checkbox.checked){
        icon.src="day-mode.png"; //day mode
        toDo.style.backgroundColor="black"; //background color of the container
        toDo.style.borderColor = "white"; //color of the border of the container
        dots.style.color = "white";//color of the circles
                 //changin menu border colors
        document.getElementById("addBtn").style.borderColor = 'white'; 
        document.getElementById("deleteBtn").style.borderColor = 'white';
        document.getElementById("darkToggle").style.borderColor = 'white';
        document.getElementById('heading').style.color = "yellow";
        document.getElementById('taskContainer').style.color = "lightgrey"; 
                //changin btn colors
        document.getElementById("addBtn").style.color = 'yellow'; 
        document.getElementById("deleteBtn").style.color = 'yellow';

    }
    else{
        icon.src="night-mode.png"; //night mode
        toDo.style.backgroundColor="white"; //background color of the container
        toDo.style.borderColor = "black"; //color of the border of the container
        dots.style.color = "black"; //color of the circles
                //changin menu border colors
        document.getElementById("addBtn").style.borderColor = 'black'; 
        document.getElementById("deleteBtn").style.borderColor = 'black';
        document.getElementById("darkToggle").style.borderColor = 'black';
        document.getElementById('heading').style.color = "black";
        document.getElementById('taskContainer').style.color = "grey"; 
        
    }
}

//function to get and display the form inputs
    //getting input values from form
function submitForm(){
    var getDate = document.getElementById('date').value;
    var getTime = document.getElementById('time').value;
    var getTask = document.getElementById('taskName').value;
    var taskList = document.getElementById('taskContainer');
    var tasks =  getDate+" "+getTime+" --> "+getTask;
    if (tasks) {
        //creates new list element with task inside it when the user adds a new task as per choice
        const li = document.createElement('li');
        li.textContent = tasks;
        //adding that newly created task to the task list
        taskList.appendChild(li);
        const hr = document.createElement('hr');
        taskList.appendChild(hr);
      }
}

//function to delete tasks
function deleteTask(){
    document.getElementById('taskContainer').innerHTML = " ";
}