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
Ball.prototype.colideWall=function(canvas){
    if(this.y+this.r>=canvas.height){
        this.y=canvas.height-this.r
        this.v.y*=-1
    }
    if(this.y-this.r<=0){
        this.y=this.r
        this.v.y*=-1
    }
    if(this.x+this.r>=canvas.width){
        this.x=canvas.width-this.r
        this.v.x*=-1
    }
    if(this.x-this.r<=0){
        this.x=this.r
        this.v.x*=-1
    }
}
let g=document.getElementById("gravity").value;
let w=document.getElementById("wind").value
//Forces


//main
let ball=new Ball(500,150,50,"white")
let canvas=document.querySelector("#canvas")
document.onload=update()
function update(){
    let Gravity={x:0,y:parseFloat(g)}
    let Wind={x:parseFloat(w),y:0}
    g=document.getElementById("gravity").value
    w=document.getElementById("wind").value
    ball.acc={x:0,y:0}
    ball.addVector(ball.acc,Gravity)
    ball.addVector(ball.acc,Wind)
    ball.move()
    ball.colideWall(canvas)
    ball.draw(canvas)
    let stopID=requestAnimationFrame(update)
}