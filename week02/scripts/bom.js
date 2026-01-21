let input = document.querySelector('#favchap');
let button = document.querySelector('button');
let list = document.querySelector('#list');


button.addEventListener('click', function () {
    if (input.value.trim() !== '') {
        let li = document.createElement('li');
        let deleteBtn = document.createElement('button');

        li.textContent = input.value;
        deleteBtn.textContent = '❌';

        deleteBtn.setAttribute('aria-label', 'close');
        deleteBtn.setAttribute('id', 'close-button');

        li.appendChild(deleteBtn);
        list.append(li);
        
        deleteBtn.addEventListener('click', function () {
            list.removeChild(li);
            input.focus();
            input.value = '';
        });
    }
});

