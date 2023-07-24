class Enemy{
    static SIZE = 40;
    static X_VELOCITY = 1;
		// This is intended to be used as the amount to drop by when the side of the canvas is hit.
    static DROP = 40;

		static exlosionSound; // All enemies will make the same sound when exploding.

    constructor(x, y){
        this.x = x;
        this.y = y;
        this.size = Enemy.SIZE;
        this.xVelocity = Enemy.X_VELOCITY;
    }

    draw(){
        rect(this.x, this.y, this.size, this.size);
    }

    update(){
			// TODO: Implement
    }
		
		/*
			The following are suggested methods to implement. You can
			take another approach, but these are some to consider if you
			become stuck.
		*/
		
		/*
		sideEdge(){
        
    }

    bottomEdge(){
        
    }

    hasHitSideOfScreen(){
        
    }
		
		dropAndReverseDirection(){
        
    }

		*/

}