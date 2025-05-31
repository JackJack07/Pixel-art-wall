const canvas = document.getElementById('interactive-canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const brickWidth = 100;
const brickHeight = 54;
const brokenBricks = new Set();

function drawBrokenBricks() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let pos of brokenBricks) {
    const [x, y] = pos.split(',').map(Number);
    ctx.fillStyle = 'black';
    ctx.fillRect(x, y, brickWidth, brickHeight);
  }
}

canvas.addEventListener('click', (e) => {
  const x = Math.floor(e.clientX / brickWidth) * brickWidth;
  const y = Math.floor(e.clientY / brickHeight) * brickHeight;
  const key = `${x},${y}`;
  if (!brokenBricks.has(key)) {
    brokenBricks.add(key);
  } else {
    brokenBricks.delete(key);
  }
  drawBrokenBricks();
});
