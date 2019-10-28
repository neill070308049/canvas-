function Background(){
    this.x=0;
    this.speed=4;
};
Background.prototype.update=function(){
    this.x -= this.speed;
    if (this.x <= -851) {
		this.x = 0;
    }  
};
Background.prototype.render=function(){
    context.drawImage(R['background'], 0, 0, 1017, 1024,this.x, 0, 851, 853);
    for(var n=1; n<mycanvas.width+851; n++){
        context.drawImage(R['background'], 0, 0, 1017, 1024,n*851+this.x-7, 0, 851, 853);
    }   
    context.drawImage(R['sun'], 0, 0, 227, 227, mycanvas.width/2-114, 2, 227, 227 );
    context.drawImage(R['cloud'], 10, 8, 375, 110, -100, 120, 350, 92);
    context.drawImage(R['cloud'], 14, 178, 233, 85, 320, 176, 233, 85);
    context.drawImage(R['cloud'], 8, 118, 386, 62, 570, 100, 386, 67); 
};