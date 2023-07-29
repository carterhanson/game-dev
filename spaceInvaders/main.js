const enemies = [];
const lasers = [];
const FIRE_KEY = 70; //keycode for 'f' key
const ENEMY_COLS = 6; // feel free to change
const ENEMY_ROWS = 5; // feel free to change

let player = null;
let explosionSound = null; // used when enemy hit
let laserSound = null;
let shipImg = null;
let enemyImg = null;
let bgImg = null;

function preload(){
    laserSound = loadSound('assets/laser_fire.mp3');
    explosionSound = loadSound('assets/ship_explosion.mp3');
    shipImg = loadImage('assets/ship.png');
    enemyImg = loadImage('assets/enemy.png');
    bgImg = loadImage('assets/bgImg.jpg')
		// TODO: register and set the explosion sound on the Enemy.

    Laser.fireSound = laserSound;
}

function setup(){
    createCanvas(600, 600);
    player = new Player(width / 2, height - 10);

		createEnemyGrid();    
}

function draw(){
    background(bgImg);
    
    renderEnemies();
    player.draw();
    player.move();

    renderLasers();
    dropEnemiesAndReverseDirection();
    
}

function createEnemyGrid(){
    // Create a grid of enemies
    for(let i = 0; i < ENEMY_COLS; i++){
        for(let j = 0; j < ENEMY_ROWS; j++){
            enemies.push(new Enemy(i * 80 + 80, j * 60 + 60));
        }
    }
}

function renderLasers(){
    //update and draw lasers from the array
    for(let i = lasers.length - 1; i >= 0; i--){
        lasers[i].update();
        lasers[i].draw();

        if(lasers[i].isOffScreen()){
            //remove from array
            lasers.splice(i, 1);
        }else{
            checkEnemyHit(lasers[i], i);
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

/*
	The following are suggested methods to implement. You can
	take another approach, but these are some to consider if you
	become stuck. It would be good to group these functions next to
	others that are doing similar things (such as all the enemy functions
	being next to each other) for organization and readability of you code.
	
	Remember to consider where these methods should be called as well.
*/


function renderEnemies(){
    // Update and draw all enemies
    for (let i = 0; i < enemies.length; i++) {
        const enemy = enemies[i];
        enemy.update();
        enemy.draw();
    }		    
}

function dropEnemiesAndReverseDirection(){
    let shouldChangeDirection = false;

    for(let i = 0; i < enemies.length; i++){
        if(enemies[i].hasHitSideOfScreen()){
            shouldChangeDirection = true;
            break;
        }
    }

    if(shouldChangeDirection) {
        for(let i = 0; i < enemies.length; i++){
            enemies[i].dropAndReverseDirection();
        }
    }
}

function checkEnemyHit(laser, laserIndex){
    // Check if laser hits any enemy
    for(let i = 0; i < enemies.length; i++){
        if(laser.hits(enemies[i])){
            explosionSound.play();
            enemies.splice(i, 1);
            lasers.splice(laserIndex, 1);
            break;
        }
    }
}
