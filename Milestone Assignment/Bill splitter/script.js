document.getElementById('btn').addEventListener("click", (e) => {
    e.preventDefault();
    const dishName = document.getElementById('dishName').value;
    const dishCostPrice = Number(document.getElementById('dishCost').value);
    const noOfPeople = Number(document.getElementById('noOfPeople').value);
    const distributedCost = dishCostPrice / noOfPeople;
    const bill = {
        Name_of_Dish : dishName,
        Total_Cost : "Rs " + dishCostPrice,
        Per_People_Cost : "Rs " + distributedCost
    }
    document.getElementById('result').innerHTML = `Final Bill : ${JSON.stringify(bill)} `;
})