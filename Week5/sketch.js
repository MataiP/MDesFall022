let angle = 0
let PosX, PosY
let VelX, VelY
let velInterval = 500

function setup(){
    createCanvas(710, 400)
    noFill()
    stroke("#F44336")
    background(0)

    PosX = width/2
    PosY = height/2

    RandomVelocity()
    setInterval(RandomVelocity, velInterval)
}

function draw(){
    background("#AE9EB111")
    let y = (sin(angle) * 100) + height/2
    let x = (cos(angle) * 100) + width/2

    ellipse(x, y, 20, 20)

    if (PosX <= 0 || PosX + 50 >= width){
        VelX *= -1;
    }
    if (PosY <= 0 || PosY + 50 >= height){
        VelY *= -1;
    }

    PosX += VelX
    PosY += VelY

    rect(PosX, PosY, 50, 50)

    angle += 0.05;
}

function RandomVelocity(){
    VelX = random(-3,3)
    VelY = random(-3,3)
}