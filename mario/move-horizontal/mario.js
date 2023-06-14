class Mario{
    constructor() {
        this.x = width / 2;
        this.y = height - 10;
        this.width = 20;
        this.height = 20;
        // this.gravity = 0.7;
        this.lift = -12;
        this.velocity = 0;
        this.speed = 5;
    }

    
    draw() {
        ellipse(this.x, this.y, this.width, this.height);
    }
   
   
    moveLeft(){
        this.x -= this.speed;
        this.x = constrain(this.x, 10, width - this.width);
    }
    moveRight(){
        this.x += this.speed;
        this.x = constrain(this.x, 0,  width - 10);
    }
}