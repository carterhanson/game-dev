class Enemy{
    static SIZE = 40;
    static X_VELOCITY = 1;
		// This is intended to be used as the amount to drop by when the side of the canvas is hit.
    static DROP = 40;

		static exlosionSound; // All enemies will make the same sound when exploding.

    constructor(x, y){
        this.enemyImg = enemyImg;
        this.x = x;
        this.y = y;
        this.size = Enemy.SIZE;
        this.xVelocity = Enemy.X_VELOCITY;
    }

    draw(){
      image(this.enemyImg, this.x, this.y, this.size, this.size);
    }

    update(){
		  this.x += this.xVelocity;
    }
		
		/*
			The following are suggested methods to implement. You can
			take another approach, but these are some to consider if you
			become stuck.
		*/
		
		
		sideEdge(){
      return this.x + this.size >= width || this.x <= 0;
    }

    bottomEdge(){
      return this.y + this.size >= height;
    }

    hasHitSideOfScreen(){
      return this.sideEdge();
    }
		
		dropAndReverseDirection(){
      this.y += Enemy.DROP;
      this.xVelocity *= -1;
    }

		

}