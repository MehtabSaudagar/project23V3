class Player{
    constructor(x,y,w,h,angle){
        
        var options = {
            isStatic : true
        };

        this.w = w;
        this.h = h;
        this.angle = angle;
        this.image = loadImage("./assets/player.png");
        
        this.body = Bodies.rectangle(x,y,w,h,options);
        World.add(world,this.body);

        
    }

    show(){
        var pos = this.body.position; 
        var angle = this.angle; 
        
       push();
        translate(pos.x,pos.y);
        rotate(this.angle);
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.w, this.h);
        pop();

           }
    }
