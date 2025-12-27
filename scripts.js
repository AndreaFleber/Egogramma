const canvas = document.getElementById("c");
const ctx = canvas.getContext("2d");

// Aspetta resize + dati
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();  // Imposta subito

fetch("data.json")
  .then(res => res.json())
  .then(data => {
    console.log("Data:", data);
    draw(data);
  })
  .catch(err => console.error("Errore:", err));

function draw(data) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  const midY = canvas.height / 2;
  const stepX = 20;  // Più largo
  const scaleY = 50; // Più alto
  
  ctx.strokeStyle = "#f00";  // ROSSO visibile!
  ctx.lineWidth = 4;
  ctx.lineCap = "round";
  
  ctx.beginPath();
  ctx.moveTo(50, midY - data[0].value * scaleY);  // Offset sinistra
  data.forEach((d, i) => {
    ctx.lineTo(50 + i * stepX, midY - d.value * scaleY);
  });
  ctx.stroke();
  
  console.log("Grafico disegnato!");
}
