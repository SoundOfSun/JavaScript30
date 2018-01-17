// 1. Grab the canvas element
const canvas = document.querySelector('#draw');
// 2. Define the context in 2D (we don't draw directly on the canvas)
const ctx = canvas.getContext('2d');

// 3. Set the size to be fullscreen
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// 4. Set colour, end of line
ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 30;

// 5. Default cannot draw (only from clickdown to clickup)
let isDrawing = false;

// 6. Say the line stops
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true; // will build up

// 7. Create a draw function
function draw(e) {
  if (!isDrawing) return; // Stop the function

  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;

  // The drawing is a path from an X,Y to another X,Y
  ctx.beginPath();
  ctx.moveTo(lastX, lastY); // start from
  ctx.lineTo(e.offsetX, e.offsetY); // go to
  ctx.stroke();

  // 8. Update the variable to change begin position
  lastX = e.offsetX;
  lastY = e.offsetY;
  // Refactor : [lastX, lastY] = [e.offsetX, e.offsetY];

  // Change the hue
  hue++;
  if (hue >= 360) {
    hue = 0;
  }

  if (ctx.lineWidth >= 50 || ctx.lineWidth <= 10) {
    // Flip the direction
    direction = !direction;
  }

  if (direction) {
    ctx.lineWidth++;
  } else {
    ctx.lineWidth--;
  }
}

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY]; // update last X,Y
});
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);
