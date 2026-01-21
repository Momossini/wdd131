let input = document.querySelector('#favchap');
let button = document.querySelector('button');
let list = document.querySelector('#list');

let li = document.createElement('li');

let deleteBtn = document.createElement('button');

deleteBtn.setAttribute('aria-label', 'close');

deleteBtn.setAttribute('id', 'close-button');

li.textContent = input.value;

deleteBtn.textContent = '❌';

li.appendChild(deleteBtn);

list.appendChild(li);