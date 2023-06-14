let mario;

function setup() {
    createCanvas(500, 600);
    mario = new Mario();
    
}

function draw(){
    background(0);
    mario.draw();
    
    if(keyIsDown(LEFT_ARROW)){
        mario.moveLeft();
    }

    if(keyIsDown(RIGHT_ARROW)){
        mario.moveRight();
    }
}


