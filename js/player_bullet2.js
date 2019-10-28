function Bullet2(x,y){
    this.x = x;
    this.y = y;
    this.speed = 40;
    // 在画布中显示的宽高
    this.width = 93;
    this.height = 37;
    arr_b2.push(this);
 };
 Bullet2.prototype.update=function(){
     this.x+=this.speed;
    // 与敌人1相撞
    for(var i = 0; i < arr_enemy1.length; i++){
        if(crash(this, arr_enemy1[i])){
            this.score = true;
            myScore+=2;
            new Explotion(arr_enemy1[i].x, arr_enemy1[i].y);
            var boom3 = document.getElementById('boom3');
            boom3.play();
            arr_enemy1.splice(i,1);
        };
    }

    // 与敌人2相撞
    for(var j = 0; j < arr_enemy2.length; j++){
        if(crash(this, arr_enemy2[j])){
            this.score = true;
            myScore+=3;
            new Explotion(arr_enemy2[j].x, arr_enemy2[j].y);
            var boom4 = document.getElementById('boom4');
            boom4.play();
            arr_enemy2.splice(j,1);
        };
    }
    
    // 与敌人3相撞
    for(var k = 0; k < arr_enemy3.length; k++){
        if(crash(this, arr_enemy3[k])){
            this.score = true;
            myScore+=5;
            new Explotion(arr_enemy3[k].x, arr_enemy3[k].y);
            var boom5 = document.getElementById('boom5');
                boom5.play();
            arr_enemy3.splice(k,1);
        };
    }

    for(var l = 0; l < arr_enemy4.length; l++){
        if(crash(this, arr_enemy4[l])){
            this.score = true;
            myScore+=15;
            new Explotion(arr_enemy4[l].x, arr_enemy4[l].y);
            var boom5 = document.getElementById('boom5');
                boom5.play();
            arr_enemy4.splice(l,1);
        };
        // for(var k = 0; k < arr_b3.length; k++){
        //     if(arr_b3[k] == this){
        //         arr_b3.splice(k,1);
        //     }
        // }
    }
 };
 Bullet2.prototype.render=function(){
     context.drawImage(R['bullet_p2'], 0, 0, 279, 113, this.x, this.y+40, this.width, this.height); 
     context.drawImage(R['bullet_p2'], 0, 0, 279, 113, this.x, this.y-40, this.width, this.height);   
 };