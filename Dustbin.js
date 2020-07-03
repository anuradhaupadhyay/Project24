class Dustbin{
constructor(x1,y1,w1,h1,x2,y2,w2,h2,x3,y3,w3,h3){
 this.body1 = Matter.Bodies.rectangle(x1,y1,w1,h1);
 this.body2 = Matter.Bodies.rectangle(x2,y2,w2,h2);
 this.body3 = Matter.Bodies.rectangle(x3,y3,w3,h3);
 this.width1 = w1;
 this.height1 = h1;
 this.width2 = w2;
 this.height2 = h2;
 this.width3 = w3;
 this.height3 = h3;
 World.add(world,this.body1);
 World.add(world,this.body2);
 World.add(world,this.body3);
}
displayDustbin(){
    push();
    translate(this.body1.position.x,this.body1.position.y)
    rectMode(CENTER);
    fill("yellow");
    rect(0, 0, this.width1, this.height1);
    pop();

    push();
    translate(this.body2.position.x,this.body2.position.y)
    rectMode(CENTER);
    fill("yellow");
    rect(0, 0, this.width2, this.height2);
    pop();

    push();
    translate(this.body3.position.x,this.body3.position.y)
    rectMode(CENTER);
    fill("yellow");
    rect(0, 0, this.width3, this.height3);
    pop();
   }
}