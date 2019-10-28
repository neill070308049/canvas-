function Item1(){
    this.width = 72;
    this.height = 72;
    this.y = Math.random()*(mycanvas.height - myGround.height - this.height);
    this.x = mycanvas.width;
    this.speed = 7;
    this.dy=parseInt(Math.random()*20-10);
    arr_item1.push(this); 
};

Item1.prototype.update=function(){
    this.x -= this.speed;
    this.y += this.dy;
    if(this.x <this.width*-1){
        for(var index = 0; index < arr_item1.length; index++){
            if(arr_item1[index] == this){
                arr_item1.splice(index, 1);
            }
        }
    }
    if(this.y > mycanvas.height - myGround.height - this.height-50){
        this.y = mycanvas.height - myGround.height - this.height-50;
    }
    if(this.y < 20){
        this.y = 20;
    }
    
    // 碰撞检测玩家
    this.top = ~~this.y;
    this.bottom = ~~this.y + this.height;
    this.left = ~~this.x;
    this.right = ~~this.x + this.width;
    
    if(
        myPlayer.top < this.bottom && myPlayer.bottom > this.top && myPlayer.left < this.right && myPlayer.right > this.left
        ){
            for(var index = 0; index < arr_item1.length; index++){
                if(arr_item1[index] == this){
                    arr_item1.splice(index, 1);
                    var cure = document.getElementById('cure');
                    cure.play();
                    myHp+=50;
                    if(myHp > 300){
                        myHp = 300;
                    };
                }
            }
        } 
};

Item1.prototype.render=function(){
    // context.fillRect(this.x , this.y, this.width, this.height );
    context.drawImage(R['item1'], 0, 0, 72, 72, this.x, this.y, this.width, this.height);
};