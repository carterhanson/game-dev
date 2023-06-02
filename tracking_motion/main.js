let ball, paddle, paddle2;


function setup(){
    createCanvas(500, 500);
    ball = new Ball(200, 20, 20, 20, 17, 5);
    paddle = new Paddle(00, 400, 15, 50);
    paddle2 = new Paddle(485, 200, 15, 50);
}

function draw(){
    background(0);
    paddle.draw();
    paddle2.draw();
    ball.update();
    ball.draw();
    paddle.update(ball);
    paddle2.update(ball);
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

class Paddle{
    constructor(x, y, width, height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    draw(){
        rect(this.x, this.y, this.width, this.height);
    }
    
    update(ball){
        this.y = ball.y - this.height / 2;
    }
}