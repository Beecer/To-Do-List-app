 let list = $('#list');
//Add new item to list
function newItem() {
  let li = $('<li></li>');
  let inputValue = $('#input').val();
  li.append(inputValue);

  if(inputValue === '') {
    alert('Must list something');
  } else{
    list.append(li);
  }

//Crossed item off with a click
function strikeThough() {
    li.toggleClass('strike');
  }

  li.on("click", strikeThough);

//Add delete by clicking on X
let crossOutButton = $('<crossOutButton></crossOutButton');
  crossOutButton.append('X');
  li.append(crossOutButton);

  crossOutButton.on('click', deleteListItem);

function deleteListItem() {
  li.addClass('delete');
}

// sort list by dragging items up and down
list.sortable();
}
