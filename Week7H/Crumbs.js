class Crumbs {
   
    //a simple bouncing object
    Crumbs(){
      position = new PVector(width/2, height/2);
      velocity = new PVector(random(-3, 3), random(-3, 3));
      
      radius = random(30, 50);
      trgClr = color(random(255), random(255), random(255)); 
    }
    
    move(){
      if(position.x + radius >= width || position.x - radius <= 0){
        velocity.x *= -1;
      }
      if(position.y + radius >= height || position.y - radius <= 0){
        velocity.y *= -1;
      }
      position.add(velocity);
    }
    
    display(){
      fill(trgClr);
      noStroke();
      ellipse(position.x, position.y, radius*2, radius*2);
    }
    

}