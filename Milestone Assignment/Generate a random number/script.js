const GenerateNumberBtn = document.getElementById('GenerateNumberBtn');

// Arrow function
(randomNumber = () => {
    let random = Math.floor(Math.random() * 100);
    document.getElementById('showNumber').innerHTML = `Random number: ${random} `;
})();

GenerateNumberBtn.addEventListener("click", (e)=> {
    e.preventDefault();
    randomNumber()
})