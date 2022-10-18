size = 30;
widthMult = 10;
heightMult = 2;

function setup() {
  createCanvas(700, 700);
  angleMode(DEGREES);
  strokeWeight(3);
  //noStroke();
  startR = random(165);
  startG = random(165);
  startB = random(165);
  background(startR + 45, startG + 45, startB + 45);
  for (x = width; x > -size * widthMult; x -= size) {
    for (y = height; y > -size * heightMult; y -= size) {
      fill(
        random(startR, startR + 90),
        random(startG, startG + 90),
        random(startB, startB + 90)
      );
      push();
      translate(x + size / 2, y + size / 2);
      rotate(floor(random(8))*45); 
      rect(
        0,
        0,
        size * floor(random(1, widthMult)),
        size * floor(random(1, heightMult))
      );
      pop();
    }
  }
}

function keyTyped() {
  if (key === "s") {
    save("myCanvas.jpg");
  }
}
