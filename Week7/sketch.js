
let Actors = []

let Player, items;

function setup() {
	createCanvas(800, 400);
	world.gravity.y = 9;
	
	let centerX = width * 0.5;

	items = new Group();
	items.bounciness = 1;

	Player = new Sprite(centerX, height - 90, 15, 15,);
	Player.overlap(items, (a, b) => b);
	platform = new Sprite(centerX, height - 50, 60, 5, 'kinematic');
	platform.shapeColor = 'red';

	//for(let i = 0; i < 20; i++){
	//	Actors[i] = new Objectz()
	//}


}

function draw() {
	background(225);
	
	Actors.forEach((p)=>{
		p.play(Actors)
		p.move()
		p.display()
	})
	//let item = new items.Sprite(random(10, width - 10), -10, 20, 20);
	//item.vel.y = 2;
	if (kb.presses('w')) {
		Player.vel.y = -3;
	}

	if (kb.pressing('a')) {
		Player.vel.x = -10;
	} else if (kb.pressing('d')) {
		Player.vel.x = 10;
	} else {
		Player.vel.x = 0;
	}
	
}

function mousePressed() {
	for (let i = 1; i < 10; i++) {
		let x = width * i * 0.1;
		let sprite;
		let chance = random(); 
		 if (chance < 0.6) {
			
			sprite = new Sprite(x, 20, 20);
		} else {
			sprite = new Sprite(x, 20, 20, 10);
		}
		
		sprite.angularVelocity = random(-0.5, 0.5);
		sprite.bounciness = 0.7;
	}
}

