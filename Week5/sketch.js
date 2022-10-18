let angle = 0;


function setup(){
    createCanvas(710, 400)
    noFill();
    stroke("#F44336");
    background(0);

    d = height/2;
}

function draw(){
    background("#AE9EB111");

    let y = (sin(angle) * 100) + height/2;
    let x = (cos(angle) * 100) + width/2;

    ellipse(x, y, 20, 20);

    angle += 0.05;
}