function Score(){

};

Score.prototype.update=function(){

};

Score.prototype.render=function(){
    var myScore_str=myScore.toString();
    for(var i = 0; i < myScore_str.length; i++){
        var char=myScore_str[i];
        context.drawImage(R[char], 80+22*i, 800, 43 / 2, 64 / 2);  
        context.drawImage(R['jiangpai'], 0, 0, 85, 115, 20, mycanvas.height-30-42.5, 42.5, 57.5);
    };
    context.drawImage(R['Kira_Yamato'], 0, 0, 349, 349, 20, 20, 80, 80);
};