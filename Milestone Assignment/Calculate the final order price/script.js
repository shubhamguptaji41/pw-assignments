const addBtn = document.getElementById('addBtn');
const calculateBtn = document.getElementById('calculateBtn');
const addedItems = [];

const item = (Item, Item_Price, Quantity) => {
    const obj = {
        Item,
        Item_Price,
        Quantity,
        total: Item_Price * Quantity
    };
    return obj;
}

addBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const itemName = document.getElementById('itemName').value;
    const itemCost = Number(document.getElementById('itemCost').value);
    const quantity = Number(document.getElementById('quantity').value);

    if ((itemName, itemCost, quantity)) {
        const cartObj = item(
            itemName,
            itemCost,
            quantity
        );
        addedItems.push(cartObj);

        document.getElementById('addedItemPrice').innerHTML = `Added Items : ${JSON.stringify(addedItems)} `;
    }

})

calculateBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let finalBilling = 0;
    addedItems.forEach((item) => {
      finalBilling += item.total;
    });
    document.getElementById('totalPrice').innerHTML = 'Total price to be paid: Rs ' + finalBilling;
  });