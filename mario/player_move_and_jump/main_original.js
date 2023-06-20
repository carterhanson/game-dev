const SPACE_BAR = 32;
const NUM_PLATFORMS = 10;
const platforms = [];
let player;



function setup() {
    createCanvas(500, 600);
    player = new Player(width / 2, height - 10, 20);
    platforms.push(new Platform());
    createEnvironment();
    
}
function draw(){
    background(0);
    player.draw();
    player.update();
    player.move();

   for(let platform of platforms){
        platform.draw();
   }
    
}
function createEnvironment(){
    /*
        - loop num_platforms amount of times
            -create platform for every iteration

        -creating a platform:
            -random values
                -position(x, y)
                    -bounded within canvas
                -width
                    -but within the min and max widths
    */

    for(let i = 0; i < NUM_PLATFORMS; i++){
        //get random platform width
        const platformWidth = random(Platform.MIN_WIDTH, Platform.MAX_WIDTH);

        //get random x
        const xPosition = random(width - platformWidth);
        //get random y
        const yPosition = random(Platform.HEIGHT, height - Platform.HEIGHT);

        let tooClose = false;
        for(const platform of platforms){
            if(dist(xPosition, yPosition, platform.x, platform.y) < Platform.MIN_SPACING){
                tooClose = true;
                break;
            }
        }

        if(!tooClose){
            //add to array
            platforms.push(new Platform(xPosition, yPosition, platformWidth));
        }else{
            i--;//try again
        }

    }
}



function keyPressed(){
    if(keyCode == SPACE_BAR && player.isOnGround()){
        player.jump();
    }
}




