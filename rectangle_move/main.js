let rectangle;


function setup(){
    createCanvas(500, 500);

    //rect(x, y, rectWidth, rectHeight);
    rectangle = new Rectangle(200, 300, 50, 50);
}

function draw(){
    background(0);

    rectangle.draw();
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

    }

    moveDown(){

    }
}