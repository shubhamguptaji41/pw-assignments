const btn = document.getElementById('btn');
const pattern = document.getElementById('pattern');
let string = ""

btn.addEventListener("click", (e) => {
    e.preventDefault();
    const input = Number(document.getElementById('input').value);
    for(let i=0; i<input; i++) {
        for(let j=input; j>i; j--){
            string += "*"
        }
        string += "<br>";
    }
    pattern.innerHTML = "Inverted Right-Angled triangle pattern is : "+ "<br><br>" + string;
})
