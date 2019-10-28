function Cannon2(){
    this.width=112;
    this.height=140;
    this.x=mycanvas.width+this.width*3;
    this.y=0,
    arr_cannon2.push(this);
};

Cannon2.prototype.update=function(){
    this.x-=4;
    if(this.x<-120){
        for(var index = 0; index < arr_cannon2.length; index++){
            if(arr_cannon2[index]==this){
                arr_cannon2.splice(index,1);
            }
        }
    }
    if(f%100==0){
        new Bullet4(this.x+35, this.y+140);
        var bean4 = document.getElementById('bean4');
        bean4.play();
    }
};
Cannon2.prototype.render=function(){
    context.drawImage(R['mycannon2'], 0, 0, 337, 420, this.x, 0, this.width, this.height);      
};