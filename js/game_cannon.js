function Cannon1(){
    this.width=112;
    this.height=140;
    this.x=mycanvas.width;
    this.y=mycanvas.height-myGround.height-this.height,
    arr_cannon1.push(this);
};

Cannon1.prototype.update=function(){
    this.x-=4;
    if(this.x<-120){
        for(var index = 0; index < arr_cannon1.length; index++){
            if(arr_cannon1[index]==this){
                arr_cannon1.splice(index,1);
            }
        }
    }
    if(f%150==0){
        new Bullet3(this.x+35, this.y-43);
        var bean3 = document.getElementById('bean3');
        bean3.play();
    }
};
Cannon1.prototype.render=function(){
    context.drawImage(R['mycannon1'], 0, 0, 337, 420, this.x, this.y, this.width, this.height);      
};


