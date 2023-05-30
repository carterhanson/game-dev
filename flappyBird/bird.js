class Bird {
    static WIDTH = 32;
    static X_POSITION = 64;
    static GRAVITY = 0.4;
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
        this.y = y;
        this.gravity = Bird.GRAVITY;
        this.lift = Bird.LIFT;
        this.velocity = velocity;

    }
    //draws and colors the bird - use the ellipse() function to represent to bird
    draw() {
    }
    /* Used to update the bird's position, velocity, etc. */
    update() {
    }
    /* Used to make the bird go up when the spacebar is hit. */
    up() {
        this.velocity += this.lift;
    }
}
    