let ball, paddle;


function setup(){
    createCanvas(500, 500);
    ball = new Ball(250, 250, 20, 20, 3, 2);
}

function draw(){
    background(0);

    ball.update();
    ball.draw();
    ball.hasHitXWall();
    ball.hasHitYWall();
}

class Ball{
    constructor(x, y, width, height,xVelocity, yVelocity){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.xVelocity = xVelocity;
        this.yVelocity = yVelocity;
    }

    draw(){
        ellipse(this.x, this.y, this.width, this.height);
    }

    hasHitXWall(){
        return (this.x > width || this.x < 0);
          
    }

    hasHitYWall(){
        return (this.y > height || this.y < 0);
         
    }

    update(){
        this.y += this.yVelocity;
        this.x += this.xVelocity;

        if(this.hasHitXWall()){
            this.xVelocity = -this.xVelocity;
        }

        if(this.hasHitYWall()){
            this.yVelocity = -this.yVelocity;
        }
    }
}