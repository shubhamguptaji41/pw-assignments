
const bugs = document.getElementById('bugs');
const correctBugs = document.getElementById('correctBugs');

const addBtn = document.getElementById('addBtn');
const arrItems = [];
const fixArrItems = [];

addBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const item = document.getElementById('item').value;
    const quantity = Number(document.getElementById('quantity').value);

    // bugs original cart item data
    let cartItems = {
        item: item,
        quantity: quantity
    };
    arrItems.push(cartItems)
    console.log(arrItems)

    //  doubled thd quantity of each item in the cart array to corrdet the bugs
    let fixCartItems = {
        item: item,
        quantity: quantity * 2
    };
    fixArrItems.push(fixCartItems);

    bugs.innerHTML = "Original Cart items : " + JSON.stringify(arrItems);
    correctBugs.innerHTML = "Correct Quantity bug fixes : " + JSON.stringify(fixArrItems);

})