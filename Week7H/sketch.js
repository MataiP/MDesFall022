let ShapeCGroup = []

function setup() {
	createCanvas(800, 400);
    Safety = new Platform();
    Hero = new Player();
    //ShapeC = Crumbs();
    ShapeR = new Bricks();

   
}

function draw() {
	background(225);
    
    //display our characters
   
    //move characters
    for(let i = 0; i < 20; i++){
		ShapeCGroup[i] = new Crumbs()
        ShapeCGroup[i].display()
        ShapeCGroup[i].move();
	}

    //display our platforms
   // Safety.display();

    //display our player
    //Hero.display();


    //give player controls?
    //give platforms movement?
    //give player to character interactons?


}