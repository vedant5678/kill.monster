class Monster {
    constructor(x, y, r) {
      var options = {
          density:0.04,
          frictionAir:0
      }
      this.x=x
      this.r=r
      this.y=y
      this.image=loadImage("Monster-01.png")
      this.body = Bodies.circle(this.x, this.y, (this.r)/2, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
        var santaPos=this.body.position;
         push() 
         translate(santaPos.x, santaPos.y-100); 
         rectMode(CENTER)
          fill(255,0,255) 
          imageMode(CENTER); 
          image(this.image, 0,0,this.r, this.r) 
          pop()
    }
  }