const btn = document.getElementById('btn');
const msg = document.getElementById('msg');
const items = [];

btn.addEventListener("click", (e) => {
    e.preventDefault();
    const itemName = document.getElementById('name').value;
    items.push(itemName);
    const uniqueItems = Array.from(new Set([...items]));

    msg.innerText = JSON.stringify(uniqueItems);
    
})