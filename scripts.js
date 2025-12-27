window.addEventListener('load', function() {
  const canvas = document.getElementById("c");
  const ctx = canvas.getContext("2d");
  
  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  fetch("data.json")
    .then(res => {
      console.log("Fetch status:", res.status);
      return res.json();
    })
    .then(data => {
      console.log("Data OK:", data);
      draw(data);
    })
    .catch(err => {
      console.error("ERRORE:", err);
      // Fallback grafico fisso per test
      draw([{value: 0}, {value: 0}, {value: 0}, {value: 0}]);
    });

  function draw(data) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#333";
    ctx.fillRect(0, canvas.height/2 - 1, canvas.width, 2);  // Asse Y
    
    const midY = canvas.height / 2;
    const stepX = 30;
    const scaleY = 60;
    
    ctx.strokeStyle = "#00f";  // BLU elettrico!
    ctx.lineWidth = 6;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    
    ctx.beginPath();
    ctx.moveTo(80, midY - data[0].value * scaleY);
    data.forEach((d, i) => {
      ctx.lineTo(80 + i * stepX, midY - d.value * scaleY);
    });
    ctx.stroke();
    
    console.log("LINEE DISSEGNATE!");
  }
});
