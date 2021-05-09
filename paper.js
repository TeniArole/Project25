class paper //the blueprint of an object
{
	constructor(x,y,r)
	{
		var options={ //to give properties to the object
            isStatic:false, 
            restitution:0.3, //bounce off
            friction: 0.3,
            density: 1.2			
			}
		
		this.x=x;
		this.y=y;
		this.r=r;
	   
		this.image = loadImage("paper.png"); //to load an image

		this.body=Bodies.circle(this.x, this.y, this.r - 40, options);
 		World.add(world, this.body); //world.add is the bigger world, the () is the smaller world

	}
	display(){ // to display any object or sprite
	
	var paperpos = this.body.position;
	push() //to make the changes
	translate(paperpos.x, paperpos.y)
	rectMode(CENTER);
	fill(255, 0, 255);
	imageMode(CENTER); //to center an object
	image(this.image, 0, 0, this.r, this.r); 
	pop()
    }

}