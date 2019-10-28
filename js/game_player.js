function Player(){
    this.x = 50;
    this.y = 300;
    //画布显示宽高
    this.height = 134;
    this.width = 171;
    this.isMoving = false;
    this.speed = 15;
    this.direction = 'right'
};
// 更新
Player.prototype.update=function(){
    if(this.isMoving){
        if(this.direction == 'up'){
            this.y -= this.speed;
        }else if(this.direction == 'down'){
            this.y += this.speed;
        }else if(this.direction == 'left'){
            this.x -= this.speed;
        }else if(this.direction == 'right'){
            this.x += this.speed;
        }  
    };
    if(this.x < 0){
        this.x = 0;
    }
    if(this.x > mycanvas.width - this.width){
        this.x = mycanvas.width - this.width;
    }
    if(this.y > mycanvas.height - myGround.height - this.height){
        this.y = mycanvas.height - myGround.height - this.height;
    }
    if(this.y < 0){
        this.y = 0;
    }

    this.top = ~~this.y+50;
    this.bottom = ~~this.y + this.height-50;
    this.left = ~~this.x+50;
    this.right = ~~this.x + this.width-50;
};
// 渲染
Player.prototype.render=function(){
    context.drawImage(R['player2'], 0, 0, 342, 268, this.x, this.y, this.width, this.height);
    // context.fillStyle='red';
    // context.fillText(this.top, this.x + this.width / 2 - 20, this.y - 20);
    // context.fillText(this.bottom, this.x + this.width / 2-20, this.y + this.height + 40);
    // context.fillText(this.left, this.x-40, this.y + this.height / 2 - 20);
    // context.fillText(this.right, this.x+this.width+20, this.y + this.height / 2 - 20);
    
};

// 移动
Player.prototype.stop = function () {
    this.isMoving = false;
    this.step = 0;
}
// 停止移动
Player.prototype.move = function () {
    this.isMoving = true;
}
// 转向
Player.prototype.turn = function(str){
    this.direction = str;
}
Player.prototype.shoot1 = function(){
    new Bullet1(this.x + this.width - 40, this.y + this.height/6);
}
Player.prototype.shoot2 = function(){
    new Bullet2(this.x + this.width , this.y+50);
}