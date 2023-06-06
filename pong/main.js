let ball, leftPaddle, rightPaddle;
let bgImg = null;
let leftPaddleImg = null;
let rightPaddleImg = null;


function preload(){
    bgImg = loadImage('./assets/snowy_mountains.png');
    leftPaddleImg = loadImage('./assets/red_saber.png');
    rightPaddleImg = loadImage('./assets/blue_saber.png');
}

function setup(){
    createCanvas(500, 500);

    leftPaddle = new Paddle(leftPaddleImg, 10, height / 2);
    rightPaddle = new Paddle(rightPaddleImg, width - 20, height / 2, UP_ARROW, DOWN_ARROW);
    ball = new Ball(width / 2, height / 2);
}

function draw(){
    background(bgImg);

    leftPaddle.update(ball);
    leftPaddle.draw();

    rightPaddle.update();
    rightPaddle.draw();

    ball.update();
    ball.draw();
    
    if(ball.hits(leftPaddle) || ball.hits(rightPaddle)){
        ball.changeDirection();
    }

}

class Ball{
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.width = 20;
        this.height = 20;
        this.xVelocity = 2;
        this.yVelocity = 3;
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
            //reset game
            this.x = width / 2;
            this.y = height / 2;
        }

        if(this.hasHitYWall()){
            this.yVelocity = -this.yVelocity;
        }

    }

    /**
     * Detects if ball has hit paddle passed to it.
     * 
     * @param Paddle paddle 
     * 
     * @return boolean Whether the ball has hit the given paddle
     */
    hits(paddle){
        
         //is ball within paddles verticle range
        let withinVerticalRange = this.y > paddle.y && this.y < paddle.y + paddle.height;
        //is within range, is it in horizontal range
        let withinHorizontalRange = (this.xVelocity > 0 ? 
                                        this.x > paddle.x && this.x < paddle.x + paddle.width :
                                        this.x < paddle.x + paddle.width && this.x > paddle.x);

        // if(this.xVelocity > 0){
        //     return this.x > paddle.x && this.x < paddle.x + paddle.width;
        // }else{
        //     return this.x < paddle.x + paddle.width && this.x > paddle.x
        // }
        
        return withinVerticalRange && withinHorizontalRange;
          
    }

    changeDirection(){
        this.xVelocity = -this.xVelocity;
    }
}

class Paddle{
    constructor(paddleImg, x, y, upKey = null, downKey = null){
        this.paddleImg = paddleImg;
        this.x = x;
        this.y = y;
        this.width = 10;
        this.height = 80;
        this.speed = 5;
        this.upKey = upKey;
        this.downKey = downKey;
    }
    moveUp(){
        this.y -= this.speed;
        this.y = constrain(this.y, 0 , height -this.height);
    }

    moveDown(){
        this.y += this.speed;
        this.y = constrain(this.y, 0 , height -this.height);
    }

    update(ball){
        if(this.upKey && this.downKey){//user controlled paddle
            if(keyIsDown(this.upKey)){
                this.moveUp();
            }

            if(keyIsDown(this.downKey)){
                this.moveDown();
            }

        }else{//computer controlled paddle
            this.y = ball.y - this.height / 2;
        }

        //make sure paddles stay within canvas
       this.y = constrain(this.y, 0, height - this.height);
    }

    draw(){
        image(this.paddleImg, this.x, this.y, this.width, this.height);
        
    }
}