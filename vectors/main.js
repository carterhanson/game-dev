let position = null;
let velocity = null;

function setup(){
    createCanvas(720, 400);

    //start position is middle of canvas
    position = createVector(width / 2, height / 2);

    //start velocity to move right and down
    velocity = createVector(2,2);

}

function draw(){
    background(0);

    // position.x += 2;
    position.add(velocity);

   
    const hitLeftSide = position.x <= 0;
    const hitRightSide = position.x >= width;
    
    const hitBottom = position.y >= height;
    const hitTop = position.y <= 0;

    //hits side
    if(hitRightSide || hitLeftSide){
        velocity.x = -velocity.x;
    }

    //hits top and bottom
    if(hitTop || hitBottom){
        velocity.y = -velocity.y;
    }

    ellipse(position.x, position.y, 48, 48);
}

