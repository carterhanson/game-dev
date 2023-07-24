const enemies = [];
const lasers = [];
const FIRE_KEY = 70; //keycode for 'f' key
const ENEMY_COLS = 6; // feel free to change
const ENEMY_ROWS = 5; // feel free to change

let player = null;
let explosionSound = null; // used when enemy hit
let laserSound = null;

function preload(){
    laserSound = loadSound('assets/laser_fire.mp3');
		// TODO: register and set the explosion sound on the Enemy.

    Laser.fireSound = laserSound;
}

function setup(){
    createCanvas(600, 600);
    player = new Player(width / 2, height - 10);

		createEnemyGrid();    
}

function draw(){
    background(0);
    
    player.draw();
    player.move();

    renderLasers();
    
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

/*
function renderEnemies(){
    // Update and draw all enemies		    
}

function dropEnemiesAndReverseDirection(){
    
}

function checkEnemyHit(laser, laserIndex){
    // Check if laser hits any enemy
    
}
*/