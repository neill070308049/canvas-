function Enemy1(){
    this.width = 125;
    this.height = 106;
    this.y = Math.random()*(mycanvas.height - myGround.height - this.height);
    this.x = mycanvas.width;
    this.speed = 5;
    this.dy=parseInt(Math.random()*10-5);
    arr_enemy1.push(this); 
};

Enemy1.prototype.update=function(){
    this.x -= this.speed;
    this.y += this.dy;
    if(this.x <this.width*-1){
        for(var index = 0; index < arr_enemy1.length; index++){
            if(arr_enemy1[index] == this){
                arr_enemy1.splice(index, 1);
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
    if(f%50 == 0){
        new Bullet5(this.x, this.y+50);
        var bean5 = document.getElementById('bean5');
        bean5.play();
    }

    // 碰撞检测玩家
    this.top = ~~this.y;
    this.bottom = ~~this.y + this.height;
    this.left = ~~this.x;
    this.right = ~~this.x + this.width;
    
    if(
        myPlayer.top < this.bottom && myPlayer.bottom > this.top && myPlayer.left < this.right && myPlayer.right > this.left
        ){
            for(var index = 0; index < arr_enemy1.length; index++){
                if(arr_enemy1[index] == this){
                    new Explotion(arr_enemy1[index].x, arr_enemy1[index].y);
                    var boom3 = document.getElementById('boom3');
                    boom3.play();
                    arr_enemy1.splice(index, 1);
                    myHp-=20;
                    if(myHp < 0){
                        myHp = 0;
                        changjing='死亡'
                        window.startDie=f;
                    };
                }
            }
        } 
};

Enemy1.prototype.render=function(){
    // context.fillRect(this.x , this.y, this.width, this.height );
    context.drawImage(R['enemy1'], 0, 0, 245, 229, this.x, this.y, this.width, this.height);
};