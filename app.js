var list = document.getElementById("list");
function addTodo(){
    var todo_item = document.getElementById("todo-item")


    // create li tag with text node


    var li = document.createElement('li')
    var liText = document.createTextNode(todo_item.value)
         li.appendChild(liText)
      
     //  create delete btn
    var delBtn = document.createElement("button")
    var delText = document.createTextNode("delete")
    delBtn.setAttribute("class","btn")
    delBtn.setAttribute("onclick","deleteItem(this)")
    delBtn.appendChild(delText)

    

    

    li.appendChild(delBtn)
    list.appendChild(li)
    todo_item.value = ""
    
    
}


function deleteItem(e){
    e.parentNode.remove()
}