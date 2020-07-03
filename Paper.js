class Paper{
    constructor(x,y,diameter){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:1,
            density:1.2
        }
        this.body = Matter.Bodies.circle(x,y,diameter);
        this.diameter=diameter;
        Matter.World.add(world,this.body);
    }
    displayPaper(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("purple");
        ellipse(0, 0, this.diameter*2);
        pop();
    }
}