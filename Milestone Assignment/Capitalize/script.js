const btn = document.getElementById('btn');
const msg = document.getElementById('msg')

btn.addEventListener("click", (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const capitalize = name[0].toUpperCase();
    const str = name.slice(1);
    // using ternary opeartor:
    msg.innerHTML = (name[0] == capitalize) ? name : capitalize + str;
    
    // if (name[0] == capitalize) {
    //     msg.innerHTML = name;
    // }
    // else {
    //     const str = name.slice(1);
    //     msg.innerHTML = capitalize + str;
    // }

    
})