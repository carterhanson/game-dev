class Bird {
    static WIDTH = 32;
    static X_POSITION = 64;
    static GRAVITY = 0.7;
    static LIFT = -12;
    /*
    Must set:
    - x
    - y
    - gravity (rate at which bird will fall)
    - lift (the amount to go against gravity when spacebar pressed)
    - velocity
    */
    constructor() {
        this.x = Bird.X_POSITION;
        this.y = height / 2;
        this.gravity = Bird.GRAVITY;
        this.lift = Bird.LIFT;
        this.velocity = 0;

    }
    //draws and colors the bird - use the ellipse() function to represent to bird
    draw() {
        ellipse(this.x, this.y, 32, 32);
    }
    /* Used to update the bird's position, velocity, etc. */
    update() {
        this.velocity += this.gravity;
        this.y += this.velocity;
        
        if (this.y > height) {
          this.y = height;
          this.velocity = 0;
        }
        if (this.y < 0) {
          this.y = 0;
          this.velocity = 0;
        }
        
        
    }
    /* Used to make the bird go up when the spacebar is hit. */
    up() {
        this.velocity += this.lift;
    }

    
}
    