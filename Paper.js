class paper{

constructor()
{

    var options = 
    {
      isStatic :false,
      resitution :0.3,
      friction :.5,
      density : 1.2
    }
    this.body = Bodies.eclipse(200,100,50,60,options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);

display()
{
  var pos =  this.body.position;
  rectmode(center)
  fill("white") 
  eclipse(pos.x,pos.y,this.width,this.width);

}


}








}
