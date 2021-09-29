function toggleItem(item) {
    console.log(item);
    if (item.checked){
        // item.parentNode.style.textDecoration = "line-through";
        item.parentNode.classList.add ('complete');
    }
    else{
       // item.parentNode.style.textDecoration = "";
       item.parentNode.classList.remove ('complete');
    }
   
}


function deleteListItem(item){
    const listItem = item.parentNode;
    listItem.parentNode.removeChild(listItem);
    // item is the delete button, listItem is the li, listItem.parentNode is ul
}


function addListItem(){
    const list = document.getElementById("todo-list");
    const itemInput = document.getElementById("new-list-item");

    const newItem = document.createElement('li');
    const checkbox = document.createElement("input");
    checkbox.setAttribute('type', 'checkbox')
    checkbox.setAttribute('onclick', "toggleItem(this)");

    const itemLabel = document.createElement("label");

    //grab text from input box 
    itemLabel.appendChild (document.createTextNode(itemInput.value));
    
    const deleteButton = doucment.createElement("button");
    deleteButton.classList.add ('delete');
    deleteButton.appendChild(document.createTextNode('x'));
    deleteButton.setAttribute("onclick", "deleteListItem(this)");

    newItem.appendChild (checkbox);
    newItem.appendChild (itemLabel);
    newItem.appendChild (deleteButton);

    list.appendChild(newItem);

}