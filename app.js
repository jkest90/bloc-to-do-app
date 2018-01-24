
// 1. Create a submit event on the form that calls createNewToDo()
// 2. createNewToDo() pushes the form input value into the toDos array as an object.
// 3. It then calls renderTheUI(), which loops through each item in the toDos array and displays it on the page.

function onReady() {
    let toDos = [];

    // -- Select DOM form elements
    // form
    const addToDoForm = document.getElementById('addToDoForm');
    // input
    const newToDoText = document.getElementById('newToDoText');
    // ul
    const toDoList = document.getElementById('toDoList');

    // --  UPDATE TODOS ARRAY
    function createNewToDo() {
        // if no input value, return
        if (!newToDoText.value) { return ; }

        // push toDo into array with a title property of the input value
        toDos.push({
            title: newToDoText.value,
            complete: false
        });

        // empty input value after submit
        newToDoText.value = '';

        // add new to-dos to UI
        renderTheUI();
        console.log('Item added to list', toDos);
    }

    // -- RENDER UI BASED ON CURRENT STATE OF TODOS ARRAY
    function renderTheUI() {

        // set content of to-do ul to an empty string
        toDoList.textContent = '';

        // loop through toDos array an create a new list item each submit
        toDos.forEach(function(toDo) {
            // create new list item for to-do
            const newLi = document.createElement('li');

            // create checkbox input
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';

            // title.textContent = toDo.title;
            newLi.textContent = toDo.title;

            // add new list item to UL
            toDoList.appendChild(newLi);

            // add checkbox input to new list item
            newLi.appendChild(checkbox);
        });
    }

    // -- ADD SUBMIT EVENT ON FORM ELEMENT
    addToDoForm.addEventListener('submit', event => {
        event.preventDefault();

        // create new to-do object
        createNewToDo();
    });
}

window.onLoad = function() {
    onReady();
};
window.onLoad();


// -- PART 1: COMPLETED -- \\

/*
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
<<<<<<< HEAD
            // alternative method -> newLi.remove();
             newLi.parentNode.removeChild(newLi);
            console.log('item deleted');
=======
            // alternative: newLi.remove();
            newLi.parentNode.removeChild(newLi);
            console.log('Item Deleted');
>>>>>>> mod2-checkpoint-todo2
        });
        // add delete button to each new item child.
        newLi.appendChild(deleteTask);

    });


}
*/
