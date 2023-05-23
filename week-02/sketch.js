let y;
let x;
let xSpeed;
let ySpeed;

function moveX(){
  x += xSpeed;
  if(x > width || x < 0){
    xSpeed = -xSpeed;
  };
}

function moveY(){
  y += ySpeed;
  if(y > height || y < 0){
    ySpeed = -ySpeed
  }
}

function setup() {
    createCanvas(400, 400);
    x = width / 2;
    y = height / 2;
    xSpeed = 2;
    ySpeed = 5;
  }
  
  function draw() {
    background(220);
    ellipse(x, y,80,80);
  
    moveX();
    moveY();
    
    fill('#fae');
  }
  