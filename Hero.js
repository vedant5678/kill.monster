class Hero {
  constructor(x, y, r) {
    var options = {
        density:0.04,
        frictionAir:0
    }
    this.x=x
    this.r=r
    this.y=y
    this.image=loadImage("Superhero-01.png")
    this.body = Bodies.circle(this.x, this.y, (this.r)/2, options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
  }
  display(){
      var heroPos=this.body.position;
       push() 
       translate(heroPos.x, heroPos.y-100); 
       rectMode(CENTER)
        fill(255,0,255) 
        imageMode(CENTER); 
        image(this.image, 0,0,this.r+150, this.r) 
        pop()
  }
}