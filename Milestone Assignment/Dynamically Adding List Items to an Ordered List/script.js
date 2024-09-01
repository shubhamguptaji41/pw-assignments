const listBox = document.querySelector('.list-item-box');
const addItemBtn = document.getElementById('addItem');
const msg = document.querySelector('.msg');

const list = [
    'HTML and Semantics',
    'Starting with CSS',
    'Working Template',
    'Mobile responsive webpages',
    'Grid and Flex-box in CSS',
    'Projects using HTML & CSS',
    'Version Control and Git',
    'Getting Started with JavaScript',
    'Advance JavaScript',
    'Working with DOM',
    'Making Projects using HTML, CSS and JavaScript',
    'Understanding Fundamental of Computer Science',
    'Getting Started with Database',
    'Understanding the Database',
    'Starting with NodeJS and Express',
    'Understanding React and its Fundamentals',
    'Understanding Hooks and Routers',
    'Starting and Completing Full Fledge Projects',
];

let items = 1;

addItemBtn.addEventListener('click', (e) => {
    e.preventDefault();
    listBox.innerHTML = '';

    for (let i = 0; i < items; i++) {
        listBox.innerHTML += `<li class="list-item">${list[i]}</li>`;
    }
    items++;
    if (items <= list.length) {
        msg.innerHTML = '';
    }
    else {
        msg.innerHTML = 'All items have been added';
        msg.style.color = 'red';

        items = 0;
    }

    console.log('items added ');
});