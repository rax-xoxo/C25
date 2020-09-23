class Bird extends BaseClass{
  constructor(x,y){
    super(x,y,40,40);
    this.image = loadImage("sprites/bird.png");
  }
  display(){
    this.body.position.x = mouseX;
    this.body.position.y = mouseY;
    super.display();
  }
}