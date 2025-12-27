const canvas = document.getElementById("c");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

fetch("data.json")
  .then(res => res.json())
  .then(data => draw(data));

function draw(data) {
  const midY = canvas.height / 2;
  const stepX = 10;
  const scaleY = 40;

  ctx.beginPath();
  ctx.moveTo(0, midY - data[0].value * scaleY);

  data.forEach((d, i) => {
    ctx.lineTo(i * stepX, midY - d.value * scaleY);
  });

  ctx.strokeStyle = "#000";
  ctx.lineWidth = 1;
  ctx.stroke();
}
