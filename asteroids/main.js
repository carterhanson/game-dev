const FIRE_KEY = 32; // space bar
const NUM_ASTEROIDS = 9;
let ship;
let asteroids = [];
let lasers = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  ship = new Ship();
  createAsteroids();
}

function draw() {
  background(0);
  renderShip();
  renderAsteroids();
  renderLasers();
  ship.update();
}

function renderShip(){
  ship.draw();
}

function renderLasers(){
  for (let i = lasers.length - 1; i >= 0; i--) {
    const laser = lasers[i];
    laser.update();
    laser.draw();
    
    if (laser.isOffScreen()) {
        lasers.splice(i, 1);
    } else {
        checkAsteroidHit(laser, i);
    }
}
}

function checkAsteroidHit(laser, laserIndex){
  for (let i = asteroids.length - 1; i >= 0; i--) {
    if (laser.hits(asteroids[i])) {
        shatterAsteroid(i);
        lasers.splice(laserIndex, 1);
        break;
    }
}
}

function shatterAsteroid(asteroidIndex){
  const newAsteroids = asteroids[asteroidIndex].breakup();
    if (newAsteroids.length > 0) {
        asteroids.splice(asteroidIndex, 1);
        asteroids.push(...newAsteroids);
    } else {
        asteroids.splice(asteroidIndex, 1);
    }
}

function renderAsteroids(){
  for (let i = asteroids.length - 1; i >= 0; i--){
    const asteroid = asteroids[i];
    asteroid.update();
    asteroid.draw();
  }   
}

function createAsteroids(){
  for (let i = 0; i < NUM_ASTEROIDS; i++) {
    asteroids.push(new Asteroid());
  }
}

function keyReleased() {
	// stop ship from rotating
}

function keyPressed() {
  if (keyCode == FIRE_KEY) {
    lasers.push(ship.shoot());
  }
}

