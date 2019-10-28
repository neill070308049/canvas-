function Bullet7(x,y){
    this.width=63;
    this.height=71;
    this.x=x;
    this.y=y;
    this.speed=30;
    arr_b7.push(this);
};
Bullet7.prototype.update=function(){
    this.x-=this.speed;
    if (this.x < -30) {
		for(var index=0; index<arr_b7.length; index++){
            if(arr_b7[index]==this){
                arr_b7.splice(index,1);
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
            myHp -= 10;
            if(myHp < 0){
                myHp = 0;
                changjing='死亡'
                window.startDie=f;
            };
            for(var index=0; index<arr_b7.length; index++){
                if(arr_b7[index]==this){
                    new Explotion(arr_b7[index].x-50, arr_b7[index].y-50);
                    var boom2 = document.getElementById('boom2');
                    boom2.play();
                    arr_b7.splice(index,1);
                };
            };
        } ; 
};
Bullet7.prototype.render=function(){
  context.drawImage(R['bullet_c1'], 0, 0, 126, 143, this.x, this.y, this.width, this.height);
};