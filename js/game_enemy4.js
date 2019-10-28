function Enemy4(){
    this.width = 201;
    this.height = 102;
    this.y = Math.random()*(mycanvas.height - myGround.height - this.height);
    this.x = mycanvas.width;
    this.speed = 12;
    this.dy=parseInt(Math.random()*10-5);
    arr_enemy4.push(this); 
};

Enemy4.prototype.update=function(){
    this.x -= this.speed;
    this.y += this.dy;
    if(this.x <this.width*-1){
        for(var index = 0; index < arr_enemy4.length; index++){
            if(arr_enemy3[index] == this){
                arr_enemy4.splice(index, 1);
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
        new Bullet8(this.x, this.y+20);
        var bean4 = document.getElementById('bean4');
        bean4.play();
    }

    // 碰撞检测玩家
    this.top = ~~this.y;
    this.bottom = ~~this.y + this.height;
    this.left = ~~this.x;
    this.right = ~~this.x + this.width;
    
    if(
        myPlayer.top < this.bottom && myPlayer.bottom > this.top && myPlayer.left < this.right && myPlayer.right > this.left
        ){
            for(var index = 0; index < arr_enemy4.length; index++){
                if(arr_enemy4[index] == this){
                    new Explotion(arr_enemy4[index].x, arr_enemy4[index].y);
                    var boom6 = document.getElementById('boom6');
                    boom6.play();
                    arr_enemy4.splice(index, 1);
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

Enemy4.prototype.render=function(){
    // context.fillRect(this.x , this.y, this.width, this.height );
    context.drawImage(R['enemy5'], 0, 0, 302, 154, this.x, this.y, this.width, this.height);
};