function Bullet4(x,y){
    this.width=43;
    this.height=43;
    this.x=x;
    this.y=y;
    this.speed=3;
    arr_b4.push(this);
};
Bullet4.prototype.update=function(){
    this.y+=this.speed;
    this.x-=this.speed;
    if (this.y > 850) {
		for(var index=0; index<arr_b4.length; index++){
            if(arr_b4[index]==this){
                arr_b4.splice(index,1);
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
            for(var index=0; index<arr_b4.length; index++){
                if(arr_b4[index]==this){
                    new Explotion(arr_b4[index].x-50, arr_b4[index].y-50);
                    var boom9 = document.getElementById('boom9');
                    boom9.play();
                    arr_b4.splice(index,1);
                };
            };
        } ; 
};
Bullet4.prototype.render=function(){
  context.drawImage(R['bullet_p1'], 0, 0, 45, 45, this.x, this.y, this.width, this.height);
};