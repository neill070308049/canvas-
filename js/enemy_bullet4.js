function Bullet8(x,y){
    this.width=87;
    this.height=134;
    this.x=x;
    this.y=y;
    this.speed=30;
    arr_b8.push(this);
};
Bullet8.prototype.update=function(){
    this.x-=this.speed;
    if (this.x < -30) {
		for(var index=0; index<arr_b8.length; index++){
            if(arr_b8[index]==this){
                arr_b8.splice(index,1);
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
            myHp -= 15;
            if(myHp < 0){
                myHp = 0;
                changjing='死亡'
                window.startDie=f;
            };
            for(var index=0; index<arr_b8.length; index++){
                if(arr_b8[index]==this){
                    new Explotion(arr_b8[index].x-50, arr_b8[index].y-50);
                    var boom2 = document.getElementById('boom2');
                    boom2.play();
                    arr_b8.splice(index,1);
                };
            };
        } ; 
};
Bullet8.prototype.render=function(){
  context.drawImage(R['bullet_e4'], 0, 0, 174, 269, this.x, this.y, this.width, this.height);
};