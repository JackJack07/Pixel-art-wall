const canvas = document.getElementById('interactive-canvas');
const ctx = canvas.getContext('2d');

// Match CSS brick size
const brickWidth = 80;
const brickHeight = 40;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const brokenBricks = new Set();

function drawBrokenBricks() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let pos of brokenBricks) {
    const [x, y] = pos.split(',').map(Number);

    // Simulate a cracked/dark broken brick
    ctx.fillStyle = "#222";
    ctx.fillRect(x, y, brickWidth, brickHeight);

    // Add a cracked outline effect
    ctx.strokeStyle = "#111";
    ctx.lineWidth = 2;
    ctx.strokeRect(x + 1, y + 1, brickWidth - 2, brickHeight - 2);
  }
}

canvas.addEventListener('click', (e) => {
  const x = Math.floor(e.clientX / brickWidth) * brickWidth;
  const y = Math.floor(e.clientY / brickHeight) * brickHeight;
  const key = `${x},${y}`;

  if (brokenBricks.has(key)) {
    brokenBricks.delete(key);
  } else {
    brokenBricks.add(key);
  }

  drawBrokenBricks();
});

