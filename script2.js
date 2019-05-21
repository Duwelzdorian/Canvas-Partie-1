
  var c = document.getElementById("mon_canvas");
  var ctx = c.getContext("2d");

  // toit
  ctx.fillStyle = "#bb8446";
  ctx.rotate(45 * Math.PI / 180);
  ctx.fillRect(195,-88,105,105);


  // mur
ctx.fillStyle = "powderblue";
ctx.rotate(-45 * Math.PI / 180);
ctx.fillRect(125,150,150,180);

// porte
ctx.fillStyle = "pink";
ctx.fillRect(185,270,30,60);

// fenetres
ctx.fillStyle = "pink";
ctx.fillRect(150,200,25,25);
ctx.fillRect(225,200,25,25);
