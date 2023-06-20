let player;
let platforms = [];
let numPlatforms = 20;
//   let platform;
let curPlatform = null;
  
function setup(){
    createCanvas(800, 800);
    player = new Player(width / 2, height - 10, 20);
    // platform = new Platform(width / 2, height - 100, 100, 20);

    createEnvironment();

    }

    function draw(){
    background(0);

    player.update();
    player.draw();
    player.move();

    curPlatform = null;
    for (let platform of platforms) {
        platform.draw();
        checkIfPlayerOnPlatform(platform);
        handleVerticalCollisions(platform);
        handleHorizontalCollisions(platform);
    }

    keepPlayerOnGround();

}

function createEnvironment(){
    for (let i = 0; i < numPlatforms; i++) {
        let platformWidth = random(Platform.MIN_WIDTH, Platform.MAX_WIDTH);
        
        let x = random(platformWidth / 2, width - platformWidth / 2);
        let y = random(Platform.HEIGHT, height - Platform.HEIGHT);
    
        // Ensure that the platform is not too close to the others
        let tooClose = false;
        for (let platform of platforms) {
          if (dist(x, y, platform.x, platform.y) < Platform.MIN_SPACING) {
            tooClose = true;
            break;
          }
        }
    
        if (!tooClose) {
          platforms.push(new Platform(x, y, platformWidth, Platform.HEIGHT));
        } else {
          i--; // Try again
        }
    }
}

function checkIfPlayerOnPlatform(platform) {
    if (Math.abs(player.y - platform.y + player.diameter) < 1) {
        curPlatform = platform;
    }
}

function handleVerticalCollisions(platform) {
    // Check if player is landing on the platform
    if (player.rightEdge() > platform.x && player.leftEdge() < platform.topWidth()) {
        if (player.y + player.diameter > platform.y && player.y < platform.y) { // Top collision
            player.y = platform.y - player.diameter;
            player.velocity = 0;
        } else if (player.y - player.diameter < platform.y + platform.height && player.y - player.diameter > platform.y) { // Bottom collision
            player.y = platform.y + platform.height + player.diameter;
            player.velocity = 0;
        }
     }
}


function handleHorizontalCollisions(platform) {
    // Check if player hits the side of the platform
    if (player.y + player.diameter > platform.y && player.y - player.diameter < platform.y + platform.height) {
        if (player.rightEdge() > platform.x && player.leftEdge() < platform.x) { // Left collision
            player.x = platform.x - player.radius;
        } else if (player.leftEdge() < platform.topWidth() && player.rightEdge() > platform.topWidth()) { // Right collision
            player.x = platform.topWidth() + player.radius;
        }
    }
}

function keepPlayerOnGround() {
    if (player.y > height - player.diameter) {
        player.velocity = 0;
        player.y = height - player.diameter;
    }
}

function keyPressed() {
    if (keyCode === 32 && (player.y === height - player.diameter || curPlatform !== null)) {
        // Space bar & either on the ground or on a platform
        player.jump();
    }
}