const form = document.querySelector('#add-todo');
const input = document.querySelector('#toDo');
const todoList = document.querySelector('#todo-list')

//removing items if selecting 'Done' or strikethrough if selecting the list item
todoList.addEventListener("click", function(event) {
    const targetTagToLowerCase = event.target.tagName.toLowerCase();
    if (targetTagToLowerCase === "li") {
      event.target.style.textDecoration = "line-through";
    } else if (targetTagToLowerCase === "button") {
      event.target.parentNode.remove();
    }
  });

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    console.log(input.value);
    const newToDo = document.createElement('li');
    const completedBtn = document.createElement('button');
    completedBtn.innerText = 'Completed!';
    newToDo.innerText = `${input.value} `
    newToDo.appendChild(completedBtn);
    todoList.appendChild(newToDo);
    input.value = '';
})