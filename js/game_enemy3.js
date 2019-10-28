function Enemy3(){
    this.width = 150;
    this.height = 125;
    this.y = Math.random()*(mycanvas.height - myGround.height - this.height);
    this.x = mycanvas.width;
    this.speed = 10;
    this.dy=parseInt(Math.random()*10-5);
    arr_enemy3.push(this); 
};

Enemy3.prototype.update=function(){
    this.x -= this.speed;
    this.y += this.dy;
    if(this.x <this.width*-1){
        for(var index = 0; index < arr_enemy3.length; index++){
            if(arr_enemy3[index] == this){
                arr_enemy3.splice(index, 1);
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
    if(f%5 == 0){
        new Bullet7(this.x, this.y+20);
        var bean7 = document.getElementById('bean7');
        bean7.play();
    }

    // 碰撞检测玩家
    this.top = ~~this.y;
    this.bottom = ~~this.y + this.height;
    this.left = ~~this.x;
    this.right = ~~this.x + this.width;
    
    if(
        myPlayer.top < this.bottom && myPlayer.bottom > this.top && myPlayer.left < this.right && myPlayer.right > this.left
        ){
            for(var index = 0; index < arr_enemy3.length; index++){
                if(arr_enemy3[index] == this){
                    new Explotion(arr_enemy3[index].x, arr_enemy3[index].y);
                    var boom5 = document.getElementById('boom5');
                    boom5.play();
                    arr_enemy3.splice(index, 1);
                    myHp-=25;
                    if(myHp < 0){
                        myHp = 0;
                        changjing='死亡'
                        window.startDie=f;
                    };
                }
            }
        } 
};

Enemy3.prototype.render=function(){
    // context.fillRect(this.x , this.y, this.width, this.height );
    context.drawImage(R['enemy3'], 0, 0, 300, 251, this.x, this.y, this.width, this.height);
};