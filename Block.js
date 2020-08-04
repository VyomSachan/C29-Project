class Block{
    constructor(x, y){
        var options = {
            restitution : 0.8
        }
        this.body = Bodies.rectangle(x, y, 30, 30, options);
        this.width = 30,
        this.height = 30;
        World.add(world, this.body);
    }
    display(){
        var angle = this.body.angle;

        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);

        rectMode(CENTER);
        fill (133, 239, 82);
        rect(0, 0, this.width, this.height);
        
        pop();
    }
}