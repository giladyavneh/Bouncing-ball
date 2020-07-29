//Ball
function Ball(x,y,r,color){
    this.x=x;
    this.y=y;
    this.r=r;
    this.m=r;
    this.color=color
    this.v={x:0,y:0}
    this.acc={x:0,y:0}
}
Ball.prototype.draw=function(elem){
    let ctx=elem.getContext("2d");
    ctx.clearRect(0,0,elem.width,elem.height)
    ctx.beginPath();
    ctx.arc(this.x,this.y,this.r,0,2*Math.PI);
    ctx.fillStyle="white";
    ctx.fill()
}
Ball.prototype.addVector=function(base,{x,y}){
    base.x+=x
    base.y+=y
}
Ball.prototype.move=function(){
    this.addVector(this.v,this.acc)
    this.addVector(this,this.v)
}

//Forces
function gravity(obj){
    obj.addVector(obj.acc,{x:0,y:0.7})
}

//main
let ball=new Ball(500,150,50,"white")
let canvas=document.querySelector("#canvas")
document.onload=update()
function update(){
    gravity(ball)
    ball.move()
    ball.draw(canvas)
    let stopID=requestAnimationFrame(update)
}