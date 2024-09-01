const discountedPercentage = document.getElementById('discountedPercentage');

// const product = [];

const item = (productName, originalPrice, discountedPrice) => {
    const obj = {
        productName,
        originalPrice,
        discountedPrice,
        Price_You_Save: "Rs "+(originalPrice - discountedPrice),
        Discount_Percentage: (((originalPrice - discountedPrice) / originalPrice)*100).toFixed(2) + "%"
    };
    return obj;
}

discountedPercentage.addEventListener("click", (e) => {
    e.preventDefault();
    const productName = document.getElementById('productName').value;
    const originalPrice = Number(document.getElementById('originalPrice').value);
    const discountedPrice = Number(document.getElementById('discountedPrice').value);

    if ((productName, originalPrice, discountedPrice)) {
        const cartObj = item(
            productName, 
            originalPrice, 
            discountedPrice
        );
        // product.push(cartObj);

        document.getElementById('productDiscount').innerHTML = `Discount in %  : ${JSON.stringify(cartObj)} `;
    }

})

