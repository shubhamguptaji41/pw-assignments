const btn = document.querySelector('.btn')
const heading = document.querySelector('.heading')

btn.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(heading.innerHTML)
    if(heading.innerHTML === "The most affordable learning platform"){
        heading.innerHTML = "PW Skills";
    }
    else {
        heading.innerHTML ="The most affordable learning platform";
    }
})