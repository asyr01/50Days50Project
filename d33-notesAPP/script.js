const addBtn = document.getElementById('add');

addBtn.addEventListener('click', () => addNewNote());

function addNewNote(text) {
  // Creates a new node
  const note = document.createElement('div');
  note.classList.add('note');
  note.innerHTML = `
      <div class="tools">
        <button class="edit"><i class="fas fa-edit"></i></button>
        <button class="trash"><i class="fas fa-trash-alt"></i></button>
      </div>
      <div class="main ${text ? '' : 'hidden'}"></div>
      <textarea class="${text ? 'hidden' : ''}"></textarea>
  `;
  const editBtn = note.querySelector('.edit');
  const deleteBtn = note.querySelector('.trash');
  const main = note.querySelector('.main');
  const textArea = note.querySelector('textarea');

  deleteBtn.addEventListener('click', () => {
    note.remove();
  });

  document.body.appendChild(note);
}
