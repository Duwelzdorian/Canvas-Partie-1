var c = document.getElementById("mon_canvas");
var ctx = c.getContext("2d");

// toit
ctx.beginPath();
ctx.fillStyle = "#bb8446";
ctx.moveTo(100, 100);
ctx.lineTo(200, 25);
ctx.lineTo(300, 100);
ctx.fill();
ctx.closePath();


// mur
ctx.beginPath();
ctx.fillStyle = "powderblue";
ctx.moveTo(300, 100);
ctx.lineTo(300, 300);
ctx.lineTo(100, 300);
ctx.lineTo(100, 100);
ctx.fill();
ctx.closePath();

// porte
ctx.beginPath();
ctx.fillStyle = "pink";
ctx.moveTo(175, 300);
ctx.lineTo(175, 225);
ctx.lineTo(225, 225);
ctx.lineTo(225, 300);
ctx.fill();
ctx.closePath();

// fenetres
ctx.beginPath();
ctx.fillStyle = "pink";
ctx.moveTo(275, 125);
ctx.lineTo(275, 175);
ctx.lineTo(225, 175);
ctx.lineTo(225, 125);
ctx.lineTo(275, 125);
ctx.fill();
ctx.closePath();


ctx.beginPath();
ctx.fillStyle = "pink";
ctx.moveTo(125, 125);
ctx.lineTo(175, 125);
ctx.lineTo(175, 175);
ctx.lineTo(125, 175);
ctx.lineTo(125, 125);
ctx.fill();
ctx.closePath();
