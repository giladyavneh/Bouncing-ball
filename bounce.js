function Ball(x,y,r,color){
    this.x=x;
    this.y=y;
    this.r=r;
    this.m=r;
    this.color=color
}
Ball.prototype.draw(elem){
    let ball=document.createElement("circle")
    ball.cx=this.x
    ball.cy=this.y
    ball.r=this.r
    ball.fill=this.color
    elem.append(ball)
}