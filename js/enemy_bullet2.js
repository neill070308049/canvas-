function Bullet6(x,y){
    this.width=78;
    this.height=57;
    this.x=x;
    this.y=y;
    this.speed=8;
    arr_b6.push(this);
};
Bullet6.prototype.update=function(){
    this.x-=this.speed;
    if (this.x < -30) {
		for(var index=0; index<arr_b6.length; index++){
            if(arr_b6[index]==this){
                arr_b6.splice(index,1);
            }
        }
    }
    this.top = this.y;
    this.bottom = this.y + this.height;
    this.left = this.x;
    this.right = this.x + this.width;
    if(
        myPlayer.top < this.bottom && myPlayer.bottom > this.top && myPlayer.left < this.right && myPlayer.right > this.left
        ){
            myHp -= 4;
            if(myHp < 0){
                myHp = 0;
                changjing='死亡'
                window.startDie=f;
            };
            for(var index=0; index<arr_b6.length; index++){
                if(arr_b6[index]==this){
                    new Explotion(arr_b6[index].x-50, arr_b6[index].y-50);
                    var boom2 = document.getElementById('boom2');
                    boom2.play();
                    arr_b6.splice(index,1);
                };
            };
        } ; 
};
Bullet6.prototype.render=function(){
  context.drawImage(R['bullet_e2'], 0, 0, 196, 143, this.x, this.y, this.width, this.height);
};