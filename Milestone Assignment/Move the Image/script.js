const movingImage = document.getElementById("moving-image");

// Set initial position
let xPos = 0;
let yPos = 0;

// Move the image
function moveImage(x, y) {
  xPos += x;
  yPos += y;
  movingImage.style.transform = `translate(${xPos}px, ${yPos}px)`;
}

// Respond to arrow key events
document.addEventListener("keydown", function(event) {
  switch(event.keyCode) {
    case 37: // Left arrow
      moveImage(-10, 0);
      break;
    case 38: // Up arrow
      moveImage(0, -10);
      break;
    case 39: // Right arrow
      moveImage(10, 0);
      break;
    case 40: // Down arrow
      moveImage(0, 10);
      break;
  }
});
