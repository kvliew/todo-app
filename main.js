var input = document.getElementById("input-field");
var inputContent = input.value;
var list = document.getElementById("container");

input.addEventListener('keypress', function(event) {
  if(event.key === "Enter" && input.value.replace(/\s+/g, '').length != 0) {
    var item = document.createElement('div');
    var text = document.createElement('p');
    var checkbox = document.createElement('input');
    var remove = document.createElement('p');

    text.textContent = input.value;
    checkbox.type = "checkbox";
    remove.classList.add('remove');
    remove.textContent = 'X';
    
    item.appendChild(checkbox);
    item.appendChild(text);
    item.appendChild(remove);
    item.classList.add('item');
    input.value = "";
    list.append(item);
    // list.insertBefore(item, list.firstChild);

    remove.addEventListener('click', function() {
      item.remove();
    });
    checkbox.addEventListener('click', function() {
      if(this.checked == true) {
        text.style.textDecoration = "line-through";
      } else {
        text.style.textDecoration = "none";
      }
    });
  }
});

function clearList() {
  while(list.lastElementChild) {
    list.removeChild(list.lastElementChild);
  }
}