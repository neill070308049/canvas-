function Bullet5(x,y){
    this.width=31;
    this.height=38;
    this.x=x;
    this.y=y;
    this.speed=10;
    arr_b5.push(this);
};
Bullet5.prototype.update=function(){
    this.x-=this.speed;
    if (this.x < -30) {
		for(var index=0; index<arr_b5.length; index++){
            if(arr_b5[index]==this){
                arr_b5.splice(index,1);
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
            myHp -= 6;
            if(myHp < 0){
                myHp = 0;
                changjing='死亡'
                window.startDie=f;
            };
            for(var index=0; index<arr_b5.length; index++){
                if(arr_b5[index]==this){
                    new Explotion(arr_b5[index].x-50, arr_b5[index].y-50);
                    var boom2 = document.getElementById('boom2');
                    boom2.play();
                    arr_b5.splice(index,1);
                };
            };
        } ; 
};
Bullet5.prototype.render=function(){
  context.drawImage(R['bullet_e1'], 0, 0, 94, 115, this.x, this.y, this.width, this.height);
};