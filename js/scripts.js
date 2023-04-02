// jQuery

//1. Adding a new item to the list:
function newItem() {
    let li = $('<li></li>');
    let inputValue = $('#input').val();

    if (inputValue === '') {
        alert("You must write something!");
    } else {
        li.append(inputValue);
        $('#list').append(li);
        //5. Clear and re-focus input
        $('#input').val('').focus();
    }
    
    //2. Crossing an item out:
    function crossOut() {
        li.toggleClass("strike");
    }

    li.on("dblclick", function crossOut() {
        li.toggleClass("strike");
    });

    //3. Adding a delete button
    let crossOutButton = $('<crossOutButton></crossOutButton>');
    crossOutButton.append(document.createTextNode('X'));
    li.append(crossOutButton);

    crossOutButton.on("click", deleteListItem);
    function deleteListItem(){
    	li.addClass("delete")
    }
   
    //4. Sorting the list
    $('#list').sortable();
}
