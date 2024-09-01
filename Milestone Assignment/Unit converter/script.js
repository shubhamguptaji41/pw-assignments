document.getElementById('btn').addEventListener("click", (e) => {
    e.preventDefault();
    const temp = Number(document.getElementById('temp').value);
    const F = ( temp * 9/5 ) + 32
    document.getElementById('result').innerHTML = "In Fahrenheit : " + F + " °F";
})