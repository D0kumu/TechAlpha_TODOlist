let form = document.getElementById("form");
let text = document.getElementById("text");
let msg = document.getElementById("msg");
let dateInput= document.getElementById("dateInput");
let textarea = document.getElementById("textarea")
let task = document.getElementById("task")
let add = document.getElementById("add")

form.addEventListener ("submit" ,(e) =>{
    e.preventDefault()
    formValidation()
})

formValidation =()=>{
    if(text.value ===""){
        console.log("failure")
        msg.innerHTML = "Task cannot be blank"
    } else{
        console.log("success")
        msg.innerHTML =""
        acceptData();
         add.setAttribute("data-bs-dismiss","modal")
         add.click();
    }
}
(()=>{
    add.setAttribute("data-bs-dismiss","") 
})()

let data =[];

let acceptData=()=>{
    data.push({
        text: text.value,
        date: dateInput.value,
        description : textarea.value,

    });
    localStorage.setItem("data",JSON.stringify(data))

  console.log(data)
    createTask();
};

let createTask= ()=>{
    task.innerHTML +=`<div>
    <span class="fw-bold">${data.text}</span>
    <span class="small text-secondary">${data.date}</span>
    <p>${data.description}</p>
<span class="options">
    <i onclick="editTask(this)"   data-bs-toggle="modal" data-bs-target="#form" class="fa fa-edit"></i>
    <i  onclick ="deletetTask(this)"class="fa fa-trash-alt"></i>
</span>
</div>`;
resetForm()
}

let deletetTask= (e)=>{
    e.parentElement.parentElement.remove();
    };

    let editTask=(e)=>{
    let selectedTask = e.parentElement.parentElement;


    text.value =selectedTask.children[0].innerHTML;
    dateInput.value =selectedTask.children[1].innerHTML;
    textarea.value =selectedTask.children[2].innerHTML;

    selectedTask.remove();
    };



let resetForm =()=>{
    text.value ="";
    dateInput.value ="";
    textarea.value ="";
}
