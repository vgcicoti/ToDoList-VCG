function addNewTask() {
    var taskInput = document.getElementById("taskInput")
    var ul = document.getElementById("ul")
    var check = document.getElementById("check")
    var newItem = document.getElementsByTagName("li")

    var li = document.createElement("li")
    li.appendChild(document.createTextNode(taskInput.value))
    ul.appendChild(li)
    taskInput.value = ""

    var dlt = document.createElement("button")
    dlt.appendChild(document.createTextNode("X"))
    li.appendChild(dlt)
    dlt.addEventListener("click", deleteListItem)

    function deleteListItem(){
        li.classList.add("delete")
    }
}



function minimalLenght() {
    return taskInput.value.lenght
}

check.addEventListener("click", checkButton)

function checkButton(){
    if (minimalLenght() > 0)
    addNewTask()
}
