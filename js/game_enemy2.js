function Enemy2(){
    this.width = 113;
    this.height = 144;
    this.y = Math.random()*(mycanvas.height - myGround.height - this.height);
    this.x = mycanvas.width;
    this.speed = 5;
    this.dy=parseInt(Math.random()*10-5);
    arr_enemy2.push(this); 
};

Enemy2.prototype.update=function(){
    this.x -= this.speed;
    this.y += this.dy;
    if(this.x <this.width*-1){
        for(var index = 0; index < arr_enemy2.length; index++){
            if(arr_enemy2[index] == this){
                arr_enemy2.splice(index, 1);
            }
        }
    }
    if(this.y > mycanvas.height - myGround.height - this.height-50){
        this.y = mycanvas.height - myGround.height - this.height-50;
    }
    if(this.y < 20){
        this.y = 20;
    }

     // 发射子弹
     if(f%70 == 0){
        new Bullet6(this.x, this.y+50);
        var bean6 = document.getElementById('bean6');
        bean6.play();
    }

    // 碰撞检测玩家
    this.top = ~~this.y;
    this.bottom = ~~this.y + this.height;
    this.left = ~~this.x;
    this.right = ~~this.x + this.width;
    
    if(
        myPlayer.top < this.bottom && myPlayer.bottom > this.top && myPlayer.left < this.right && myPlayer.right > this.left
        ){
            for(var index = 0; index < arr_enemy2.length; index++){
                if(arr_enemy2[index] == this){
                    new Explotion(arr_enemy2[index].x, arr_enemy2[index].y);
                    var boom4 = document.getElementById('boom4');
                    boom4.play();
                    arr_enemy2.splice(index, 1);
                    myHp-=15;
                    if(myHp < 0){
                        myHp = 0;
                        changjing='死亡'
                        window.startDie=f;
                    };
                }
            }
        } 
};

Enemy2.prototype.render=function(){
    // context.fillRect(this.x , this.y, this.width, this.height );
    context.drawImage(R['enemy2'], 0, 0, 239, 303, this.x, this.y, this.width, this.height);
};