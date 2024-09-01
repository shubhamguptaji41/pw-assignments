const mixBtn = document.getElementById('mix');
const col1 = document.getElementById('col1');
const col2 = document.getElementById('col2');
const output = document.getElementById('output');

// on selecting the input color show the color:
col1.addEventListener("change", () => {
  col1.style.backgroundColor = col1.value;
})

col2.addEventListener("change", () => {
  col2.style.backgroundColor = col2.value;
})

//  switch case

mixBtn.addEventListener("click", () => {
  const color1 = document.getElementById("col1").value;
  const color2 = document.getElementById("col2").value;
  let result;
  switch (color1) {
    case "red":

      switch (color2) {
        case "red":
          result = "red";
          break;
        case "blue":
          result = "purple";
          break;
        case "yellow":
          result = "orange";
          break;
        default:
          output.style.backgroundColor = "white";
          result = "Invalid color combination";
      }
      break;
    case "blue":

      switch (color2) {
        case "yellow":
          result = "green";
          break;
        case "red":
          result = "purple";
          break;
        case "blue":
          result = "blue";
          break;
        default:
          output.style.backgroundColor = "white";
          result = "Invalid color combination";
      }
      break;
    case "yellow":
      
      switch (color2) {
        case "blue":
          result = "green";
          break;
        case "red":
          result = "orange";
          break;
        case "yellow":
          result = "yellow";
          break;
        default:
          output.style.backgroundColor = "white";
          result = "Invalid color combination";
      }
      break;
    default:
      output.style.backgroundColor = "white";
      result = "Invalid color combination";
  }

  console.log(result);
  output.placeholder = result
  output.style.backgroundColor = result;
  

})