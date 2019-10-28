function Ground(){
    this.x=0;
    this.speed=4;
    this.width=128;
    this.height=128;
};
Ground.prototype.update=function(){
    this.x -= this.speed;
    if (this.x < -1*this.width) {
		this.x = 0;
    }  
};
Ground.prototype.render=function(){
    for(var n=0; n<mycanvas.width+this.width; n++){
        context.drawImage(R['ground'], 530, 426, 128, 128, n*this.width+this.x, mycanvas.height-this.height, this.width, this.height);
    }
};