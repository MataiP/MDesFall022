class Agent extends c2.Cell{
    constructor() {
        let x = random(width);
        let y = random(height);
        let r = random(width / 40, width / 15);
        super(x, y, r);
  
        this.vx = random(-2, 2);
        this.vy = random(-2, 2);
        this.color = color(random(0, 30), random(30, 60), random(20, 100));
    }
  
    update(){
        this.p.x += this.vx;
        this.p.y += this.vy;
  
        if (this.p.x < 0) {
            this.p.x = 0;
            this.vx *= -1;
        } else if (this.p.x > width) {
            this.p.x = width;
            this.vx *= -1;
        }
        if (this.p.y < 0) {
            this.p.y = 0;
            this.vy *= -1;
        } else if (this.p.y > height) {
            this.p.y = height;
            this.vy *= -1;
        }
    }
  
    display(){
        if (this.state != 2) {
            stroke(0, .2);
            strokeWeight(1);
            fill(this.color);
            drawPolygon(this.polygon(4).vertices);
  
            stroke('#333333');
            strokeWeight(5);
            point(this.p.x, this.p.y);
        }
    }
  }