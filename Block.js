class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.0,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      this.image=loadImage("block.png")
      if(this.body.speed>3){
        rectMode(CENTER);
        translate(pos.x, pos.y);
        rotate(angle);
        fill(color);
        stroke(border);
        strokeWeight(4);
        rect(0, 0, this.width, this.height);
        pop();
      }
      else{
        World.remove(this.body);
        this.visibility = this.visibility-5
        tint(255, this.visibility);
        pop();}
        }
        
    }
    
    display();
      var pos= this.body.position;
      rectMode(CENTER);
      rect(pos.x,pos.y,this.width, this.height);
    
