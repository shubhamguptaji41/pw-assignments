// 2. Calculator

const calculate = () => {
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;
    const operator = document.getElementById('operator').value;


    switch (operator) {
        case '+':
            let sum = parseInt(num1) + parseInt(num2);
            document.getElementById('result').innerHTML = sum;
            console.log(sum)
            return false;
            break;
        case '-':
            let sub = parseInt(num1) - parseInt(num2);
            document.getElementById('result').innerHTML = sub;
            console.log(sub)
            return false;
            break;

        case '*':
            let mul = parseInt(num1) * parseInt(num2);
            document.getElementById('result').innerHTML = mul;
            console.log(mul)
            return false;
            break;

        case '/':
            let div = parseInt(num1) / parseInt(num2);
            document.getElementById('result').innerHTML = div;
            console.log(div)
            return false;
            break;

        default:
            document.getElementById('result').innerHTML = "Invalid operator";
            break;
    }

}

