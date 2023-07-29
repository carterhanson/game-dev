class Laser{
    static SPEED = 5;
    static DIAMETER = 5;

    static fireSound = null;

    constructor(x, y){
        this.x = x;
        this.y = y;
        this.diameter = Laser.DIAMETER;
        this.radius = this.diameter / 2;
    }

    draw(){
        fill(255);
        ellipse(this.x, this.y, this.diameter);
    }

    update(){
        // Make laser move upward
        this.y -= Laser.SPEED;
    }

    isOffScreen(){
        const isOffTopOfScreen = this.y + this.radius < 0;
        const isOffSideOfScreen = this.x + this.radius < 0 ||
                                    this.x - this.radius > width;

        return isOffTopOfScreen || isOffSideOfScreen;
    }

    hits(enemy){
		const enemyTop = enemy.y;
        const enemyBottom = enemy.y + enemy.size;
        const enemyLeft = enemy.x;
        const enemyRight = enemy.x + enemy.size;

        const laserTop = this.y - this.radius;
        const laserBottom = this.y + this.radius;
        const laserLeft = this.x - this.radius;
        const laserRight = this.x + this.radius;


        if(
            laserBottom >= enemyTop &&
            laserTop <= enemyBottom &&
            laserRight >= enemyLeft &&
            laserLeft <= enemyRight
        ){
            return true;
        }

        return false;

    }

}