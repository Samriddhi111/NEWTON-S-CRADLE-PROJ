class  ball {
  constructor(x, y,r){

    var options={
      isStatic:true,
      restitution:0.3,
      friction:1.5,
      density:1.3
    }
    this.x=x;
   this.y=y;
   this.r=r;
  
    this.body=Bodies.circle(this.x,this.y,this.r,options)
    World.add(world,this.body)
  }
    display(){
      var ballpos=this.body.position;
      
      push ();
      translate (ballpos.x,ballpos.y)
      rectMode(CENTER);
       fill (225);
       ellipse(0,0,this.r,this.r);
      strokeWeight (3);
        pop()
  }
}