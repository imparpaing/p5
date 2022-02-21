function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(225, 75, 115);

  ellipseMode(CENTER);
  rectMode(CENTER);

  // Head
  ellipse(175, 225, 120, 400);

  // Eyes
  ellipse(150, 125, 30, 40);
  ellipse(200, 125, 30, 55);

  // Pupils
  circle(153, 133, 20);
  circle(195, 136, 23);

  // Lips
  // rect(175, 350, 45, 15, 30);
  ellipse(175, 333, 45, 40);
}
