function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(225, 75, 115);

  ellipseMode(CENTER);
  rectMode(CENTER);

  // Head
  stroke(0, 0, 0);
  strokeWeight(1);
  fill(255, 255, 255);
  ellipse(175, 225, 120, 400);

  // Eyes
  ellipse(150, 125, 30, 40);
  ellipse(200, 125, 30, 55);

  // Pupils
  noStroke();
  fill(0, 0, 0);
  circle(153, 133, 20);
  circle(195, 136, 23);

  // Mouth
  // rect(175, 350, 45, 15, 30);
  stroke(0, 0, 0);
  strokeWeight(1);
  fill(255, 255, 255);
  ellipse(175, 333, 45, 40);

  // Tounge
  noStroke();
  strokeWeight(1);
  fill(225, 150, 100, 96);
  ellipse(177, 340, 30, 25);
}
