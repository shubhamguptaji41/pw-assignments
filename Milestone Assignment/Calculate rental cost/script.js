document.getElementById('btn').addEventListener("click", (e) => {
    e.preventDefault();
    const noOfDays = Number(document.getElementById('noOfDays').value);
    const CarSelectionPrice = Number(document.getElementById('CarSelection').value);
    const totalRent = noOfDays * CarSelectionPrice;
    document.getElementById('result').innerHTML = `The rent for ${noOfDays} days: Rs ${totalRent}/- `;
})