class PipePair{
    static WIDTH = 20;
    static SPEED = 2;
    /*
    Must set:
    - x (x-position of the PipePair)
    - top
    - bottom
    - width
    - speed
    - highlight (boolean representing if this PipePair must be highlighted)
    */
    constructor(){
        this.x = width;
        this.top = random(250, 300);
        this.bottom = random(250, 300);
        this.width = PipePair.WIDTH;
        this.speed = PipePair.SPEED;
        this.highlight = false;
    }
    /*
    Draws out the PipePair. Will need to fill with initial color, and will
    eventually check to see if the PipePair needs to be highlighted.
    */
    draw() {
    //will need to call rect() twice - once for the top pipe, and once
    //for the bottom pipe
    
        rect(this.x, 0, this.width, this.top);
        rect(this.x, 450, this.width, this.bottom);
        // if(this.highlight = true){
        //     fill(255, 0, 0);
        // }
    }
    /*
    Will be used to update the x-position of the PipePair.
    */
    update(){
        this.x -= this.speed;
    }
    /*
    Determines whether or not the PipePair is off screen.
    @return boolean Whether the PipePair is off screen
    */
    isOffScreen(){
        return this.x - this.size / 2 > width;
    }
}