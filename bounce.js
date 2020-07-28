function Ball(x,y,r,color){
    this.x=x;
    this.y=y;
    this.r=r;
    this.m=r;
    this.color=color
}
Ball.prototype.draw=function(elem){
    let ball=document.createElement("circle")
    ball.setAttribute("cx",this.x)
    ball.setAttribute("cy",this.y)
    ball.setAttribute("r",this.r)
    ball.setAttribute("fill",this.color)
    elem.append(ball)
}