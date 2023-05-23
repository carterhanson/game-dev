let y = 200; //initial position
let x = 0;
let rectHeight = 50;
let rectWidth = 15;

function setup(){
    createCanvas(500, 500);

}

function draw(){
    background(0);
    rect(x, y, rectWidth, rectHeight);
    rect(width - rectWidth, y, rectWidth, rectHeight);
    if(keyIsDown(UP_ARROW)){
        y -= 5;
    }

    if(keyIsDown(DOWN_ARROW)){
        y += 5;
    }

    //constrain(whatToConstrain, lowestValue, highestValue)
    y = constrain(y, 0 , height - rectHeight);
    
}

// function keyPressed() {
//     if (keyCode === UP_ARROW) {
//       y -= 2;
//     } else if(keyCode === DOWN_ARROW){
//         y++;
//     }
// }