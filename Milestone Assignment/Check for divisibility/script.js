const addBtn = document.getElementById('addBtn');
const checkBtn = document.getElementById('checkBtn');
const output = document.getElementById('output')
const arrayList = document.getElementById('arrayList')
const arrList = [];

addBtn.addEventListener("click", (e) => {
    e.preventDefault();
    
    const number = Number(document.getElementById('number').value);
    // console.log(arrList)
    arrList.push(number)
    arrayList.innerText = JSON.stringify(arrList);
})

checkBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const divByThree = [];
    if (arrList.length > 0) {
        for (let i = 0; i < arrList.length; i++) {
            if (arrList[i] % 3 == 0 && arrList[i] % 2 != 0) {
                divByThree.push(arrList[i]);
            }
        }
        // console.log(divByThree)
        output.innerHTML = "Divisible by 3, but not by 2 are : " + JSON.stringify(divByThree);
    }
    else {
        output.innerText = "Add at least one element to the array";
    }
})