let bird;
const pipes = [];
const SPACE_BAR = 32;
const FRAME_AMOUNT = 100;
function setup() {
    createCanvas(400, 600);
    //create the bird
    bird = new Bird();
    //populate the pipes array with one PipePair initially to start
    pipes.push(new PipePair())
}

function draw() {
    //set the background
    background(0);
    //draw and update the bird
    bird.draw();
    bird.update();
    
    //add a new PipePair every FRAME_AMOUNT frames
    if(frameCount % FRAME_AMOUNT === 0){
    //add pipes
        pipes.push(new PipePair());
    }
    //render the pipes
    renderPipes();
    
}
function keyPressed() {
    if (keyCode == SPACE_BAR) {
      bird.up();
    }
}
/*
Add one new PipePair to the pipes array
*/
function addPipes(){
    for(let i = pipes.length - 1; i >= 0; i--){
        pipes[i].draw();
    }
    
}
/*
Removes the pipe from the given index.
Use this method to remove pipes as they leave the screen
*/
function removePipe(pipeIndex){
    pipes.splice(pipeIndex, 1);
}
/*
Will add PipePairs to the pipes array, draw the pipes, update the pipes,
detect collisions, and remove pipes once they leave the screen.
*/
function renderPipes(){
    for(let i = pipes.length - 1; i >= 0; i--){
        pipes[i].draw();
        pipes[i].update();
        // console.log("bird y: " + bird.y);
        // console.log("bottom pipe: " + pipes[i].bottom);
        // console.log("bird.x " + bird.x);
        // console.log(bird.width);
        // console.log("pipes x: " + pipes[i].x);
        // console.log("top pipe: " + pipes[i].top);
        // console.log("combined pipes: " + pipes[i].bottom + pipes[i].top);
        // console.log("pipes width: " + pipes[i].width)
        // console.log("pipes x + width: " + pipes[i].x + pipes[i].width);
    

        if(collision(bird,pipes[i])){
            console.log("hit");
        }

        if(pipes[i].isOffScreen()){
            removePipe(pipes[i]);
        }
    //perform necessary operations described above in here.
    }
    
}
/*
Detects collisions between the bird and the PipePairs
@return boolean Whether the bird has collided with a PipePair
*/
function collision(bird, pipe){
/*
hint: it may be helpful to write helper functions which can
breakdown the collision detection into two discrete steps.
Perhaps one function to determine if the bird is within the y-value
range of being able to hit the PipePair, and another function to
then determine if the bird is touching the PipePair via the
x-coordinates.
*/
    // let isWithinXRange = bird.x > pipe.x && bird.x < pipe.width;
    // let isWithinYRange = bird.y > pipe.top + pipe.bottom || bird.y > pipe.top + pipe.bottom;
   
    // return isWithinYRange;
    // let isWithinVerticalRange = bird.y > pipe.top && bird.y > pipe.bottom;
    // return isWithinVerticalRange;

}