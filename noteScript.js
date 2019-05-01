const addBtn = document.getElementById('add_btn');
const lists = document.getElementById('ul');
const li = document.getElementById('lists');
const hideBtn = document.getElementById('hide_btn');

//Add Note
function addNote() {
  const textArea = document.getElementById('textArea');
  if (textArea.value != 0) {
    var li = document.createElement('li');
    li.innerHTML =
      '<p class="type-note">' +
      textArea.value +
      '</p><p onclick="edit(this)"><i class="fas fa-pencil-alt edit-btn"></i></p><p onclick="del(this)"><i class="fas fa-trash-alt delete-btn"></i></p>';
    li.className = 'lists';
    lists.appendChild(li);
    textArea.value = '';
  }
}
addBtn.addEventListener('click', addNote);
//Edit Note

function edit(el) {
  let prevEl = el.previousElementSibling;
  prevEl.toggleAttribute('contentEditable');
  prevEl.classList.toggle('editing');
  el.firstElementChild.classList.toggle('editing');
}

//Delete Notes

function del(el) {
  el.parentElement.classList.add('opac');
  setTimeout(function() {
    lists.removeChild(el.parentElement);
  }, 250);
}

//Hide Button
hideBtn.addEventListener('click', function() {
  let hidden = lists.classList.toggle('hide');
  if (hidden) {
    hideBtn.innerHTML = 'Unhide lists';
  } else {
    hideBtn.innerHTML = 'Hide lists';
  }
});
//search Note

const search = document.getElementById('s-icon');
search.addEventListener('click', function() {
  const input = document.getElementById('search-input');
  const noteValue = document.getElementsByClassName('type-note');
  const noteArr = Array.from(noteValue);
  for (i = 0; i < noteArr.length; i++) {
    const capsValueOfNote = noteArr[i].innerText.toUpperCase();
    const capsValueOfInput = input.value.toUpperCase();
    if (capsValueOfNote.indexOf(capsValueOfInput) > -1) {
      noteArr[i].parentElement.style.display = '';
    } else {
      noteArr[i].parentElement.style.display = 'none';
    }
  }
});
