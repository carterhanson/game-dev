class PipePair{
    static WIDTH = 20;
    static SPEED = 2;
    /*
    Must set:
    - x (x-position of the PipePair)
    - top
    flappy bird 4
    - bottom
    - width
    - speed
    - highlight (boolean representing if this PipePair must be highlighted)
    */
    constructor(){
    }
    /*
    Draws out the PipePair. Will need to fill with initial color, and will
    eventually check to see if the PipePair needs to be highlighted.
    */
    draw() {
    //will need to call rect() twice - once for the top pipe, and once
    //for the bottom pipe
    }
    /*
    Will be used to update the x-position of the PipePair.
    */
    update(){
    }
    /*
    Determines whether or not the PipePair is off screen.
    @return boolean Whether the PipePair is off screen
    */
    isOffScreen(){
    }
}