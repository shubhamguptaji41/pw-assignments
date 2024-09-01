const btn = document.getElementById('btn');
const msg = document.getElementById('msg');

btn.addEventListener("click", (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    let len = name.length;
    let count = 0; 
    for(let i=0; i<=len; i++) {
        if(name[i] == 'A' || name[i] == 'E' || name[i] == 'I' || name[i] == 'O' || name[i] == 'U' || name[i] == 'a' || name[i] == 'e' || name[i] == 'i' || name[i] == '0' || name[i] == 'u') {
            count++;
        }
    }
    msg.innerHTML = count + " Vowels are there in this String "

})
