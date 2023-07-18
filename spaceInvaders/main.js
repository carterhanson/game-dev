const FIRE_KEY = 70; //keycode for 'f'
const lasers = [];

let player = null;
let explosionSound = null;
let laserSound = null;

function preload(){
    laserSound = loadSound('assets/sounds/laser_fire.mp3');

    Laser.fireSound = laserSound;
}

function setup(){
    createCanvas(600, 600);
    player = new Player(width / 2, height - 10);    
}

function draw(){
    background(0);
    
    player.draw();
    player.move();

    renderLasers();
    
}

function renderLasers(){
    //update and draw lasers from the array
    for(let i = lasers.length - 1; i >= 0; i--){
        lasers[i].update();
        lasers[i].draw();

        if(lasers[i].isOffScreen()){
            //remove from array
            lasers.splice(i, 1);
        }
    }
}

function keyPressed(){
    if(keyCode === FIRE_KEY){
        //shoot a laser
        //add the laser to the lasers array somehow
        lasers.push(player.shoot());

    }
}