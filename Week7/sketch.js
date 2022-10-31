


let player, items;
let count = 0;

function setup() {
	createCanvas(800, 400);

	let centerX = width * 0.5;

	items = new Group();

	player = new Sprite(centerX, height - 40, 150, 60);
	
	player.overlap(items, (a, b) => b.remove());
}

function draw() {
	background(225);
	
function MousePressed() {
	
}
	
if (count >= 80) {
	let item = new items.Sprite(random(10, width - 10), -10, 20, 20);
	item.vel.y = 2;
	count = 0;
}
	

	count++;
}
