const paragraph = document.getElementById('paragraph');
const highlightBtn = document.getElementById('highlightBtn')

highlightBtn.addEventListener('click', (e) => {
  e.preventDefault();
  // console.log(paragraph.innerText)
  const paragraphValue = paragraph.innerText;
  // console.log(paragraphValue)
  const word = paragraphValue.split(' ')
  highlightWords = word.map((e) => {
    if(e.length > 8) {
      e = `<span style="background-color: yellow;">${e}</span>`

    }
    return e;
  }).join(' ')

      paragraph.innerHTML = highlightWords;
      

})