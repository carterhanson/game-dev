let rectangle;
let rectangle2;


function setup(){
    createCanvas(500, 500);

    //rect(x, y, rectWidth, rectHeight);
    rectangle = new Rectangle(0, 300, 15, 50); //left paddle
    rectangle2 = new Rectangle(485, 400, 15, 50); //right paddle
}

function draw(){
    background(0);

    rectangle.draw();
    rectangle2.draw();

    if(keyIsDown(UP_ARROW)){
        rectangle2.moveUp();
    }
    
    if(keyIsDown(DOWN_ARROW)){
        rectangle2.moveDown();
    }

    if(keyIsDown(83)){
        rectangle.moveDown();
    }

    if(keyIsDown(87)){
        rectangle.moveUp();
    }
}

class Rectangle{
    constructor(x, y, width, height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    
    //moveUp()  moveDown()  draw()

    draw(){
        rect(this.x, this.y, this.width, this.height);
    }

    moveUp(){
        this.y -= 5;
        this.y = constrain(this.y, 0 , height -this.height);
    }

    moveDown(){
        this.y += 5;
        this.y = constrain(this.y, 0 , height -this.height);
    }
}