function die(){
    var df=f-this.startDie;
    new Explotion(myPlayer.x, myPlayer.y);
    myPlayer.y+=5;
    if(df<20){
        context.save();
		context.globalAlpha = 1 - 1 / 30 * df;
        context.fillStyle='white';
        context.fillRect(0,0,mycanvas.width, mycanvas.height);
        context.restore();
    }
    if(df<50){
        context.save();
        context.globalAlpha=1-1/50*df;    
        context.drawImage(R['xue'], 0, 0, mycanvas.width, mycanvas.height);
        context.restore();
    }
    if (df > 60) {
		context.drawImage(R['gameover'], 0, 0, 1100, 200,  mycanvas.width/2-275,  mycanvas.height/2-200, 550, 100);
	}

};