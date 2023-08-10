class Laser{
  
    constructor(shipPosVector, angle) {
      this.pos = createVector(shipPosVector.x, shipPosVector.y);
      this.vel = p5.Vector.fromAngle(angle);
      this.vel.mult(10);
    }
  
    update() {
      this.pos.add(this.vel);
    }
  
    draw() {
      push();
      stroke(255);
      strokeWeight(this.radius * 2);
      point(this.pos.x, this.pos.y);
      pop();
      
    }
  
    hits(asteroid) {
          // hint: use the dist() function in p5 js      
        const d = dist(this.pos.x, this.pos.y, asteroid.pos.x, asteroid.pos.y);
        return d < asteroid.r;    
    }
  
    isOffScreen() {
      return (
        this.pos.x > width + this.radius ||
        this.pos.x < -this.radius ||
        this.pos.y > height + this.radius ||
        this.pos.y < -this.radius
        );
    }
  
  }