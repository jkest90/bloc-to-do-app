// 1.

function onReady() {
    const addToDoForm = document.getElementById('addToDoForm');
    const newToDoText = document.getElementById('newToDoText');
    const toDoList = document.getElementById('toDoList');

    addToDoForm.addEventListener('submit', event => {

        console.log('list item submitted');

        // --- ADD ITEM

        // prevent default submit event of page reload/redirect
        event.preventDefault();
        // get input text
        let title = newToDoText.value;
        // create a new li
        let newLi = document.createElement('li');
        // create a new input
        let checkbox = document.createElement('input');
        // set the input's type to checkbox
        checkbox.type = 'checkbox';
        // set the content of newLi to input value
        newLi.textContent = title;
        // attach the checkbox to newLi
        newLi.appendChild(checkbox);
        // attach the li to the ul
        toDoList.appendChild(newLi);
        // empty the input
        newToDoText.value = '';

        // --- DELETE ITEM

        // create delete button element
        let deleteTask = document.createElement('button');
        // add 'delete' text to button
        deleteTask.textContent = 'Delete';
        // add attribute of id='removeButon'
        deleteTask.setAttribute('id', 'removeButton');
        // add click event to deleteTask button. find parentNode of newLi, then remove newLi child every time deleteTask button is clicked. 
        deleteTask.addEventListener('click', event => {
            newLi.parentNode.removeChild(newLi);
            console.log('Item Deleted');
        });
        // add delete button to each new item child.
        newLi.appendChild(deleteTask);

    });


}

window.onLoad = function() {
    alert('The window has loaded!');
    onReady();
};

window.onLoad();
