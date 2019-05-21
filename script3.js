
  var c = document.getElementById("mon_canvas");
  var ctx = c.getContext("2d");

// Toit
ctx.fillStyle = "olivedrab";
ctx.fillRect(130,160,140,40);

// bas
ctx.fillStyle = "olivedrab";
ctx.fillRect(100,200,200,50);


// roues
ctx.beginPath();
ctx.arc(250,250,25,0,Math.PI*2,true);
ctx.strokeStyle = "#6c6c6c";
ctx.fillStyle = "#cdcdcd";
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.arc(150,250,25,0,Math.PI*2,true);
ctx.strokeStyle = "#6c6c6c";
ctx.fillStyle = "#cdcdcd";
ctx.fill();
ctx.stroke();
