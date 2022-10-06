let gridStep = 50;
let radius = 20;
let velX, velY = 2;

function setup() {
  createCanvas(800, 600);
  colorMode(HSB, width, height, 100);
  background(30, 80, 80);

}

function draw() {
  background(0);
  
  
  //showGrid();
  noStroke();
  for (let x = 0; x < width / gridStep; x++) {
    for (let y = 0; y < height / gridStep; y++) {
      //console.log(x, y);
      let posX = (x * gridStep) + (gridStep * 0.5);
      let posY = (y * gridStep) + (gridStep * 0.5);
      
      //posX += random(-5, 5);
      //posY += raondom(-5, 5);
      
      
      fill(posX, posY, 180);
      circle(posX, posY, radius * 2);
    }
  }
}

function showGrid() {
  stroke(0);
  for (let x = 0; x < width; x = x + gridStep) {
    line(x, 0, x, height);
  }

  stroke(270, 100, 100);
  for (let y = 0; y < height; y += gridStep) {
    line(0, y, width, y);
  }
}