let bird;
const pipes = [];
const SPACE_BAR = 32;
const FRAME_AMOUNT = 100;
let bgImg = null;
let topPipeImg = null;
let bottomPipeImg = null;
let birdImg = null;

function preload(){
    bgImg = loadImage('./assets/flappy_bird_environment.png');
    topPipeImg = loadImage('./assets/top_pipe.png');
    bottomPipeImg = loadImage('./assets/bottom_pipe.png');
    birdImg = loadImage('./assets/bird.png');
}

function setup() {
    createCanvas(400, 600);
    //create the bird
    bird = new Bird();
    //populate the pipes array with one PipePair initially to start
    pipes.push(new PipePair())
}

function draw() {
    //set the background
    background(bgImg);
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
    pipes[i].push(new PipePair());
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
        if(pipes[i].isOffScreen()){
            removePipe(pipes[i]);
        }
        collision(bird, pipes[i]);
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
    let isWithinXRange = bird.x + bird.width > pipe.x && bird.x < pipe.x + pipe.width;
    let isWithinYRange = bird.y + bird.width < (height - pipe.bottom) && bird.y > pipe.top;
    if(!isWithinYRange && isWithinXRange){
        console.log("hit");
    }
    

}