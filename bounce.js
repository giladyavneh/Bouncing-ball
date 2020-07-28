function Ball(x,y,r,color){
    this.x=x;
    this.y=y;
    this.r=r;
    this.m=r;
    this.color=color
}
Ball.prototype.draw=function(elem){
    let ctx=elem.getContext("2d");
    ctx.clearRect(0,0,elem.width,elem.height)
    ctx.beginPath();
    ctx.arc(this.x,this.y,this.r,0,2*Math.PI);
    ctx.fillStyle="white";
    ctx.fill()
}