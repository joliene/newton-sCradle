
class Rope{
    constructor(bodyA,bodyB,offsetX,offsetY){
        this.offsetX=offsetX;
        this.offsetY=offsetY;

        var options={
            bodyA:bodyA,
            bodyB:bodyB,
            pointB:{x:this.offset,y:this.offset},
            stiffness:0.004,
            length:10
        }
            this.sling=Constraint.create(options)
            World.add(world, this.sling)
        }
      
       /* fly(){
            this.sling.bodyA=null;
        }*/
    
        display() {
         // if(this.sling.bodyA){
            var pointA=this.sling.bodyA.position;
            var pointB=this.sling.bodyB.position;
            strokeWeight(4)
            line(pointA.x,pointA.y,pointB.x,pointB.y)
       // }
            
        }
    /*constructor(bodyA,bodyB){
        var options={
            bodyA:bodyA,
            bodyB:bodyB,
            stiffness:0.004,
            length:10
        }
            this.sling=Constraint.create(options)
            World.add(world, this.sling)
        }
      
        
    
        display() {
          
            var pointA=this.sling.bodyA.position;
            var pointB=this.sling.bodyB.position;
            strokeWeight(4)
            line(pointA.x,pointA.y,pointB.x,pointB.y)
            
        }*/
}















/*constructor(body1,body2,offsetX,offsetY){
    this.offsetX=offsetX
    this.offsety=offsetY
    var options={
        bodyA:body1,
        bodyB:body2,
        pointB:{x:this.offsetX,y:this.offsetY}
    }
    this.rope=Constraint.create(options)
    World.add(world,this.rope)
}*/